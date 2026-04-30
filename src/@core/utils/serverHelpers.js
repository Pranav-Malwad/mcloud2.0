// Config Imports
import themeConfig from '@configs/themeConfig'

const getCookieValue = key => {
  if (typeof document === 'undefined') return undefined

  const matched = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${key}=`))

  return matched ? decodeURIComponent(matched.split('=')[1]) : undefined
}

export const getSettingsFromCookie = () => {
  const cookieName = themeConfig.settingsCookieName

  try {
    return JSON.parse(getCookieValue(cookieName) || '{}')
  } catch {
    return {}
  }
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()
  return settingsCookie.mode || themeConfig.mode
}

export const getSystemMode = () => {
  const mode = getMode()
  const colorPrefCookie = getCookieValue('colorPref') || 'light'

  return (mode === 'system' ? colorPrefCookie : mode) || 'light'
}

export const getServerMode = () => {
  const mode = getMode()
  const systemMode = getSystemMode()

  return mode === 'system' ? systemMode : mode
}

export const getSkin = () => {
  const settingsCookie = getSettingsFromCookie()

  return settingsCookie.skin || 'default'
}
