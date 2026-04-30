// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import CardCounters from '@/components/counter-cards'
// import TabsPanel from '@/components/tabs-panel'
// import OrderListTable from './OrderListTable'
// import MyOrdersTable from './MyOrdersTable'
// import ShipmentsTable from './ShipmentsTable'
// import FeedbackTable from './FeedbackTable'
// import CompletedOrders from './CompletedOrders'
// import RejectedOrders from './RejectedOrders'
// import TotalOrders from './TotalOrders'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
// const OrderList = ({ orderData }) => {
//   const orderCounts = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }

//   const ordersPageTabs = [
//     {
//       label: 'Review Orders',
//       content: (
//         <div>
//           {' '}
//           <OrderListTable orderData={orderData}></OrderListTable>{' '}
//         </div>
//       )
//     },
//     {
//       label: 'My Orders',
//       content: (
//         <div>
//           {' '}
          
//           <MyOrdersTable orderData={orderData}/>
//         </div>
//       )
//     },
//     {
//       label: 'Shipments',
//       content: (
//         <div>
//           {' '}
//          <ShipmentsTable orderData={orderData}/>
//         </div>
//       )
//     },
//     {
//       label: 'Feedback',
//       content: (
//         <div>
//           {' '}
//          <FeedbackTable orderData={orderData}/>
//         </div>
//       )
//     },
//     {
//       label: 'Completed Orders',
//       content: (
//         <div>
//           {' '}
//          <CompletedOrders orderData={orderData}/>
//         </div>
//       )
//     },
//     {
//       label: 'Rejected Orders',
//       content: (
//         <div>
//           {' '}
//           <RejectedOrders orderData={orderData}/>
//         </div>
//       )
//     },
//     {
//       label: 'Total Orders',
//       content: (
//         <div>
//           {' '}
//          <TotalOrders orderData={orderData} />
//         </div>
//       )
//     }
//   ]

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Orders', path: '/apps/orders' },
//   ]

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CardCounters entityType='Orders' counts={orderCounts} />
//       </Grid>

//       <Grid item xs={12}>
//         <TabsPanel tabs={ordersPageTabs} />
//       </Grid>
//     </Grid>
//   )
// }

// export default OrderList


'use client'

import React, { Suspense, lazy, useState, useEffect } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect/index' // Adjust the path as necessary

// Component Imports (Using lazy loading)
const CardCounters = lazy(() => import('@/components/counter-cards'));
const TabsPanel = lazy(() => import('@/components/tabs-panel'));
const OrderListTable = lazy(() => import('./OrderListTable'));
const MyOrdersTable = lazy(() => import('./MyOrdersTable'));
const ShipmentsTable = lazy(() => import('./ShipmentsTable'));
const FeedbackTable = lazy(() => import('./FeedbackTable'));
const CompletedOrders = lazy(() => import('./CompletedOrders'));
const RejectedOrders = lazy(() => import('./RejectedOrders'));
const TotalOrders = lazy(() => import('./TotalOrders'));
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs/index'));

const OrderList = ({ orderData }) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const orderCounts = {
    today: 237,
    weekly: 860,
    monthly: 4567,
    total: 21459
  }

  const ordersPageTabs = [
    {
      label: 'Review Orders',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <OrderListTable orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'My Orders',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <MyOrdersTable orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'Shipments',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <ShipmentsTable orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'Feedback',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <FeedbackTable orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'Completed Orders',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CompletedOrders orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'Rejected Orders',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <RejectedOrders orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'Total Orders',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <TotalOrders orderData={orderData} />
        </Suspense>
      )
    }
  ]

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Orders', path: '/apps/orders' },
  ]

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CardCounters entityType='Orders' counts={orderCounts} />
        </Suspense>
      </Grid>

      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <TabsPanel tabs={ordersPageTabs} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  )
}

export default OrderList;
