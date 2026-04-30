import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = React.forwardRef(({ href = '#', children, ...rest }, ref) => {
  const to = typeof href === 'string' ? href : href?.pathname || '#'

  return (
    <RouterLink ref={ref} to={to} {...rest}>
      {children}
    </RouterLink>
  )
})

Link.displayName = 'Link'

export default Link
