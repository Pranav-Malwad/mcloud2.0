// 'use client'

// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Breadcrumbs, Link, Typography, Box } from '@mui/material'

// const CustomBreadcrumb = ({ breadcrumbs }) => {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const handleBreadcrumbClick = (index) => {
//     setActiveIndex(index)
//   }

//   return (
//     <Box sx={{ margin: '16px 0' }}>
//       <Breadcrumbs aria-label="breadcrumb">
//         {breadcrumbs.map((breadcrumb, index) => {
//           const isLast = index === breadcrumbs.length - 1

//           return isLast ? (
//             <Typography key={index} color="text.primary">
//               {breadcrumb.label}
//             </Typography>
//           ) : (
//             <Link
//               key={index}
//               href={breadcrumb.href}
//               underline="hover"
//               color={index === activeIndex ? 'primary' : 'inherit'}
//               onClick={() => handleBreadcrumbClick(index)}
//             >
//               {breadcrumb.label}
//             </Link>
//           )
//         })}
//       </Breadcrumbs>
//     </Box>
//   )
// }

// CustomBreadcrumb.propTypes = {
//   breadcrumbs: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired
//     })
//   ).isRequired
// }

// export default CustomBreadcrumb

'use client'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Box } from '@mui/material'
import { useRouter } from 'next/navigation'

const CustomBreadcrumb = ({ breadcrumbs }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()

  const handleBreadcrumbClick = (index, path) => {
    setActiveIndex(index)
    router.push(path)
  }

  return (
    <Box sx={{ margin: '16px 0' }}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return isLast ? (
            <Typography key={index} color="text.primary">
              {breadcrumb.label}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              color={index === activeIndex ? 'primary' : 'inherit'}
              onClick={(e) => {
                e.preventDefault()
                handleBreadcrumbClick(index, breadcrumb.path)
              }}
              sx={{ cursor: 'pointer' }}
            >
              {breadcrumb.label}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

CustomBreadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CustomBreadcrumb
