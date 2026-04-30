'use client'
import React, { useState } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  Checkbox,
  FormControlLabel,
  CardHeader,
  Typography,
  Button,
  Grid
} from '@mui/material'

const DescriptionInformation = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    selectedVendor: 'My UPS',
    transactionDate: new Date().toLocaleDateString(),
    shippingCost: '$0.00',
    workOrderCost: '$196,350.00',
    isInvoiced: false,
    isPaid: false,
    shippingCharges: '$0.00'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [originalState, setOriginalState] = useState({ ...formData })

  const handleEdit = () => {
    setOriginalState({ ...formData })
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log(formData)
  }

  const handleCancel = () => {
    setFormData({ ...originalState })
    setIsEditing(false)
  }

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }))
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Description Information
          </Typography>
        </Grid>

        {/* Edit/Save/Cancel Buttons */}
        <Grid item>
          {isEditing ? (
            <>
              <Button variant='contained' color='primary' onClick={handleSave}>
                Save
              </Button>
              <Button variant='outlined' color='secondary' onClick={handleCancel} sx={{ ml: 2 }}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant='contained' color='primary' onClick={handleEdit}>
              Edit
            </Button>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* Shipping Vendor Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin='normal' variant='outlined'>
            <InputLabel>Shipping Vendor</InputLabel>
            <Select
              value={formData.selectedVendor}
              onChange={e => handleInputChange('selectedVendor', e.target.value)}
              label='Shipping Vendor'
              disabled={!isEditing}
            >
              <MenuItem value='My UPS'>My UPS</MenuItem>
              <MenuItem value='My FEDEX'>My FEDEX</MenuItem>
              <MenuItem value='prepay using printform'>Prepay using printform</MenuItem>
              {/* Add more options if needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Transaction Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            label='Transaction Date'
            value={formData.transactionDate}
            onChange={e => handleInputChange('transactionDate', e.target.value)}
            InputProps={{ readOnly: !isEditing }}
            margin='normal'
          />
        </Grid>

        {/* Shipping Cost */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Shipping Cost'
            value={formData.shippingCost}
            onChange={e => handleInputChange('shippingCost', e.target.value)}
            disabled={!isEditing}
            margin='normal'
          />
        </Grid>

        {/* Work Order Cost */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Work Order Cost'
            value={formData.workOrderCost}
            onChange={e => handleInputChange('workOrderCost', e.target.value)}
            InputProps={{ readOnly: !isEditing }}
            margin='normal'
          />
        </Grid>

        {/* Invoiced and Paid Checkboxes */}
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isInvoiced}
                onChange={e => handleInputChange('isInvoiced', e.target.checked)}
                disabled={!isEditing}
              />
            }
            label='Invoiced'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isPaid}
                onChange={e => handleInputChange('isPaid', e.target.checked)}
                disabled={!isEditing}
              />
            }
            label='Paid'
          />
        </Grid>

        {/* Shipping Charges */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Shipping Charges'
            disabled={!isEditing}
            value={formData.shippingCharges}
            onChange={e => handleInputChange('shippingCharges', e.target.value)}
            margin='normal'
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default DescriptionInformation
