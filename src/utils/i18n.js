// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { ensurePrefix } from '@/utils/string'

// Check if the url is missing the locale
export const isUrlMissingLocale = url => {
  return i18n.locales.every(locale => !(url.startsWith(`/${locale}/`) || url === `/${locale}`))
}

const normalizeUrlPath = url => {
  const normalizedWithPrefix = ensurePrefix(url, '/').replace(/\/{2,}/g, '/')

  // Protect against accidental duplication like /apps/apps/...
  return normalizedWithPrefix
    .replace(/^\/apps\/apps(?=\/|$)/, '/apps')
    .replace(/^\/([a-z]{2})\/apps\/apps(?=\/|$)/, '/$1/apps')
}

// Get the localized url
export const getLocalizedUrl = (url, languageCode) => {
  if (!url || !languageCode) throw new Error("URL or Language Code can't be empty")

  const normalizedUrl = normalizeUrlPath(url)

  return isUrlMissingLocale(normalizedUrl) ? `/${languageCode}${normalizedUrl}` : normalizedUrl
}
