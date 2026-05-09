import React, { useState } from 'react'
import { Button, TextField, MenuItem, Grid, Typography, Card } from '@mui/material'

const CustomerAdditionalInformation = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    company_name: customerData?.account || '',
    website: '',
    phone: customerData?.phone || '',
    email: customerData?.email || '',
    account_status: customerData?.status || 'Active',
    description: '',
  })

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const accountStatusOptions = ['Active', 'Inactive', 'Suspended']

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Account Information</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Company Name' name='company_name' value={formData.company_name} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Website' name='website' type='url' value={formData.website} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Phone' name='phone' value={formData.phone} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='General Email' name='email' type='email' value={formData.email} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField select fullWidth size='small' label='Account Status' name='account_status' value={formData.account_status} onChange={handleChange} disabled={!isEditing}>
            {accountStatusOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} md={12}><TextField fullWidth multiline rows={2} size='small' label='Description / Notes' name='description' value={formData.description} onChange={handleChange} disabled={!isEditing} /></Grid>
      </Grid>
    </Card>
  )
}

export default CustomerAdditionalInformation
