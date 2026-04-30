// // MUI Imports
// import Grid from '@mui/material/Grid'
// import { getEcommerceData } from '@/app/server/actions'

// // Component Imports
// import ApolloDetailHeader from './ApolloDetailHeader'
// import ApolloInformationCard from './ApolloInformationCard'
// import ApolloDetailsCard from './ApolloDetailsCard'
// import OrderListTable from './OrderListTable'
// import TabsPanel from '../../../../../components/tabs-panel/index'
// import CustomBreadcrumb from '../../../../../components/bread-crumbs'
// // This will be a server component (no 'use client' directive)
// const QuoteDetails = async ({ orderData, order }) => {
//   const data = await getEcommerceData()
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Apollo Leads', path: '/apps/leads/apollo_leads' },
//     { label: `Apollo Lead #${order || 'ID'}`, path: `/apollo_leads/${order || 'ID'}` }
//   ]
//   const ordersPageTabs = [
//     {
//       label: 'Apollo Lead Accepted',
//       content: (
//         <div>
//           {' '}
//           <OrderListTable orderData={data?.orderData} />
//         </div>
//       )
//     },
//     {
//       label: 'Apollo Lead Rejected',
//       content: (
//         <div>
//           {' '}
//           <OrderListTable orderData={data?.orderData} />
//         </div>
//       )
//     },
//     {
//       label: 'Mcloud Leads',
//       content: (
//         <div>
//           {' '}
//           <OrderListTable orderData={data?.orderData} />
//         </div>
//       )
//     },
//     {
//       label: 'Marketing Leads',
//       content: (
//         <div>
//           {' '}
//           <OrderListTable orderData={data?.orderData} />
//         </div>
//       )
//     }
//   ]

//   return (
//     <Grid container spacing={6}>
//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <ApolloDetailHeader orderData={orderData} order={order} />
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <ApolloInformationCard />
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <ApolloDetailsCard />
//       </Grid>
//       <Grid item xs={12}>
//         <TabsPanel tabs={ordersPageTabs}></TabsPanel>
//       </Grid>
//     </Grid>
//   )
// }

// export default QuoteDetails




// Next Imports
import dynamic from 'next/dynamic';

// MUI Imports
import Grid from '@mui/material/Grid';

// Shimmer Import
import Shimmer from "../../../../../components/shimmer-effect/index";
import { getEcommerceData } from '@/app/server/actions';

// Dynamic Imports for Components with Lazy Loading
const ApolloDetailHeader = dynamic(() => import('./ApolloDetailHeader'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={80} />
});
const ApolloInformationCard = dynamic(() => import('./ApolloInformationCard'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={400} />
});
const ApolloDetailsCard = dynamic(() => import('./ApolloDetailsCard'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={400} />
});
const OrderListTable = dynamic(() => import('./OrderListTable'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={400} />
});
const TabsPanel = dynamic(() => import('../../../../../components/tabs-panel/index'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={400} />
});
const CustomBreadcrumb = dynamic(() => import('../../../../../components/bread-crumbs'), {
  ssr: false,
  loading: () => <Shimmer variant="rectangular" width="100%" height={60} />
});

// This will be a server component (no 'use client' directive)
const QuoteDetails = async ({ orderData, order }) => {
  const data = await getEcommerceData();
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Apollo Leads', path: '/apps/leads/apollo_leads' },
    { label: `Apollo Lead #${order || 'ID'}`, path: `/apollo_leads/${order || 'ID'}` }
  ];

  const ordersPageTabs = [
    {
      label: 'Apollo Lead Accepted',
      content: <OrderListTable orderData={data?.orderData} />
    },
    {
      label: 'Apollo Lead Rejected',
      content: <OrderListTable orderData={data?.orderData} />
    },
    {
      label: 'Mcloud Leads',
      content: <OrderListTable orderData={data?.orderData} />
    },
    {
      label: 'Marketing Leads',
      content: <OrderListTable orderData={data?.orderData} />
    }
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomBreadcrumb breadcrumbs={breadcrumbs} />
      </Grid>
      <Grid item xs={12}>
        <ApolloDetailHeader orderData={orderData} order={order} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ApolloInformationCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <ApolloDetailsCard />
      </Grid>
      <Grid item xs={12}>
        <TabsPanel tabs={ordersPageTabs} />
      </Grid>
    </Grid>
  );
};

export default QuoteDetails;
