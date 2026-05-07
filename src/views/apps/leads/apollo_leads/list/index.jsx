'use client'

// Next Imports
import React, { Suspense, lazy, useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Shimmer Effect Import
import ShimmerEffect from '../../../../../components/shimmer-effect/index'

const ApolloLeadsListTable = lazy(() => import('./ApolloLeadsListTable'))

const OrderList = ({ apolloLeadData }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])



  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Suspense fallback={<ShimmerEffect variant='rectangular' width='100%' height={300} />}>
            <ApolloLeadsListTable apolloLeadData={apolloLeadData} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderList
