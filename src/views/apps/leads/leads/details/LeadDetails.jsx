'use client'
import React, { useState } from 'react'
import {
  Card,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText
} from '@mui/material'
// MUI Imports

import { useEdit } from '@/contexts/EditContext'
// Third-party Imports

const LeadDetails = () => {
  // Props
  const { isEditing } = useEdit() // Access global state
  const [formData, setFormData] = useState({
    accountExecutive: '',
    sdr: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    industry: '',
    leadSource: '',
    Reg_From: '',
    lead_status: '',
    process: '',
    customer_status: '',
    sic_code: '',
    job_title: '',
    date_next_follow_up: '',
    service_interest: '',
    linkedin: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Typography variant='h5' gutterBottom align='left' color='primary'>
        Lead Details
      </Typography>

      <Grid container spacing={3} className='mt-3'>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='account-executive-label'>Lead Owner</InputLabel>
            <Select
              fullWidth
              id='lead-owner'
              value={formData.accountExecutive}
              onChange={e => setFormData({ ...formData, accountExecutive: e.target.value })}
              label='Lead Owner'
              disabled={!isEditing}
              labelId='lead-owner-label'
            >
              <MenuItem value='Justin Howard'>Justin Howard</MenuItem>
              <MenuItem value='Rob Schmidt'>Rob Schmidt</MenuItem>
              <MenuItem value='Ryan Costello'>Ryan Costello</MenuItem>
              <MenuItem value='Lorena Acosta'>Lorena Acosta</MenuItem>
              <MenuItem value='Garry Adams'>Garry Adams</MenuItem>
              <MenuItem value='Christian Lemelin'>Christian Lemelin</MenuItem>
              <MenuItem value='Stewart Aldrich'>Stewart Aldrich</MenuItem>
              <MenuItem value='Dymond Mccoy'>Dymond Mccoy</MenuItem>
              <MenuItem value='Leanna Persaud'>Leanna Persaud</MenuItem>
              <MenuItem value='Pratik AE'>Pratik AE</MenuItem>
              <MenuItem value='Sojwal AE'>Sojwal AE</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='sdr-label'>SDR</InputLabel>
            <Select
              fullWidth
              id='sdr'
              value={formData.sdr}
              onChange={e => setFormData({ ...formData, sdr: e.target.value })}
              label='SDR'
              labelId='sdr-label'
              disabled={!isEditing}
            >
              <MenuItem value='Ummadi Sravani'>Ummadi Sravani</MenuItem>
              <MenuItem value='Harshita KM'>Harshita KM</MenuItem>
              <MenuItem value='Saloni Verma'>Saloni Verma</MenuItem>
              <MenuItem value='Shalmoli Chavan'>Shalmoli Chavan</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label='First Name'
            fullWidth
            disabled={!isEditing}
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label='Last Name'
            fullWidth
            disabled={!isEditing}
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Email'
            fullWidth
            disabled={!isEditing}
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />{' '}
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Phone'
            fullWidth
            disabled={!isEditing}
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Website'
            fullWidth
            disabled={!isEditing}
            value={formData.website}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Company'
            fullWidth
            disabled={!isEditing}
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='industry-label'>Industry</InputLabel>
            <Select
              fullWidth
              id='industry'
              disabled={!isEditing}
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              label='Industry'
              labelId='industry-label'
            >
              <MenuItem value='Aerospace and Defense'>Aerospace and Defense</MenuItem>
              <MenuItem value='Automotive'>Automotive</MenuItem>
              <MenuItem value='Consumer Products'>Consumer Products</MenuItem>
              <MenuItem value='Energy'>Energy</MenuItem>
              <MenuItem value='Medical'>Medical</MenuItem>
              <MenuItem value='Oil and Gas'>Oil and Gas</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Mobile'
            fullWidth
            disabled={!isEditing}
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='leadSource-label'>Lead Source</InputLabel>
            <Select
              fullWidth
              id='leadSource'
              disabled={!isEditing}
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              label='Lead Source'
              labelId='leadSource-label'
            >
              <MenuItem value='Facebook'>Facebook</MenuItem>
              <MenuItem value='Twitter'>Twitter</MenuItem>
              <MenuItem value='Instagram'>Instagram</MenuItem>
              <MenuItem value='Email'>Email</MenuItem>
              <MenuItem value='Linkedin'>Linkedin</MenuItem>
              <MenuItem value='Referral'>Referral</MenuItem>
              <MenuItem value='Trade Show'>Trade Show</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
              <MenuItem value='Research'>Research</MenuItem>
              <MenuItem value='Google/Search Engines'>Google/Search Engines</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Reg.From'
            fullWidth
            disabled={!isEditing}
            value={formData.Reg_From}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='lead_status-label'>Lead Status</InputLabel>
            <Select
              fullWidth
              disabled={!isEditing}
              id='lead_status'
              value={formData.lead_status}
              onChange={e => setFormData({ ...formData, lead_status: e.target.value })}
              label='Lead Status'
              labelId='lead_status-label'
            >
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='Assigned'>Assigned</MenuItem>
              <MenuItem value='Adopted'>Adopted</MenuItem>
              <MenuItem value='Contacted'>Contacted</MenuItem>
              <MenuItem value='Contacted - Phone Unreachable'>Contacted - Phone Unreachable</MenuItem>
              <MenuItem value='Contacted - Email Unreachable'>Contacted - Email Unreachable</MenuItem>
              <MenuItem value='Qualified'>Qualified</MenuItem>
              <MenuItem value='Information Sent'>Information Sent</MenuItem>
              <MenuItem value='Follow-up'>Follow-up</MenuItem>
              <MenuItem value='Demo Scheduled'>Demo Scheduled</MenuItem>
              <MenuItem value='Unqualified'>Unqualified</MenuItem>
              <MenuItem value='Inactive'>Inactive</MenuItem>
              <MenuItem value='Reassigned'>Reassigned</MenuItem>
              <MenuItem value='Closed - Won'>Closed - Won</MenuItem>
              <MenuItem value='Closed - Lost'>Closed - Lost</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='process-label'>Process</InputLabel>
            <Select
              fullWidth
              disabled={!isEditing}
              id='process'
              value={formData.process}
              onChange={e => setFormData({ ...formData, process: e.target.value })}
              label='Process'
              labelId='process-label'
            >
              <MenuItem value='CNC Machining'>CNC Machining</MenuItem>
              <MenuItem value='Injection Molding'>Injection Molding</MenuItem>
              <MenuItem value='Cast Urethane'>Cast Urethane</MenuItem>
              <MenuItem value='3D Printing'>3D Printing</MenuItem>
              <MenuItem value='Sheet Metal'>Sheet Metal</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='customer_status-label'>Customer Status</InputLabel>
            <Select
              fullWidth
              disabled={!isEditing}
              id='process'
              value={formData.customer_status}
              onChange={e => setFormData({ ...formData, customer_status: e.target.value })}
              label='Customer Status'
              labelId='customer_status-label'
            >
              <MenuItem value='Not Registered'>Not Registered</MenuItem>
              <MenuItem value='Registered'>Registered</MenuItem>
              <MenuItem value='Quoted'>Quoted</MenuItem>
              <MenuItem value='Purchased'>Purchased</MenuItem>
              <MenuItem value='Registration Link Sent'>Registration Link Sent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='SIC Code'
            fullWidth
            disabled={!isEditing}
            value={formData.sic_code}
            onChange={e => setFormData({ ...formData, sic_code: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Job Title'
            fullWidth
            disabled={!isEditing}
            value={formData.job_title}
            onChange={e => setFormData({ ...formData, job_title: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type='date'
            fullWidth
            disabled={!isEditing}
            value={formData.date_next_follow_up}
            onChange={e => setFormData({ ...formData, date_next_follow_up: e.target.value })}
          />
          <FormHelperText>{formData.date_next_follow_up ? '' : 'Date of Next follow up!'}</FormHelperText>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Service Intereset'
            fullWidth
            disabled={!isEditing}
            value={formData.service_interest}
            onChange={e => setFormData({ ...formData, service_interest: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Linkedin'
            fullWidth
            disabled={!isEditing}
            value={formData.linkedin}
            onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className='col-span-2 bg-gray-200 p-2'> Addtional Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className='col-span-2'
            label='Address 1'
            fullWidth
            disabled={!isEditing}
            value={formData.address1}
            onChange={e => setFormData({ ...formData, address1: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Address 2'
            fullWidth
            disabled={!isEditing}
            value={formData.address2}
            onChange={e => setFormData({ ...formData, address2: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Address 3'
            fullWidth
            disabled={!isEditing}
            value={formData.address3}
            onChange={e => setFormData({ ...formData, address3: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='City'
            fullWidth
            disabled={!isEditing}
            value={formData.city}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='State'
            fullWidth
            disabled={!isEditing}
            value={formData.state}
            onChange={e => setFormData({ ...formData, state: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Zip'
            fullWidth
            disabled={!isEditing}
            value={formData.zip}
            onChange={e => setFormData({ ...formData, zip: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Country'
            fullWidth
            disabled={!isEditing}
            value={formData.country}
            onChange={e => setFormData({ ...formData, country: e.target.value })}
          />
        </Grid>
      </Grid>
    </Card>
  )
}
export default LeadDetails
