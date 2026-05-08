'use client'

import { useState, useEffect } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

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
      sx={{ '& .MuiDrawer-paper': { width: { xs: 320, sm: 380 }, p: 0, overflow: 'hidden' } }}
    >
      <div className='flex flex-col h-full'>
        {/* Header */}
        <div className='flex items-start justify-between p-6 pb-2 relative'>
          <div>
            <Typography variant='h5' className='font-bold text-xl mb-2 text-textPrimary'>Advanced filters</Typography>
            <Typography variant='body2' className='text-textSecondary'>Refine results across all fields.</Typography>
          </div>
          <IconButton onClick={handleClose} size='small' className='border absolute right-4 top-4'>
            <i className='ri-close-line text-lg' />
          </IconButton>
        </div>

        {/* Content */}
        <div className='p-6 flex flex-col gap-6 flex-grow overflow-y-auto'>
          
          <div className='flex flex-col gap-2'>
            <Typography variant='subtitle2' className='font-semibold text-textPrimary'>Status</Typography>
            <Select 
              value={localFilters.status || ''} 
              onChange={e => handleChange('status', e.target.value)} 
              displayEmpty 
              size='small' 
              className='w-full'
              IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
            >
              <MenuItem value=''><span className='text-textDisabled'>Any status</span></MenuItem>
              <MenuItem value='Active'>Active</MenuItem>
              <MenuItem value='Pending'>Pending</MenuItem>
              <MenuItem value='Inactive'>Inactive</MenuItem>
            </Select>
          </div>
          
          <div className='flex flex-col gap-2'>
            <Typography variant='subtitle2' className='font-semibold text-textPrimary'>Industry</Typography>
            <Select 
              value={localFilters.industry || ''} 
              onChange={e => handleChange('industry', e.target.value)} 
              displayEmpty 
              size='small' 
              className='w-full'
              IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
            >
              <MenuItem value=''><span className='text-textDisabled'>Any industry</span></MenuItem>
              <MenuItem value='Technology'>Technology</MenuItem>
              <MenuItem value='Energy'>Energy</MenuItem>
              <MenuItem value='Consumer Products'>Consumer Products</MenuItem>
              <MenuItem value='Automotive'>Automotive</MenuItem>
              <MenuItem value='Medical'>Medical</MenuItem>
            </Select>
          </div>

          <div className='flex flex-col gap-2'>
            <Typography variant='subtitle2' className='font-semibold text-textPrimary'>Account Executive</Typography>
            <Select 
              value={localFilters.accountExecutive || ''} 
              onChange={e => handleChange('accountExecutive', e.target.value)} 
              displayEmpty 
              size='small' 
              className='w-full'
              IconComponent={() => <i className='ri-expand-up-down-line text-textDisabled mr-3' />}
            >
              <MenuItem value=''><span className='text-textDisabled'>Anyone</span></MenuItem>
              <MenuItem value='Justin Howard'>Justin Howard</MenuItem>
              <MenuItem value='Sojwal Ae'>Sojwal Ae</MenuItem>
              <MenuItem value='David Gutlay'>David Gutlay</MenuItem>
            </Select>
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col gap-2 flex-1'>
              <Typography variant='subtitle2' className='font-semibold text-textPrimary'>From</Typography>
              <TextField
                fullWidth
                size='small'
                placeholder='mm/dd/yyyy'
                value={localFilters.fromDate || ''}
                onChange={e => handleChange('fromDate', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <i className='ri-calendar-line text-textDisabled' />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <Typography variant='subtitle2' className='font-semibold text-textPrimary'>To</Typography>
              <TextField
                fullWidth
                size='small'
                placeholder='mm/dd/yyyy'
                value={localFilters.toDate || ''}
                onChange={e => handleChange('toDate', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <i className='ri-calendar-line text-textDisabled' />
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className='p-6 flex items-center justify-between mt-auto'>
          <Button variant='outlined' color='secondary' onClick={handleReset}>Clear all</Button>
          <Button variant='contained' color='primary' onClick={handleApply} className='px-8'>Apply</Button>
        </div>
      </div>
    </Drawer>
  )
}

export default AdvancedFiltersDrawer
