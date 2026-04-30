// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import ResearchListTable from './ResearchListTable'
// import CustomBreadcrumb from '../../../../../components/bread-crumbs/index'
// const ResearchList = ({ researchData }) => {
 
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Research', path: '/apps/research' },
   
//   ]
//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <ResearchListTable researchData={researchData} />
//       </Grid>
//     </Grid>
//   )
// }

// export default ResearchList

'use client'
import React, { Suspense, lazy , useState , useEffect } from 'react';
// MUI Imports
import Grid from '@mui/material/Grid';
// Shimmer Effect Import
import ShimmerEffect from '../../../../../components/shimmer-effect/index';

// Lazy load component imports
const ResearchListTable = lazy(() => import('./ResearchListTable'));
const CustomBreadcrumb = lazy(() => import('../../../../../components/bread-crumbs/index'));

const ResearchList = ({ researchData }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Research', path: '/apps/research' },
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
        <Suspense fallback={<ShimmerEffect variant="rectangular" width="100%" height={400} />}>
          <ResearchListTable researchData={researchData} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default ResearchList;
