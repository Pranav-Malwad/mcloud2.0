// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import TasksListTable from './TasksListTable'
// import TabsPanel from '../../../../components/tabs-panel/index'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
// const TasksList = ({ taskData }) => {
//   const TasksPageTabs = [
//     {
//       label: 'Open Tasks',
//       content: (
//         <div>
//           <TasksListTable  taskData={taskData}></TasksListTable>
//         </div>
//       )
//     },
//     {
//       label: 'Completed Tasks',
//       content: (
//         <div>
//           {' '}
//           <TasksListTable taskData={taskData} />{' '}
//         </div>
//       )
//     },
    
//   ]

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Tasks', path: '/apps/tasks' },
//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <TabsPanel  tabs={TasksPageTabs}></TabsPanel>
//       </Grid>
//     </Grid>
//   )
// }

// export default TasksList



'use client'

// React Imports
import React, { Suspense, useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
const TasksListTable = React.lazy(() => import('./TasksListTable'))
const TabsPanel = React.lazy(() => import('../../../../components/tabs-panel/index'))
const CustomBreadcrumb = React.lazy(() => import('../../../../components/bread-crumbs/index'))

// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect'

// Main Component
const TasksList = ({ taskData }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const TasksPageTabs = [
    {
      label: 'Open Tasks',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <TasksListTable taskData={taskData} />
        </Suspense>
      )
    },
    {
      label: 'Completed Tasks',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <TasksListTable taskData={taskData} />
        </Suspense>
      )
    },
  ]

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Tasks', path: '/apps/tasks' },
  ]

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
      <Grid  spacing={6}>
        <Grid item xs={12}>
          <Suspense fallback={<Shimmer variant="text" width="100%" height={50} />}>
            <CustomBreadcrumb breadcrumbs={breadcrumbs} />
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={150} />}>
            <TabsPanel tabs={TasksPageTabs} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  )
}

export default TasksList
