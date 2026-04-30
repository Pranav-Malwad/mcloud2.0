// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports

// import QuoteDetailHeader from './QuoteDetailHeader'
// import TaskDetailsCard from './TaskDetailsCard'
// import CustomBreadcrumb from '../../../../components/bread-crumbs'
// const QuoteDetails = ({ orderData, order }) => {
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Tasks', path: '/apps/tasks' },
//     { label: `Task #${order || 'ID'}`, path: `/tasks/${order || 'ID'}` }
//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <QuoteDetailHeader orderData={orderData} order={order} />
//       </Grid>
     
//       <Grid item xs={12} >
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <TaskDetailsCard orderData={orderData} />
//           </Grid>
         
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default QuoteDetails


"use client"

import React, { Suspense, lazy } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect/index'; // Adjust the path as necessary

// Lazy load component imports
const QuoteDetailHeader = lazy(() => import('./QuoteDetailHeader'));
const TaskDetailsCard = lazy(() => import('./TaskDetailsCard'));
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs'));

const QuoteDetails = ({ orderData, order }) => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Tasks', path: '/apps/tasks' },
    { label: `Task #${order || 'ID'}`, path: `/tasks/${order || 'ID'}` }
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={50} />}>
          <QuoteDetailHeader orderData={orderData} order={order} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
              <TaskDetailsCard orderData={orderData} />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuoteDetails;
