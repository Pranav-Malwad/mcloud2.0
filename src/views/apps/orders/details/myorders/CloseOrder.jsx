import React from 'react'
import { Box, Grid, TextField, Card, FormControlLabel, Checkbox, Typography } from '@mui/material'

const CloseOrder = () => {
  // Sample values for the fields
  const npsValue = '75' // Example NPS value
  const paasportNotifications = true // Example checkbox value
  const customerFeedback = 'Great service, very satisfied!' // Example customer feedback

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Typography variant='h5' gutterBottom align='left' color='primary'>
        Close Order Information
      </Typography>
      <Grid container spacing={2}>
        {/* Paasport Notifications Checkbox */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={paasportNotifications} disabled />}
            label='Paasport Notifications'
          />
        </Grid>

        {/* NPS Field */}
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='NPS' value={npsValue} InputProps={{ readOnly: true }} margin='normal' />
        </Grid>

        {/* Customer Feedback Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Customer Feedback'
            value={customerFeedback}
            InputProps={{ readOnly: true }}
            margin='normal'
            multiline
            rows={4} // You can adjust the number of rows for display
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default CloseOrder
