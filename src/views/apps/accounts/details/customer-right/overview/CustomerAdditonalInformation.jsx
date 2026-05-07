import React, { useState } from 'react'
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Card, Divider, InputAdornment } from '@mui/material'

const CustomerAdditionalInformation = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    industry: 'Consumer Products',
    accountExecutive: 'Pratik AE',
    projectManager: 'Pratik PM',
    sdr: '',
    leadSource: '',
    process: '',
    leadSourceDetails: '',
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

  const industryOptions = ['Aerospace and Defense', 'Automotive', 'Consumer Products', 'Energy', 'Medical', 'Oil and Gas', 'Other']
  const itarOptions = ['Yes', 'No']
  const leadSourceOptions = ['Facebook', 'Twitter', 'Instagram', 'Email', 'Linkedin', 'Referral', 'Trade Show', 'Other', 'Research', 'Google/Search Engines']
  const accountExecutiveOptions = ['Justin Howard', 'Rob Schmidt', 'Ryan Costello', 'Lorena Acosta', 'Garry Adams', 'Christian Lemelin', 'Stewart Aldrich', 'Dymond Mccoy', 'Leanna Persaud', 'Pratik AE', 'Sojwal AE']
  const NET_TERMS_OPTIONS = ['NET 7', 'NET 10', 'NET 15', 'NET 30', 'NET 45', 'NET 60', 'NET 75', 'NET 90', 'Other specify in (notes)']
  const sdrOptions = ['Ummadi Sravani', 'Harshita KM', 'Saloni Verma', 'Shalmoli Chavan']
  const projectManagerOptions = ['Jim ONeal', 'Julie Thomas', 'Matt Wendel', 'Lindsey Tundidor', 'Pratik PM']
  const processOptions = ['CNC Machining', 'Injection Molding', 'Cast Urethane', '3D Printing', 'Sheet Metal', 'Other']

  return (
    <Card className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Account Information</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Industry' name='industry' value={formData.industry} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {industryOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Process' name='process' value={formData.process} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {processOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Lead Source' name='leadSource' value={formData.leadSource} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {leadSourceOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label='Lead Source Details' name='leadSourceDetails' value={formData.leadSourceDetails} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='ITAR' name='itar' value={formData.itar} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {itarOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Manufacturing' name='manufacturing' value={formData.manufacturing} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            <MenuItem value='Manufacturing 1'>Domestic</MenuItem>
            <MenuItem value='Manufacturing 2'>International</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Account Executive' name='accountExecutive' value={formData.accountExecutive} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {accountExecutiveOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Project Manager' name='projectManager' value={formData.projectManager} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {projectManagerOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='SDR' name='sdr' value={formData.sdr} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {sdrOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField 
            label='Phone' name='phone' value={formData.phone} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className='ri-phone-line' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField select fullWidth size='small' label='Payment Terms' name='paymentTerms' value={formData.paymentTerms} onChange={handleChange} disabled={!isEditing} InputLabelProps={{ shrink: true }}>
            {NET_TERMS_OPTIONS.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label='FedEx Account' name='fedexAccount' value={formData.fedexAccount} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label='UPS Account' name='upsAccount' value={formData.upsAccount} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label='DHL Account' name='dhlAccount' value={formData.dhlAccount} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField 
            label='Notes' name='notes' value={formData.notes} onChange={handleChange} disabled={!isEditing} fullWidth size='small' InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className='ri-sticky-note-line' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default CustomerAdditionalInformation
