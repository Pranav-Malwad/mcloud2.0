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

// Dynamic Imports for Tabs with Lazy Loading
const OverViewTab = dynamic(() => import('@views/apps/contacts/details/customer-right/overview'), {
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
const tabContentList = (tableData, customerData) => ({
  overview: <OverViewTab customerData={customerData} />,
  addressBilling: <AddressBillingTab />,
  preferences: <PreferencesTab />,
  Notification: <NotificationTab />,
  quotes: (
    <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={400} />}>
      <OrderListTable orderData={tableData?.orderData} />
    </Suspense>
  )
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
        console.error('Failed to load contact details table data:', error)
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
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between items-center mb-2'>
        <div className='flex items-center gap-3'>
          <IconButton component={Link} href={getLocalizedUrl('/apps/contacts', locale)} color='primary' className='bg-primary/10'>
            <i className='ri-arrow-left-line' />
          </IconButton>
          <Typography variant='h5' className='font-semibold'>
            Contact #{customerId || 'ID'}
          </Typography>
        </div>
        <OpenDialogOnElementClick
          element={Button}
          elementProps={{ 
            children: 'Delete Contact', 
            color: 'error', 
            variant: 'contained', 
            size: 'small',
            startIcon: <i className='ri-delete-bin-7-line' />
          }}
          dialog={ConfirmationDialog}
          dialogProps={{ type: 'delete-customer' }}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomerRight tabContentList={tabContentList(tableData, customerData)} />
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
