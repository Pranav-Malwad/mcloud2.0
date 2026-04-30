'use client'
import React, { useState } from 'react'
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Card } from '@mui/material'

const CustomerAdditionalInformation = () => {
  const [isEditing, setIsEditing] = useState(false) // State to toggle edit/save mode
  const [formData, setFormData] = useState({
    industry: 'Consumer Products',
    accountExecutive: 'Pratik AE',
    projectManager: 'Pratik PM',
    sdr: '',
    leadSource: '',
    process: '',
    leadSourceDetail: '',
    phone: '(989) 898-8899',
    fedexAccount: '',
    upsAccount: '',
    dhlAccount: '',
    paymentTerms: '',
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

  const industryOptions = [
    'Aerospace and Defense',
    'Automotive',
    'Consumer Products',
    'Energy',
    'Medical',
    'Oil and Gas',
    'Other'
  ]

  const itarOptions = ['Yes', 'No']
  const leadSourceOptions = [
    'Facebook',
    'Twitter',
    'Instagram',
    'Email',
    'Linkedin',
    'Referral',
    'Trade Show',
    'Other',
    'Research',
    'Google/Search Engines'
  ]

  const accountExecutiveOptions = [
    'Justin Howard',
    'Rob Schmidt',
    'Ryan Costello',
    'Lorena Acosta',
    'Garry Adams',
    'Christian Lemelin',
    'Stewart Aldrich',
    'Dymond Mccoy',
    'Leanna Persaud',
    'Pratik AE',
    'Sojwal AE'
  ]

  const NET_TERMS_OPTIONS = [
    'NET 7',
    'NET 10',
    'NET 15',
    'NET 30',
    'NET 45',
    'NET 60',
    'NET 75',
    'NET 90',
    'Other specify in (notes)'
  ]

  const sdrOptions = ['Ummadi Sravani', 'Harshita KM', 'Saloni Verma', 'Shalmoli Chavan']
  const projectManagerOptions = ['Jim ONeal', 'Julie Thomas', 'Matt Wendel', 'Lindsey Tundidor', 'Pratik PM']
  const processOptions = ['CNC Machining', 'Injection Molding', 'Cast Urethane', '3D Printing', 'Sheet Metal', 'Other']

  return (
    <Card className='p-4'>
      <Typography variant='h6' gutterBottom className='mb-4'>
        Account Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Industry</InputLabel>
            <Select
              name='industry'
              value={formData.industry}
              label='Industry'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {industryOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* new fields added  */}
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Account Executive</InputLabel>
            <Select
              label='Account Executive'
              name='accountExecutive'
              value={formData.accountExecutive}
              onChange={handleChange}
              disabled={!isEditing}
            >
              {accountExecutiveOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Project Manager</InputLabel>
            <Select
              name='projectManager'
              value={formData.projectManager}
              label='Project Manager'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {projectManagerOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>SDR</InputLabel>
            <Select name='sdr' value={formData.sdr} label='SDR' onChange={handleChange} disabled={!isEditing}>
              {sdrOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Lead Source</InputLabel>
            <Select
              name='leadSource'
              value={formData.leadSource}
              label='Lead Source'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {leadSourceOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>ITAR</InputLabel>
            <Select name='itar' value={formData.itar} label='ITAR' onChange={handleChange} disabled={!isEditing}>
              {itarOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Process</InputLabel>
            <Select
              name='process'
              value={formData.process}
              label='Process'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {processOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label='Lead Source Details'
            name='leadSourceDetails'
            value={formData.projectManager}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Manufacturing</InputLabel>
            <Select
              name='manufacturing'
              value={formData.manufacturing}
              label='Manufacturing'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {/* Add specific manufacturing options if available */}
              <MenuItem value='Manufacturing 1'>Domestic</MenuItem>
              <MenuItem value='Manufacturing 2'>International</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* new fields added  */}

        <Grid item xs={6}>
          <TextField
            label='Phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label='FedEx Account'
            name='fedexAccount'
            value={formData.fedexAccount}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='UPS Account'
            name='upsAccount'
            value={formData.upsAccount}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='DHL Account'
            name='dhlAccount'
            value={formData.dhlAccount}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Payment Terms</InputLabel>
            <Select
              name='paymentTerms'
              value={formData.paymentTerms}
              label='Payment Terms'
              onChange={handleChange}
              disabled={!isEditing}
            >
              {NET_TERMS_OPTIONS.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Notes'
            name='notes'
            value={formData.notes}
            onChange={handleChange}
            disabled={!isEditing}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className='mt-4'>
        <Button variant='contained' onClick={handleEditToggle}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </div>
    </Card>
  )
}

export default CustomerAdditionalInformation
