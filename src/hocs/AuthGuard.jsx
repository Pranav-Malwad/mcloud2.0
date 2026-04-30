import { Navigate, useLocation } from 'react-router-dom'
import { useSession } from 'next-auth/react'

export default function AuthGuard({ children, locale }) {
  const { status } = useSession()
  const location = useLocation()

  if (status !== 'authenticated') {
    const redirectTo = encodeURIComponent(location.pathname + location.search)
    return <Navigate to={`/${locale}/login?redirectTo=${redirectTo}`} replace />
  }

  return <>{children}</>
}
