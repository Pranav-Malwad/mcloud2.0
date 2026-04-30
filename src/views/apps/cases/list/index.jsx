// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
// // Component Imports
// import CaseListTable from './CaseListTable'

// const CasesList = ({ orderData }) => {
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Cases', path: '/apps/cases' },
//   ]
//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CaseListTable orderData={orderData} />
//       </Grid>
//     </Grid>
//   )
// }

// export default CasesList



'use client'

import React, { Suspense, lazy , useState , useEffect } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Component Import
import Shimmer from '../../../../components/shimmer-effect'; // Adjust the path as necessary

// Lazy load component imports
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs/index'));
const CaseListTable = lazy(() => import('./CaseListTable'));

const CasesList = ({ orderData }) => {


  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Cases', path: '/apps/cases' },
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
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CaseListTable orderData={orderData} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default CasesList;
