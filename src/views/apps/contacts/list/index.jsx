// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import CardCounters from '@/components/counter-cards'
// import CustomerListTable from './CustomerListTable'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'


// const ContactList = ({ customerData }) => {
//   const contactCounts = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }

  
//   const breadcrumbs = [
//     { label: 'Home', path: '/'  },
//     { label: 'Contacts', path: '/apps/contacts' },
//   ]
  
//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CardCounters entityType='Contacts' counts={contactCounts} />
//       </Grid>
//       <Grid item xs={12}>
//         <CustomerListTable customerData={customerData} />
//       </Grid>
//     </Grid>
//   )
// }

// export default ContactList



'use client';

// React Imports
import React, { Suspense, lazy , useState, useEffect } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index';

// Lazy Load Components
const CardCounters = lazy(() => import('@/components/counter-cards'));
const CustomerListTable = lazy(() => import('./CustomerListTable'));
const CustomBreadcrumb = lazy(() => import('../../../../components/bread-crumbs/index'));

const ContactList = ({ customerData }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const contactCounts = {
    today: 237,
    weekly: 860,
    monthly: 4567,
    total: 21459
  };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contacts', path: '/apps/contacts' },
  ];

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={60} />}>
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={80} />}>
          <CardCounters entityType='Contacts' counts={contactCounts} />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
          <CustomerListTable customerData={customerData} />
        </Suspense>
      </Grid>
    </Grid>
    </div>
  );
};

export default ContactList;
