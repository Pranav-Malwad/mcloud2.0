import { useMemo } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export const AppRouterCacheProvider = ({ children, options = {} }) => {
  const cache = useMemo(() => {
    return createCache({
      key: options.key || 'mui',
      prepend: options.prepend ?? true,
      stylisPlugins: options.stylisPlugins
    })
  }, [options.key, options.prepend, options.stylisPlugins])

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
