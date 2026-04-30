// MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'

// Component Imports
import CurrentPlan from './CurrentPlan'
import Address from './Address'
import PaymentMethod from './PaymentMethod'
import InvoiceListTable from './InvoiceListTable'

// Data Imports
import { getPricingData, getInvoiceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/pricing` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getPricingData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} */
/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
} */
const BillingPlans = () => {
  const [pricingData, setPricingData] = useState(null)
  const [invoiceData, setInvoiceData] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      try {
        const [pricing, invoices] = await Promise.all([getPricingData(), getInvoiceData()])

        if (mounted) {
          setPricingData(pricing || null)
          setInvoiceData(invoices || null)
        }
      } catch (error) {
        console.error('Failed to load billing plans data:', error)
        if (mounted) {
          setPricingData(null)
          setInvoiceData(null)
        }
      }
    }

    loadData()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CurrentPlan data={pricingData} />
      </Grid>
      <Grid item xs={12}>
        <PaymentMethod />
      </Grid>
      <Grid item xs={12}>
        <Address />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default BillingPlans
