import { useMemo } from 'react'
import { useLocation, useNavigate, useParams as useRouterParams, useSearchParams as useRRSearchParams } from 'react-router-dom'

export const useRouter = () => {
  const navigate = useNavigate()

  return {
    push: to => navigate(to),
    replace: to => navigate(to, { replace: true }),
    back: () => navigate(-1),
    refresh: () => window.location.reload()
  }
}

export const usePathname = () => {
  const location = useLocation()
  return location.pathname
}

export const useParams = () => useRouterParams()

export const useSearchParams = () => {
  const [params] = useRRSearchParams()
  return params
}

export const redirect = to => {
  if (typeof window !== 'undefined') {
    window.location.assign(to)
  }
}

export const notFound = () => {
  if (typeof window !== 'undefined') {
    window.location.assign('/not-found')
  }
}

export const headers = () => {
  return new Map()
}
