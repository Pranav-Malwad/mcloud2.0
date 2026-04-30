// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index'
import { getEcommerceData } from '@/app/server/actions'

// Dynamic Imports for Components with Lazy Loading
const CustomerDetailsHeader = dynamic(() => import('./CustomerDetailsHeader'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={80} />
})
const CustomerLeftOverview = dynamic(() => import('./customer-left-overview'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const CustomerRight = dynamic(() => import('./customer-right'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const OrderListTable = dynamic(() => import('./OrderListTable'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const CustomBreadcrumb = dynamic(() => import('../../../../components/bread-crumbs'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={60} />
})

// Dynamic Imports for Tabs with Lazy Loading
const OverViewTab = dynamic(() => import('@views/apps/contacts/details/customer-right/overview'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const SecurityTab = dynamic(() => import('@views/apps/contacts/details/customer-right/security'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const NotificationTab = dynamic(() => import('@views/apps/contacts/details/customer-right/notification'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const AddressBillingTab = dynamic(() => import('@views/apps/contacts/details/customer-right/address-billing'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const PreferencesTab = dynamic(() => import('@views/apps/contacts/details/customer-right/preferences'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})

// Vars
const tabContentList = () => ({
  overview: <OverViewTab />,
  addressBilling: <AddressBillingTab />,
  preferences: <PreferencesTab />,
  security: <SecurityTab />,
  Notification: <NotificationTab />
})

const CustomerDetails = async ({ customerData, customerId }) => {
  const tableData = await getEcommerceData()

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contacts', path: '/apps/contacts' },
    { label: `Contact #${customerId || 'ID'}`, path: `/contacts/${customerId || 'ID'}` }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomBreadcrumb breadcrumbs={breadcrumbs} />
      </Grid>
      <Grid item xs={12}>
        <CustomerDetailsHeader customerId={customerId} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomerLeftOverview customerData={customerData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <CustomerRight tabContentList={tabContentList()} />
      </Grid>
      <Grid item xs={12}>
        <OrderListTable orderData={tableData?.orderData} />
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
