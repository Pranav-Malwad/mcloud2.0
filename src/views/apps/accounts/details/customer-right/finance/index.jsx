import React, { useState } from 'react'
import { Card, Grid, Typography, Button, TextField, MenuItem, FormControlLabel, Switch } from '@mui/material'

const FinanceTab = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    billing_email: '',
    payment_terms: '',
    credit_limit: customerData?.creditLimit || '',
    nda: customerData?.nda || false,
    nda_filepath: '',
    acc_hold_finance_reason: '',
    quickbooks_acc_name: '',
    authorize_net: '',
  })

  const paymentTermsOptions = ['NET 7', 'NET 10', 'NET 15', 'NET 30', 'NET 45', 'NET 60', 'NET 90']

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Finance Settings</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Billing Email' name='billing_email' type='email' value={formData.billing_email} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField select fullWidth size='small' label='Payment Terms' name='payment_terms' value={formData.payment_terms} onChange={handleChange} disabled={!isEditing}>{paymentTermsOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Credit Limit ($)' name='credit_limit' type='number' value={formData.credit_limit} onChange={handleChange} disabled={!isEditing} /></Grid>
        
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='NDA File Path' name='nda_filepath' value={formData.nda_filepath} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='QuickBooks Account Name' name='quickbooks_acc_name' value={formData.quickbooks_acc_name} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Authorize.net ID' name='authorize_net' value={formData.authorize_net} onChange={handleChange} disabled={!isEditing} /></Grid>
        
        <Grid item xs={12} md={12}><TextField fullWidth multiline rows={2} size='small' label='Account Hold Reason' name='acc_hold_finance_reason' value={formData.acc_hold_finance_reason} onChange={handleChange} disabled={!isEditing} /></Grid>
      </Grid>
    </Card>
  )
}

export default FinanceTab
