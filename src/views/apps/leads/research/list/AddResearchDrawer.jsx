import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Vars
const initialData = {
  industry: '',
  partsProductsURL: '',
  status: '',
  sdr: '',
  company: '',
  website: '',
  notes: '',
  leadOwner: ''
}

const AddResearchDrawer = props => {
  // Props
  const { open, handleClose, userData, setData } = props

  // States
  const [formData, setFormData] = useState(initialData)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialData
  })

  const onSubmit = data => {
    const newEntry = {
      id: (userData?.length && userData?.length + 1) || 1,
      ...formData
    }

    setData([...(userData ?? []), newEntry])
    handleClose()
    setFormData(initialData)
    resetForm()
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 700 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Add New Company</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='grid grid-cols-2 gap-5'>
        <FormControl fullWidth>
            <InputLabel id='sdr-label'>SDR</InputLabel>
            <Select
              fullWidth
              id='sdr'
              value={formData.sdr}
              onChange={e => setFormData({ ...formData, sdr: e.target.value })}
              label='SDR'
              labelId='sdr-label'
            >
              <MenuItem value='John Doe'>John Doe</MenuItem>
              <MenuItem value='Jane Smith'>Jane Smith</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='account-executive-label'>Lead Owner</InputLabel>
            <Select
              fullWidth
              id='lead-owner'
              value={formData.leadOwner}
              onChange={e => setFormData({ ...formData, leadOwner: e.target.value })}
              label='Lead Owner'
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
          <TextField
            label='Company'
            fullWidth
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
          />
            <FormControl fullWidth>
            <InputLabel id='industry-label'>Industry</InputLabel>
            <Select
              fullWidth
              id='industry'
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              label='Industry'
              labelId='industry-label'
            >
              <MenuItem value='Aerospace'>Aerospace</MenuItem>
              <MenuItem value='Automotive'>Automotive</MenuItem>
              <MenuItem value='Medical'>Medical</MenuItem>
              <MenuItem value='Technology'>Technology</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Website'
            fullWidth
            value={formData.website}
            onChange={e => setFormData({ ...formData, website: e.target.value })}
          />
           
        
          <TextField
            label='Parts & Products URL'
            fullWidth
            value={formData.partsProductsURL}
            onChange={e => setFormData({ ...formData, partsProductsURL: e.target.value })}
          />
          <FormControl fullWidth className='col-span-2'>
            <InputLabel id='status-label'>Status</InputLabel>
            <Select
              fullWidth
              id='status'
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value })}
              label='Status'
              labelId='status-label'
            >
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='In Progress'>In Progress</MenuItem>
              <MenuItem value='Closed'>Closed</MenuItem>
            </Select>
          </FormControl>
        
          <TextField
            label='Notes'
            fullWidth
            multiline
            rows={4}
            value={formData.notes}
            onChange={e => setFormData({ ...formData, notes: e.target.value })}
            className='col-span-2'
          />
         
          <div className='col-span-2 flex justify-end space-x-2'>
            <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
              Cancel
            </Button>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddResearchDrawer
