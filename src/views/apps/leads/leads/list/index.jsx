// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// // import QuoteListTable from './QuoteListTable'
// import CardCounters from '@/components/counter-cards'
// import TabsPanel from '@/components/tabs-panel'
// import LeadsListTable from './LeadsListTable'
// import CustomBreadcrumb from '../../../../../components/bread-crumbs'
// const OrderList = ({ leadData }) => {
//   const orderCounts = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }

//   const ordersPageTabs = [
//     {
//       label: 'All Leads',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData}></LeadsListTable>{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Aerospace and Defense',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Automative',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Consumer Products',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Energy',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Medical',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />
//         </div>
//       )
//     },
//     {
//       label: 'Oil and Gas',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     },
//     {
//       label: 'Other',
//       content: (
//         <div>
//           {' '}
//           <LeadsListTable leadData={leadData} />{' '}
//         </div>
//       )
//     }
//   ]
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Leads', path: '/apps/leads/leads' },
//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CardCounters entityType='Leads' counts={orderCounts} />
//       </Grid>

//       <Grid item xs={12}>
//         <TabsPanel tabs={ordersPageTabs} />
//       </Grid>
//     </Grid>
//   )
// }

// export default OrderList


'use client'

import React, { Suspense, lazy , useState , useEffect } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';
// Shimmer Effect Import
import Shimmer from '../../../../../components/shimmer-effect'; // Adjust the path as necessary

// Lazy load component imports
const CustomBreadcrumb = lazy(() => import('../../../../../components/bread-crumbs'));
const CardCounters = lazy(() => import('@/components/counter-cards'));
const TabsPanel = lazy(() => import('@/components/tabs-panel'));
const LeadsListTable = lazy(() => import('./LeadsListTable'));

const OrderList = ({ leadData }) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const orderCounts = {
    today: 237,
    weekly: 860,
    monthly: 4567,
    total: 21459
  };

  const ordersPageTabs = [
    {
      label: 'All Leads',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Aerospace and Defense',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Automotive',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Consumer Products',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Energy',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Medical',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Oil and Gas',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    },
    {
      label: 'Other',
      content: (
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <LeadsListTable leadData={leadData} />
        </Suspense>
      )
    }
  ];

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Leads', path: '/apps/leads/leads' },
  ];

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={150} />}>
          <CardCounters entityType='Leads' counts={orderCounts} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
          <TabsPanel tabs={ordersPageTabs} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default OrderList;
