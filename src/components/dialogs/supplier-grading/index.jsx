'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

// Vars
const initialFormData = {
  project_status: 'Work Order',
  notes: '',
  order_no: '102311',
  supplier_name: 'Pavalion Manufacturing',
  account_executive: 'Pratik AE',
  project_manager: 'Pratik PM',
  created_date: '10/30/2024', // default date
  rate_quality_perception: '',
  confirm_ship: '',
  project_issue_addressed: '',
  pm_experience: '',
  ready_to_ship: '',
  notify_pm: '',
  pm_questions_answered: '',
  is_followed_instructions: ''
}

const SupplierGrading = ({ open, setOpen, data , maxWidth, fullWidth }) => {
  // States
  const [formData, setFormData] = useState(initialFormData)

  const handleClose = () => {
    setOpen(false)
    setFormData(initialFormData)
  }

  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [open, data])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

 
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth={fullWidth}>
      <DialogTitle variant='h4' className='flex flex-col gap-2 text-center sm:pbs-16 sm:pbe-6 sm:pli-16 ' >
        Supplier Grading
        <Typography component='span' className='flex flex-col text-center'>
          Grade a supplier using this form
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='overflow-visible pbs-0 sm:pli-16 sm:pbe-6'>
          <IconButton onClick={handleClose} className='absolute block-start-4 inline-end-4'>
            <i className='ri-close-line text-textSecondary' />
          </IconButton>
          <Grid container spacing={5}>
            {/* New form fields */}
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth
                label='Project Status'
                name='project_status'
                value={formData.project_status}
                onChange={handleInputChange}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Order No'
                name='order_no'
                value={formData.order_no}
                onChange={handleInputChange}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Supplier Name'
                name='supplier_name'
                value={formData.supplier_name}
                onChange={handleInputChange}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Account Executive'
                name='account_executive'
                value={formData.account_executive}
                onChange={handleInputChange}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Project Manager'
                name='project_manager'
                value={formData.project_manager}
                onChange={handleInputChange}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Created Date'
                name='created_date'
                value={formData.created_date}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
          

              <FormControl fullWidth>
                <InputLabel>Rate quality perception (1-10)</InputLabel>
                <Select
                label='Rate quality perception (1-10)'
                
                  name='rate_quality_perception'
                  value={formData.rate_quality_perception}
                  onChange={handleInputChange}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Did the supplier confirm ship date within 1 business day</InputLabel>
                <Select
                label='Did the supplier confirm ship date within 1 business day'

                  name='confirm_ship'
                  value={formData.confirm_ship}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Were project issues addressed clearly and timely</InputLabel>
                <Select
                                label='Were project issues addressed clearly and timely'

                  name='project_issue_addressed'
                  value={formData.project_issue_addressed}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Rate PM's experience with supplier (1-10)</InputLabel>
                <Select
                                label='Rate PM"s experience with supplier (1-10)'

                  name='pm_experience'
                  value={formData.pm_experience}
                  onChange={handleInputChange}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Was the order ready to ship on the promised date</InputLabel>
                <Select
                                label='Was the order ready to ship on the promised date'

                  name='ready_to_ship'
                  value={formData.ready_to_ship}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Did the supplier notify the PM that the order shipped</InputLabel>
                <Select
                                label='Did the supplier notify the PM that the order shipped'

                  name='notify_pm'
                  value={formData.notify_pm}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Were all PM's questions answered clearly and timely</InputLabel>
                <Select
                                label="Were all PM's questions answered clearly and timely"

                  name='pm_questions_answered'
                  value={formData.pm_questions_answered}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Did the supplier follow all WO instructions</InputLabel>
                <Select
                                label='Did the supplier follow all WO instructions'

                  name='is_followed_instructions'
                  value={formData.is_followed_instructions}
                  onChange={handleInputChange}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <TextField
                fullWidth
                label='Notes'
                name='notes'
                value={formData.notes}
                onChange={handleInputChange}

              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'  variant='contained' size='small' className='ml-4 max-sm:is-full'>Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SupplierGrading
