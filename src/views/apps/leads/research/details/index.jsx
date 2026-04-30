// // Next Imports

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import CustomerDetailsHeader from './CustomerDetailsHeader'
// import CustomBreadcrumb from '../../../../../components/bread-crumbs'
// import CaseInformationCard from './CaseInformationCard'
// import CaseDetailsCard from './CaseDetailsCard'

// const CustomerDetails = ({ researchData, customerId }) => {
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Researches', path: '/apps/leads/research' },
//     { label: `Research #${customerId || 'ID'}`, path: `/research/${customerId || 'ID'}` }

//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CustomerDetailsHeader customerId={customerId} />
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <CaseInformationCard></CaseInformationCard>
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <CaseDetailsCard></CaseDetailsCard>
//       </Grid>
//     </Grid>
//   )
// }

// export default CustomerDetails



// Next Imports
'use client'
import React, { Suspense, lazy , useState , useEffect } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Effect Import
import ShimmerEffect from '../../../../../components/shimmer-effect/index';

// Lazy load component imports
const CustomerDetailsHeader = lazy(() => import('./CustomerDetailsHeader'));
const CustomBreadcrumb = lazy(() => import('../../../../../components/bread-crumbs'));
const CaseInformationCard = lazy(() => import('./CaseInformationCard'));
const CaseDetailsCard = lazy(() => import('./CaseDetailsCard'));

const CustomerDetails = ({ researchData, customerId }) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Researches', path: '/apps/leads/research' },
    { label: `Research #${customerId || 'ID'}`, path: `/research/${customerId || 'ID'}` },
  ];

  return (

    <div className={isLoaded ? 'visible' : 'hidden'}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={50} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={50} />}>
          <CustomerDetailsHeader customerId={customerId} />
        </Suspense>
      </Grid>
      <Grid item xs={12} md={4}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
          <CaseInformationCard />
        </Suspense>
      </Grid>
      <Grid item xs={12} md={8}>
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={300} />}>
          <CaseDetailsCard />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default CustomerDetails;
