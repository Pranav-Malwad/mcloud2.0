// // Next Imports
// import dynamic from 'next/dynamic'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import CustomerDetailsHeader from './CustomerDetailsHeader'
// import CustomerLeftOverview from './customer-left-overview'
// import CustomerRight from './customer-right'
// import OrderListTable from './OrderListTable'
// import CustomBreadcrumb from '../../../../components/bread-crumbs'
// import {  getEcommerceData } from '@/app/server/actions'
// import ContactListTable from './ContactListTable'

// const OverViewTab = dynamic(() => import('@views/apps/accounts/details/customer-right/overview'))
// const SecurityTab = dynamic(() => import('@views/apps/accounts/details/customer-right/security'))
// const NotificationTab = dynamic(() => import('@views/apps/accounts/details/customer-right/notification'))

// const AddressBillingTab = dynamic(
//   () => import('@views/apps/accounts/details/customer-right/address-billing')
// )

// const PreferencesTab = dynamic(() => import('@views/apps/accounts/details/customer-right/preferences'))
// // Vars
// const tabContentList = () => ({
//   overview: <OverViewTab />,
//   addressBilling: <AddressBillingTab />,
//   preferences: <PreferencesTab/>,
//   // security: <SecurityTab />,
//   Notification:<NotificationTab/>

// })

// const CustomerDetails = async({ customerData, customerId }) => {

//   const tableData = await getEcommerceData()

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Accounts', path: '/apps/accounts' },
//     { label: `Account #${customerId || 'ID'}`, path: `/accounts/${customerId || 'ID'}` }
//   ]

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CustomerDetailsHeader customerId={customerId} />
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <CustomerLeftOverview customerData={customerData} />
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <CustomerRight tabContentList={tabContentList()} />
//       </Grid>
//       <Grid item xs={12}>
//       <OrderListTable orderData={tableData?.orderData}   />
//       </Grid>
//       <Grid item xs={12}>
//       <ContactListTable orderData={tableData?.orderData}   />
//       </Grid>
//     </Grid>
//   )
// }

// export default CustomerDetails

// Next Imports
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getLocalizedUrl } from '@/utils/i18n'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import React, { Suspense, useEffect, useState } from 'react'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Shimmer Import
import Shimmer from '../../../../components/shimmer-effect/index'
import { getEcommerceData } from '@/app/server/actions'

const CustomerRight = dynamic(() => import('./customer-right'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})

const OrderListTable = dynamic(() => import('./OrderListTable'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})

const ContactListTable = dynamic(() => import('./ContactListTable'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})

// Dynamic Imports for Tabs with Lazy Loading
const OverViewTab = dynamic(() => import('@views/apps/accounts/details/customer-right/overview'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const SecurityTab = dynamic(() => import('@views/apps/accounts/details/customer-right/security'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const NotificationTab = dynamic(() => import('@views/apps/accounts/details/customer-right/notification'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const AddressBillingTab = dynamic(() => import('@views/apps/accounts/details/customer-right/address-billing'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const FinanceTab = dynamic(() => import('@views/apps/accounts/details/customer-right/finance'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const TeamAssignmentTab = dynamic(() => import('@views/apps/accounts/details/customer-right/team-assignment'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const LeadAttributionTab = dynamic(() => import('@views/apps/accounts/details/customer-right/lead-attribution'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const ComplianceTab = dynamic(() => import('@views/apps/accounts/details/customer-right/compliance'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const IntegrationsTab = dynamic(() => import('@views/apps/accounts/details/customer-right/integrations'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})
const AssociatedInfoTab = dynamic(() => import('@views/apps/accounts/details/customer-right/associated-info'), {
  ssr: false,
  loading: () => <Shimmer variant='rectangular' width='100%' height={400} />
})

// Vars
const tabContentList = (tableData, customerData) => ({
  overview: <OverViewTab customerData={customerData} />,
  finance: <FinanceTab customerData={customerData} />,
  teamAssignment: <TeamAssignmentTab customerData={customerData} />,
  leadAttribution: <LeadAttributionTab customerData={customerData} />,
  compliance: <ComplianceTab customerData={customerData} />,
  integrations: <IntegrationsTab customerData={customerData} />,
  addressBilling: <AddressBillingTab />,
  // security: <SecurityTab />,
  Notification: <NotificationTab />,
  associatedInfo: <AssociatedInfoTab tableData={tableData} />
})

const CustomerDetails = ({ customerData, customerId }) => {
  const [tableData, setTableData] = useState(null)
  const { lang: locale } = useParams()

  useEffect(() => {
    let mounted = true

    const loadTableData = async () => {
      try {
        const data = await getEcommerceData()

        if (mounted) {
          setTableData(data || null)
        }
      } catch (error) {
        console.error('Failed to load account details table data:', error)
        if (mounted) {
          setTableData(null)
        }
      }
    }

    loadTableData()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <IconButton component={Link} href={getLocalizedUrl('/apps/accounts', locale)} color='primary' className='bg-primary/10'>
            <i className='ri-arrow-left-line' />
          </IconButton>
          <Typography variant='h5' className='font-semibold'>
            Account #{customerId || 'ID'}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <CustomerRight tabContentList={tabContentList(tableData, customerData)} />
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
