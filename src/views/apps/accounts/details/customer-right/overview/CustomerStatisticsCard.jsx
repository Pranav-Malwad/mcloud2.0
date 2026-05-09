// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Component Imports
import CustomerStats from '@components/card-statistics/CustomerStats'

const CustomerStatisticsCard = ({ customerStatData, customerData }) => {
  const [nda, setNda] = useState(customerData?.nda || false)
  const [itar, setItar] = useState(customerData?.itar || false)

  const combinedStats = [
    {
      title: 'Orders',
      stats: customerData?.order || 0,
      avatarIcon: 'ri-shopping-cart-2-line',
      avatarColor: 'primary',
      description: 'Total orders placed'
    },
    {
      title: 'Spent',
      stats: `$${customerData?.totalSpent || 0}`,
      avatarIcon: 'ri-money-dollar-circle-line',
      avatarColor: 'primary',
      description: 'Total amount spent'
    },
    ...(customerStatData || [])
  ]

  return (
    <Grid container spacing={4} className='h-full'>
      {combinedStats.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <div className='h-full'>
            <CustomerStats {...item} className='h-full' />
          </div>
        </Grid>
      ))}
      <Grid item xs={12} sm={4}>
        <Card className='h-full'>
          <CardContent className='flex flex-col justify-center h-full gap-2'>
            <FormControlLabel 
              control={<Switch checked={nda} onChange={(e) => setNda(e.target.checked)} size='small' />} 
              label={<Typography variant='body2' className='font-medium'>NDA Signed</Typography>} 
            />
            <FormControlLabel 
              control={<Switch checked={itar} onChange={(e) => setItar(e.target.checked)} size='small' />} 
              label={<Typography variant='body2' className='font-medium'>ITAR Regulated</Typography>} 
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CustomerStatisticsCard
