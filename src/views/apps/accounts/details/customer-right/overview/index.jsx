// MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'

// Component Imports

// Data Imports
import { getStatisticsData, getEcommerceData } from '@/app/server/actions'
import CustomerAdditonalInformation from './CustomerAdditonalInformation'
import CustomerStatisticsCard from './CustomerStatisticsCard'


/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/widget-examples` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getStatisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch statistics data')
  }

  return res.json()
} */
/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getEcommerceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */
import CustomerProfileHeader from './CustomerProfileHeader'

const Overview = ({ customerData }) => {
  const [statsData, setStatsData] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadOverviewData = async () => {
      try {
        const data = await getStatisticsData()
        await getEcommerceData()

        if (mounted) {
          setStatsData(data || null)
        }
      } catch (error) {
        console.error('Failed to load account overview data:', error)
        if (mounted) {
          setStatsData(null)
        }
      }
    }

    loadOverviewData()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomerProfileHeader customerData={customerData} />
      </Grid>
       <Grid item xs={12}>
        <CustomerStatisticsCard customerStatData={statsData?.customerStats} />
      </Grid>
      <Grid item xs={12}>
        <CustomerAdditonalInformation></CustomerAdditonalInformation>
      </Grid>
      
    </Grid>
  )
}

export default Overview
