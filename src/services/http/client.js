import { appConfig } from '@/services/config/appConfig'

const withTimeout = async (promise, timeoutMs) => {
  let timeoutId

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Request timed out after ${timeoutMs}ms`))
    }, timeoutMs)
  })

  try {
    return await Promise.race([promise, timeoutPromise])
  } finally {
    clearTimeout(timeoutId)
  }
}

const buildUrl = path => {
  if (/^https?:\/\//.test(path)) return path

  if (!appConfig.apiBaseUrl) {
    throw new Error('VITE_API_URL (or API_URL) is not configured for API mode')
  }

  const normalizedBase = appConfig.apiBaseUrl.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizedBase}${normalizedPath}`
}

export const httpRequest = async (path, options = {}) => {
  const {
    method = 'GET',
    headers = {},
    body,
    token,
    timeoutMs = appConfig.requestTimeoutMs,
    parseAs = 'json'
  } = options

  const requestHeaders = {
    Accept: 'application/json',
    ...headers
  }

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`
  }

  if (body !== undefined && body !== null && !requestHeaders['Content-Type']) {
    requestHeaders['Content-Type'] = 'application/json'
  }

  const payload = typeof body === 'string' ? body : body != null ? JSON.stringify(body) : undefined

  const response = await withTimeout(
    fetch(buildUrl(path), {
      method,
      headers: requestHeaders,
      body: payload
    }),
    timeoutMs
  )

  const parsedBody = parseAs === 'text' ? await response.text() : await response.json().catch(() => null)

  if (!response.ok) {
    const message = parsedBody?.message || response.statusText || 'Request failed'
    const error = new Error(Array.isArray(message) ? message.join(', ') : message)
    error.status = response.status
    error.payload = parsedBody
    throw error
  }

  return parsedBody
}

export const httpGet = (path, options = {}) => httpRequest(path, { ...options, method: 'GET' })
export const httpPost = (path, body, options = {}) => httpRequest(path, { ...options, method: 'POST', body })
