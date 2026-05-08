// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import CardCounters from '@/components/counter-cards'
// import AccountListTable from './AccountListTable'
// import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
// const ContactList = ({ customerData }) => {
//   const accountCounts = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Accounts', path: '/apps/accounts' },

//   ]

//   return (
//     <Grid container spacing={6}>
//     <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CardCounters entityType='Accounts' counts={accountCounts} />
//       </Grid>
//       <Grid item xs={12}>
//         <AccountListTable customerData={customerData} />
//       </Grid>
//     </Grid>
//   )
// }

// export default ContactList

'use client';

// React Imports
import React, { Suspense, lazy, useState, useEffect } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index';

// Component Imports
import CardCounters from '@/components/counter-cards';

// Lazy Load Components
const AccountListTable = lazy(() => import('./AccountListTable'));

const ContactList = ({ customerData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const accountCounts = {
    today: 237,
    weekly: 860,
    monthly: 4567,
    total: 21459
  }

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>

      <Grid container columnSpacing={4} rowSpacing={2} sx={{ mt: -0.75 }}>
        <Grid item xs={12} sx={{ pt: '0px !important' }}>
          <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={80} />}>
            <CardCounters entityType='Accounts' counts={accountCounts} />
          </Suspense>
        </Grid>
        <Grid item xs={12} sx={{ pt: '8px !important' }}>
          <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
            <AccountListTable customerData={customerData} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactList;
