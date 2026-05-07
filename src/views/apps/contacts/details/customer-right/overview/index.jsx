// MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'

// Data Imports
import { getStatisticsData, getEcommerceData } from '@/app/server/actions'
import CustomerAdditonalInformation from './CustomerAdditonalInformation'
import CustomerProfileHeader from './CustomerProfileHeader'

const Overview = ({ customerData }) => {
  useEffect(() => {
    const loadOverviewData = async () => {
      try {
        await getStatisticsData()
        await getEcommerceData()
      } catch (error) {
        console.error('Failed to load contact overview data:', error)
      }
    }

    loadOverviewData()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomerProfileHeader customerData={customerData} />
      </Grid>
      <Grid item xs={12}>
        <CustomerAdditonalInformation></CustomerAdditonalInformation>
      </Grid>
    </Grid>
  )
}

export default Overview
