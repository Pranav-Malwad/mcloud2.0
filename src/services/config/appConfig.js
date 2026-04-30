const readViteEnv = key => {
  if (typeof import.meta !== 'undefined' && import.meta.env && key in import.meta.env) {
    return import.meta.env[key]
  }

  return undefined
}

const readProcessEnv = key => {
  if (typeof process !== 'undefined' && process?.env && key in process.env) {
    return process.env[key]
  }

  return undefined
}

const readEnv = (key, fallback = '') => {
  const value = readViteEnv(key) ?? readProcessEnv(key)

  if (value === undefined || value === null || value === '') return fallback

  return value
}

export const appConfig = {
  apiBaseUrl: readEnv('VITE_API_URL', readEnv('API_URL', '')),
  dataMode: readEnv('VITE_DATA_MODE', 'mock').toLowerCase(),
  requestTimeoutMs: Number(readEnv('VITE_REQUEST_TIMEOUT_MS', '15000')),
  authStorageKey: readEnv('VITE_AUTH_STORAGE_KEY', 'mcloud_auth_session')
}

export const isApiMode = () => appConfig.dataMode === 'api'
