import { Navigate } from 'react-router-dom'
import { useSession } from 'next-auth/react'

import themeConfig from '@configs/themeConfig'
import { getLocalizedUrl } from '@/utils/i18n'

const GuestOnlyRoute = ({ children, lang }) => {
  const { status } = useSession()

  if (status === 'authenticated') {
    return <Navigate to={getLocalizedUrl(themeConfig.homePageUrl, lang)} replace />
  }

  return <>{children}</>
}

export default GuestOnlyRoute
