import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'

const InvoiceDetails = () => {
  const invoiceTotal = '$1,239,489.00' // Non-editable invoice total
  const supplierTotal = '$1,000,000.00' // Non-editable supplier total (example value)

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Typography variant='h5' gutterBottom align='left' color='primary'>
        Invoice Details
      </Typography>
      <Grid container spacing={2}>
        {/* Invoice Total */}
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom>
            Invoice Total:
          </Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {invoiceTotal}
          </Typography>
        </Grid>

        {/* Supplier Total */}
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom>
            Supplier Total:
          </Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {supplierTotal}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default InvoiceDetails
