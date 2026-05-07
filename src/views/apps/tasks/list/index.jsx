'use client'

// React Imports
import React, { Suspense, useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
const TasksListTable = React.lazy(() => import('./TasksListTable'))
const TabsPanel = React.lazy(() => import('../../../../components/tabs-panel/index'))

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



  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
      <Grid container spacing={6}>
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
