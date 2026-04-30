'use client'
import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Card
} from '@mui/material'

const preferences = () => {
  const [isEditing, setIsEditing] = useState(false) // State to toggle edit/save mode
  const [formData, setFormData] = useState({
    industry: 'Consumer Products',
    accountExecutive: 'Pratik AE',
    projectManager: 'Pratik PM',
    sdr: '',
    hearAboutUs: '',
    sameAsBillingAddress: false,
    shippingAddress1: '',
    shippingAddress2: '',
    shippingAddress3: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    nda: false,
    unsubscribe: false,
    receiveInfo: false,
    account: false,
    leadSource: '',
    process: '',
    leadSourceDetail: '',
    email: '',
    phone: '(989) 898-8899',
    rating: '',
    reason: '',
    contactPassword: '',
    sameAsShippingAddress: false,
    billingAddress1: 'Changed On Order Page',
    billingAddress2: '',
    billingAddress3: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    contactStatus: 'Active',
    itar: '',
    manufacturing: '',
    notes: ''
  })

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <Card className='p-4'>
      {/* Legal and Preferences */}
      <Typography variant='h6' gutterBottom>
        Legal and Preferences
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Checkbox checked={formData.nda} name='nda' onChange={handleChange} disabled={!isEditing} /> Non-Disclosure
          Agreement
        </Grid>
        <Grid item xs={12}>
          <Checkbox checked={formData.unsubscribe} name='unsubscribe' onChange={handleChange} disabled={!isEditing} />{' '}
          Unsubscribe or Do Not Email
        </Grid>
        <Grid item xs={12}>
          <Checkbox checked={formData.receiveInfo} name='receiveInfo' onChange={handleChange} disabled={!isEditing} /> I
          Would like to receive information from PrintForm including discounts and special offers.
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>How did you hear about us?</InputLabel>
            <Select
              name='hearAboutUs'
              value={formData.hearAboutUs}
              label='How did you hear about us?'
              onChange={handleChange}
              disabled={!isEditing}
            >
              <MenuItem value='Facebook'>Facebook</MenuItem>
              <MenuItem value='Twitter'>Twitter</MenuItem>
              <MenuItem value='Instagram'>Instagram</MenuItem>
              <MenuItem value='Email'>Email</MenuItem>
              <MenuItem value='LinkedIn'>LinkedIn</MenuItem>
              <MenuItem value='Referral'>Referral</MenuItem>
              <MenuItem value='Trade Show'>Trade Show</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
              <MenuItem value='Research'>Research</MenuItem>
              <MenuItem value='Google/Search Engines'>Google/Search Engines</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Save/Edit Button */}
      <div className='mt-4'>
        <Button variant='contained' onClick={handleEditToggle}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </div>
    </Card>
  )
}

export default preferences
