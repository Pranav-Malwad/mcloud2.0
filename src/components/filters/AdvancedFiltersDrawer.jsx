'use client'

import { useState, useEffect } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const AdvancedFiltersDrawer = ({ open, handleClose, activeFilters, onApply, onClear }) => {
  // Local state for the drawer before applying
  const [localFilters, setLocalFilters] = useState(activeFilters || {})

  useEffect(() => {
    // Sync local state when the drawer opens or active filters change externally
    if (open) {
      setLocalFilters(activeFilters || {})
    }
  }, [open, activeFilters])

  const handleApply = () => {
    onApply(localFilters)
    handleClose()
  }

  const handleReset = () => {
    setLocalFilters({})
    onClear()
    // Do not close immediately on clear so user can see it cleared or we can close it based on preference. Let's keep it open.
  }

  const handleChange = (field, value) => {
    setLocalFilters(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 320, sm: 500 } } }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 4, px: 5 }}>
        <Typography variant='h5'>Advanced Filters</Typography>
        <IconButton size='small' onClick={handleClose}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </Box>
      <Divider />
      
      <Box sx={{ p: 5, flexGrow: 1, overflowY: 'auto' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='First Name'
              fullWidth
              value={localFilters.firstName || ''}
              onChange={e => handleChange('firstName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='Last Name'
              fullWidth
              value={localFilters.lastName || ''}
              onChange={e => handleChange('lastName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='Email'
              fullWidth
              value={localFilters.email || ''}
              onChange={e => handleChange('email', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='Account Name'
              fullWidth
              value={localFilters.accountName || ''}
              onChange={e => handleChange('accountName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='State'
              fullWidth
              value={localFilters.state || ''}
              onChange={e => handleChange('state', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel id='industry-label'>Industry</InputLabel>
              <Select
                multiple
                id='industry'
                labelId='industry-label'
                label='Industry'
                value={localFilters.industry || []}
                onChange={e => handleChange('industry', typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                renderValue={(selected) => selected.join(', ')}
                IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
              >
                <MenuItem value='Technology'>Technology</MenuItem>
                <MenuItem value='Energy'>Energy</MenuItem>
                <MenuItem value='Consumer Products'>Consumer Products</MenuItem>
                <MenuItem value='Automotive'>Automotive</MenuItem>
                <MenuItem value='Medical'>Medical</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel id='lead-source-label'>Lead Source</InputLabel>
              <Select
                id='lead-source'
                labelId='lead-source-label'
                label='Lead Source'
                value={localFilters.leadSource || ''}
                onChange={e => handleChange('leadSource', e.target.value)}
                IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
              >
                <MenuItem value=''><em>Any source</em></MenuItem>
                <MenuItem value='Organic'>Organic</MenuItem>
                <MenuItem value='Referral'>Referral</MenuItem>
                <MenuItem value='Social Media'>Social Media</MenuItem>
                <MenuItem value='Direct'>Direct</MenuItem>
                <MenuItem value='Partner'>Partner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel id='account-exec-label'>Account Executive</InputLabel>
              <Select
                id='account-exec'
                labelId='account-exec-label'
                label='Account Executive'
                value={localFilters.accountExecutive || ''}
                onChange={e => handleChange('accountExecutive', e.target.value)}
                IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
              >
                <MenuItem value=''><em>Anyone</em></MenuItem>
                <MenuItem value='Justin Howard'>Justin Howard</MenuItem>
                <MenuItem value='Sojwal Ae'>Sojwal Ae</MenuItem>
                <MenuItem value='David Gutlay'>David Gutlay</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel id='project-manager-label'>Project Manager</InputLabel>
              <Select
                id='project-manager'
                labelId='project-manager-label'
                label='Project Manager'
                value={localFilters.projectManager || ''}
                onChange={e => handleChange('projectManager', e.target.value)}
                IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
              >
                <MenuItem value=''><em>Anyone</em></MenuItem>
                <MenuItem value='Bob Smith'>Bob Smith</MenuItem>
                <MenuItem value='Alice Johnson'>Alice Johnson</MenuItem>
                <MenuItem value='Charlie Brown'>Charlie Brown</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='Start Date'
              placeholder='mm/dd/yyyy'
              fullWidth
              value={localFilters.startDate || ''}
              onChange={e => handleChange('startDate', e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <i className='ri-calendar-line text-textDisabled' />
                  </InputAdornment>
                )
              }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label='End Date'
              placeholder='mm/dd/yyyy'
              fullWidth
              value={localFilters.endDate || ''}
              onChange={e => handleChange('endDate', e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <i className='ri-calendar-line text-textDisabled' />
                  </InputAdornment>
                )
              }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant='outlined' color='secondary' onClick={handleReset}>
                Clear all
              </Button>
              <Button variant='contained' color='primary' onClick={handleApply}>
                Apply Filters
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  )
}

export default AdvancedFiltersDrawer
