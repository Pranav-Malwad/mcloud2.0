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
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Vars
const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  stage: '',
  account: '',
  industry:'',
  contact: ''
}

const AddQuoteDrawer = props => {
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
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      role: '',
      plan: '',
      status: ''
    }
  })

  const onSubmit = data => {
    const newUser = {
      id: (userData?.length && userData?.length + 1) || 1,
      avatar: `/images/avatars/${Math.floor(Math.random() * 8) + 1}.png`,
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      role: data.role,
      currentPlan: data.plan,
      status: data.status,
      ...formData
    }

    setData([...(userData ?? []), newUser])
    handleClose()
    setFormData(initialData)
    resetForm({ fullName: '', username: '', email: '', role: '', plan: '', status: '' })
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
        <Typography variant='h5'>Export New Leads</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='grid grid-cols-2 gap-5'>
          <TextField
            type='date'
            fullWidth
            value={formData.contact}
            onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
          />

          <TextField
            label='File Name'
            fullWidth
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
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
              <MenuItem value='Aerospace and Defense'>Aerospace and Defense</MenuItem>
              <MenuItem value='Automotive'>Automotive</MenuItem>
              <MenuItem value='Consumer Products'>Consumer Products</MenuItem>
              <MenuItem value='Energy'>Energy</MenuItem>
              <MenuItem value='Medical'>Medical</MenuItem>
              <MenuItem value='Oil and Gas'>Oil and Gas</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label='URL'
            fullWidth
            value={formData.account}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          {/* <TextField
            label='Stage'
            fullWidth
            value={formData.stage}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          /> */}

          <FormControl fullWidth>
            <InputLabel id='stage'>Stage</InputLabel>
            <Select
              fullWidth
              id='stage'
              value={formData.stage}
              onChange={e => setFormData({ ...formData, stage: e.target.value })}
              label='stage'
              labelId='stage-label'
            >
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='Lead Export Initiated'>Lead Export Initiated</MenuItem>
              <MenuItem value='Lead Export Completed'>Lead Export Completed</MenuItem>
              <MenuItem value='MCloud Import Intiated'>MCloud Import Intiated</MenuItem>
              <MenuItem value='MCloud Import Completed'>MCloud Import Completed</MenuItem>
              <MenuItem value='Statistic Genrated /Done'>Statistic Genrated /Done</MenuItem>
            </Select>
          </FormControl>

          <div className='col-span-2 flex justify-end space-x-2'>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
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

export default AddQuoteDrawer
