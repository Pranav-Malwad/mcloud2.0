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

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index';

// Lazy Load Components
const AccountListTable = lazy(() => import('./AccountListTable'));

const ContactList = ({ customerData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={isLoaded ? 'flex flex-col h-[calc(100vh-210px)] overflow-hidden' : 'hidden'}>
      <Suspense fallback={<Shimmer variant="rectangular" width="100%" height="100%" />}>
        <AccountListTable customerData={customerData} />
      </Suspense>
    </div>
  );
};

export default ContactList;
