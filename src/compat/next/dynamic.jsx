import React, { Suspense, lazy } from 'react'

export default function dynamic(loader, options = {}) {
  const LazyComponent = lazy(loader)
  const fallback = options.loading ? React.createElement(options.loading) : null

  const DynamicComponent = props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  return DynamicComponent
}
