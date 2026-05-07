'use client'
import React, { useState } from 'react'
import { Button, Checkbox, TextField, MenuItem, Grid, Typography, Card, FormControlLabel } from '@mui/material'

const Preferences = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nda: false,
    unsubscribe: false,
    receiveInfo: false,
    hearAboutUs: '',
  })

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const hearAboutUsOptions = [
    'Facebook', 'Twitter', 'Instagram', 'Email', 'LinkedIn', 'Referral', 'Trade Show', 'Other', 'Research', 'Google/Search Engines'
  ]

  return (
    <Card className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Legal and Preferences</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Preferences'}
        </Button>
      </div>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.nda} name='nda' onChange={handleChange} disabled={!isEditing} />}
            label="Non-Disclosure Agreement"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.unsubscribe} name='unsubscribe' onChange={handleChange} disabled={!isEditing} />}
            label="Unsubscribe or Do Not Email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.receiveInfo} name='receiveInfo' onChange={handleChange} disabled={!isEditing} />}
            label="I would like to receive information from PrintForm including discounts and special offers."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            select fullWidth size='small' 
            label='How did you hear about us?' 
            name='hearAboutUs' 
            value={formData.hearAboutUs} 
            onChange={handleChange} 
            disabled={!isEditing} 
            InputLabelProps={{ shrink: true }}
          >
            {hearAboutUsOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Preferences
