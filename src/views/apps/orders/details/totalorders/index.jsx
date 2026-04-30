// MUI Imports

import Grid from '@mui/material/Grid'

// Component Imports
import OrderDetailHeader from './OrderDetailHeader'
import OrderDetailsCard from './OrderDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import { EditProvider } from '@/contexts/EditContext'
import ShippingAddress from './ShippingAddressCard'
import BillingAddress from './BillingAddressCard'
import QuoteDetailsCard from './QuoteDetailsCard'
import QuoteInformationCard from './QuoteInformationCard'
import ShipmentComponent from './ShipmentTable'
import OrderFormComponent from './OrderFormComponent'
import TabsPanel from '../../../../components/tabs-panel/index'
import SupplierDetails from './SupplierDetails'
import ShippingInformation from './ShippingInformation'
import DescriptionInformation from './DescriptionInformation'
import InvoiceDetails from './InvoiceNotification'
import Accounting from './Accounting'
import CloseOrder from './CloseOrder'
import CustomBreadcrumb from '../../../../components/bread-crumbs/index'
const OrderDetails = ({ orderData, order }) => {
  const quotesTabs = [
    {
      label: 'Shipments',
      content: (
        <div>
          <ShipmentComponent></ShipmentComponent>
        </div>
      )
    },
    {
      label: 'Order Details',
      content: (
        <div>
          <OrderFormComponent />
        </div>
      )
    },
    {
      label: 'Address Information',
      content: (
        <>
          <Grid item xs={12} className='mb-4'>
            <ShippingAddress />
          </Grid>
          <Grid item xs={12}>
            <BillingAddress />
          </Grid>
        </>
      )
    },
    {
      label: 'Supplier Details',
      content: <SupplierDetails></SupplierDetails>
    },
    {
      label: 'Shipping Information',
      content: (
        <div>
          <ShippingInformation></ShippingInformation>
        </div>
      )
    },
    {
      label: 'Description Information',
      content: (
        <div>
          <DescriptionInformation></DescriptionInformation>
        </div>
      )
    },
    {
      label: 'Invoice Notification ',
      content: (
        <div>
          <InvoiceDetails />
        </div>
      )
    },
    {
      label: 'Close Order',
      content: (
        <div>
          <CloseOrder></CloseOrder>
        </div>
      )
    },
    {
      label: 'Accounting',
      content: (
        <div>
          <Accounting></Accounting>
        </div>
      )
    }
  ]

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Orders', path: '/apps/orders' },
    { label: `Order #${order || 'ID'}`, path: `/orders/${order || 'ID'}` }
  ]
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomBreadcrumb breadcrumbs={breadcrumbs} />
      </Grid>
      <Grid item xs={12}>
        <OrderDetailHeader orderData={orderData} order={order} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <QuoteDetailsCard />
          </Grid>
          <Grid item xs={12}>
            <OrderDetailsCard></OrderDetailsCard>
          </Grid>
          
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <QuoteInformationCard></QuoteInformationCard>
          </Grid>
          
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TabsPanel tabs={quotesTabs} />
      </Grid>
    </Grid>
  )
}

export default OrderDetails
