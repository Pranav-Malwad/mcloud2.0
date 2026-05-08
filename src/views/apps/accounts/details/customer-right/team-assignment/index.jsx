import React, { useState } from 'react'
import { Card, Grid, Typography, Button, TextField, MenuItem } from '@mui/material'

const TeamAssignmentTab = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    printform_bdm: '',
    printform_sdr: '',
    printform_pm: customerData?.projectManager || '',
    printform_rep: customerData?.accountExecutive || '',
  })

  const userOptions = ['Pratik PM', 'Pratik AE', 'Justin Howard', 'Rob Schmidt']

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Team Assignment</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}><TextField select fullWidth size='small' label='BDM (Assigned)' name='printform_bdm' value={formData.printform_bdm} onChange={handleChange} disabled={!isEditing}>{userOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={3}><TextField select fullWidth size='small' label='SDR (Assigned)' name='printform_sdr' value={formData.printform_sdr} onChange={handleChange} disabled={!isEditing}>{userOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={3}><TextField select fullWidth size='small' label='PM (Assigned)' name='printform_pm' value={formData.printform_pm} onChange={handleChange} disabled={!isEditing}>{userOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
        <Grid item xs={12} sm={6} md={3}><TextField select fullWidth size='small' label='Rep (Assigned)' name='printform_rep' value={formData.printform_rep} onChange={handleChange} disabled={!isEditing}>{userOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField></Grid>
      </Grid>
    </Card>
  )
}

export default TeamAssignmentTab
