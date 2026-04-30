// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports

// import QuoteDetailsCard from './CaseDetailsCard'
// import QuoteDetailHeader from './QuoteDetailHeader'
// import CaseInformationCard from './CaseInformationCard'
// import CaseDetailsCard from './CaseDetailsCard'
// import CustomBreadcrumb from '../../../../components/bread-crumbs'
// const QuoteDetails = ({ orderData, order }) => {
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Cases', path: '/apps/cases' },
//     { label: `Case #${order || 'ID'}`, path: `/cases/${order || 'ID'}` }
//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <QuoteDetailHeader orderData={orderData} order={order} />
//       </Grid>
      
//       <Grid item xs={12} md={4}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <CaseInformationCard orderData={orderData}/>
//           </Grid>
          
//         </Grid>
//       </Grid>


//       <Grid item xs={12} md={8}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <CaseDetailsCard />
//           </Grid>
          
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default QuoteDetails


'use client'
import React, { Suspense, lazy } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';
// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect'; // Adjust the path as necessary

// Lazy load component imports
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs'));
const QuoteDetailHeader = lazy(() => import('./QuoteDetailHeader'));
const CaseInformationCard = lazy(() => import('./CaseInformationCard'));
const CaseDetailsCard = lazy(() => import('./CaseDetailsCard'));

const QuoteDetails = ({ orderData, order }) => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Cases', path: '/apps/cases' },
    { label: `Case #${order || 'ID'}`, path: `/cases/${order || 'ID'}` }
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
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
              <CaseInformationCard orderData={orderData} />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={300} />}>
              <CaseDetailsCard />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default QuoteDetails;
