import { appConfig } from '@/services/config/appConfig'

export const getStoredSession = () => {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(appConfig.authStorageKey)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const setStoredSession = value => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(appConfig.authStorageKey, JSON.stringify(value))
}

export const clearStoredSession = () => {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(appConfig.authStorageKey)
}
