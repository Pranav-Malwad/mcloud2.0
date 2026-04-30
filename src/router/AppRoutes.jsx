import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BlankShell, DashboardShell, FrontPagesShell, GuestShell } from '@/router/RouteShells'

const pageModules = import.meta.glob('../app/**/page.jsx')

const normalizeRoutePath = filePath => {
  const appPart = filePath.split('/app/')[1]
  if (!appPart) return null

  const raw = appPart.replace(/\/page\.jsx$/, '')
  if (raw.startsWith('api/')) return null

  const segments = raw.split('/').filter(Boolean).filter(segment => !/^\(.*\)$/.test(segment))

  const routeSegments = segments.map(segment => {
    if (segment.startsWith('[...') && segment.endsWith(']')) return '*'
    if (segment.startsWith('[') && segment.endsWith(']')) return `:${segment.slice(1, -1)}`
    return segment
  })

  return `/${routeSegments.join('/')}`
}

const dedupe = routes => {
  const map = new Map()
  routes.forEach(route => {
    if (route.path && route.Component) {
      map.set(route.path, route.Component)
    }
  })

  return Array.from(map.entries()).map(([path, Component]) => ({ path, Component }))
}

const generatedRoutes = dedupe(
  Object.entries(pageModules).map(([filePath, loader]) => ({
    path: normalizeRoutePath(filePath),
    Component: lazy(loader)
  }))
)

const RouteFallback = () => <div className='p-6'>Loading page...</div>

const guestPathPatterns = [
  '/:lang/login',
  '/:lang/register',
  '/:lang/forgot-password',
  '/:lang/pages/auth/login-v1',
  '/:lang/pages/auth/login-v2',
  '/:lang/pages/auth/register-v1',
  '/:lang/pages/auth/register-v2',
  '/:lang/pages/auth/register-multi-steps',
  '/:lang/pages/auth/forgot-password-v1',
  '/:lang/pages/auth/forgot-password-v2'
]

const blankOnlyPathPatterns = [
  '/:lang/pages/auth/reset-password-v1',
  '/:lang/pages/auth/reset-password-v2',
  '/:lang/pages/auth/two-steps-v1',
  '/:lang/pages/auth/two-steps-v2',
  '/:lang/pages/auth/verify-email-v1',
  '/:lang/pages/auth/verify-email-v2',
  '/:lang/pages/misc/401-not-authorized',
  '/:lang/pages/misc/404-not-found',
  '/:lang/pages/misc/coming-soon',
  '/:lang/pages/misc/under-maintenance'
]

const isFrontPagePath = path => path.startsWith('/front-pages')
const isGuestPath = path => guestPathPatterns.includes(path)
const isBlankOnlyPath = path => blankOnlyPathPatterns.includes(path)

const wrapElement = (path, Component) => {
  const lazyElement = (
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  )

  if (isFrontPagePath(path)) return <FrontPagesShell>{lazyElement}</FrontPagesShell>
  if (isGuestPath(path)) return <GuestShell lang='en'>{lazyElement}</GuestShell>
  if (isBlankOnlyPath(path)) return <BlankShell>{lazyElement}</BlankShell>

  return <DashboardShell lang='en'>{lazyElement}</DashboardShell>
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/en/dashboards/crm' replace />} />
      {generatedRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={wrapElement(path, Component)} />
      ))}
      <Route path='*' element={<Navigate to='/en/pages/misc/404-not-found' replace />} />
    </Routes>
  )
}

export default AppRoutes
