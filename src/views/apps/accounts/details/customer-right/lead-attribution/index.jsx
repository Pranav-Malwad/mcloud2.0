import React, { useState } from 'react'
import { Card, Grid, Typography, Button, TextField, MenuItem } from '@mui/material'

const LeadAttributionTab = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    hear_about_us: '',
    lead_source: customerData?.leadSource || '',
    campaign_id: '',
    source: '',
    medium: '',
  })

  const leadSourceOptions = ['Facebook', 'Twitter', 'LinkedIn', 'Referral', 'Trade Show', 'Other']
  const hearAboutUsOptions = ['Web Search', 'Social Media', 'Friend/Colleague', 'Advertisement']

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Lead Attribution</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}><TextField select fullWidth size='small' label='How Did You Hear About Us?' name='hear_about_us' value={formData.hear_about_us} onChange={handleChange} disabled={!isEditing}>{hearAboutUsOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField select fullWidth size='small' label='Lead Source' name='lead_source' value={formData.lead_source} onChange={handleChange} disabled={!isEditing}>{leadSourceOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={4}><TextField fullWidth size='small' label='Campaign ID' name='campaign_id' value={formData.campaign_id} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={6}><TextField fullWidth size='small' label='Source' name='source' value={formData.source} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6} md={6}><TextField fullWidth size='small' label='Medium' name='medium' value={formData.medium} onChange={handleChange} disabled={!isEditing} /></Grid>
      </Grid>
    </Card>
  )
}

export default LeadAttributionTab
