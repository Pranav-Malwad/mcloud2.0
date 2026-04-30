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
  leadOwner: '',
  sdr: '',
  website: '',
  mobile: '',
  leadSource: '',
  Reg_From: '',
  customer_status: '',
  lead_status: '',
  sic_code: '',
  job_title: '',
  date_next_follow_up: '',
  service_interest: '',
  linkedin: '',
  address1: '',
  address2: '',
  address3: '',
  description: '',
  company: '',
  industry: '',
  accountExecutive: '',
  process: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  address: '',
  city: '',
  country: '',
  state: '',
  zip: ''
}

const AddQuotesDrawer = props => {
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
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 900 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>New Lead</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='grid grid-cols-2 gap-5'>
          <Typography className='col-span-2 bg-gray-200 p-2'> Lead Information</Typography>
          <FormControl fullWidth>
            <InputLabel id='account-executive-label'>Lead Owner</InputLabel>
            <Select
              fullWidth
              id='lead-owner'
              value={formData.accountExecutive}
              onChange={e => setFormData({ ...formData, accountExecutive: e.target.value })}
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
          <TextField
            label='First Name'
            fullWidth
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            label='Last Name'
            fullWidth
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
          <TextField
            label='Email'
            fullWidth
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            label='Phone'
            fullWidth
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <TextField
            label='Website'
            fullWidth
            value={formData.website}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
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
            label='Mobile'
            fullWidth
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />

          <FormControl fullWidth>
            <InputLabel id='leadSource-label'>Lead Source</InputLabel>
            <Select
              fullWidth
              id='leadSource'
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              label='Lead Source'
              labelId='leadSource-label'
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
            label='Reg.From'
            fullWidth
            value={formData.Reg_From}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />

          <FormControl fullWidth>
            <InputLabel id='lead_status-label'>Lead Status</InputLabel>
            <Select
              fullWidth
              id='lead_status'
              value={formData.lead_status}
              onChange={e => setFormData({ ...formData, lead_status: e.target.value })}
              label='Lead Status'
              labelId='lead_status-label'
            >
              <MenuItem value='CNC Machining'>CNC Machining</MenuItem>
              <MenuItem value='Injection Molding'>Injection Molding</MenuItem>
              <MenuItem value='Cast Urethane'>Cast Urethane</MenuItem>
              <MenuItem value='3D Printing'>3D Printing</MenuItem>
              <MenuItem value='Sheet Metal'>Sheet Metal</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='process-label'>Process</InputLabel>
            <Select
              fullWidth
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
          <FormControl fullWidth>
            <InputLabel id='customer_status-label'>Customer Status</InputLabel>
            <Select
              fullWidth
              id='process'
              value={formData.customer_status}
              onChange={e => setFormData({ ...formData, customer_status: e.target.value })}
              label='Customer Status'
              labelId='customer_status-label'
            >
              <MenuItem value='CNC Machining'>CNC Machining</MenuItem>
              <MenuItem value='Injection Molding'>Injection Molding</MenuItem>
              <MenuItem value='Cast Urethane'>Cast Urethane</MenuItem>
              <MenuItem value='3D Printing'>3D Printing</MenuItem>
              <MenuItem value='Sheet Metal'>Sheet Metal</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='SIC Code'
            fullWidth
            value={formData.sic_code}
            onChange={e => setFormData({ ...formData, sic_code: e.target.value })}
          />
          <TextField
            label='Job Title'
            fullWidth
            value={formData.job_title}
            onChange={e => setFormData({ ...formData, job_title: e.target.value })}
          />
          <TextField
            label='Date of Next Follow-up'
            type='date'
            fullWidth
            value={formData.date_next_follow_up}
            onChange={e => setFormData({ ...formData, date_next_follow_up: e.target.value })}
          />
          <TextField
            label='Service Intereset'
            fullWidth
            value={formData.service_interest}
            onChange={e => setFormData({ ...formData, service_interest: e.target.value })}
          />
          <TextField
            label='Linkedin'
            fullWidth
            value={formData.linkedin}
            onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
          />
          <Typography className='col-span-2 bg-gray-200 p-2'> Addtional Details</Typography>
          <TextField
          className='col-span-2'
            label='Address 1'
            fullWidth
            value={formData.address1}
            onChange={e => setFormData({ ...formData, address1: e.target.value })}
          />
          <TextField
            label='Address 2'
            fullWidth
            value={formData.address2}
            onChange={e => setFormData({ ...formData, address2: e.target.value })}
          />

          <TextField
            label='Address 3'
            fullWidth
            value={formData.address3}
            onChange={e => setFormData({ ...formData, address3: e.target.value })}
          />

          <TextField
            label='City'
            fullWidth
            value={formData.city}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
          />
          <TextField
            label='State'
            fullWidth
            value={formData.state}
            onChange={e => setFormData({ ...formData, state: e.target.value })}
          />
          <TextField
            label='Zip'
            fullWidth
            value={formData.zip}
            onChange={e => setFormData({ ...formData, zip: e.target.value })}
          />
          <TextField
            label='Country'
            fullWidth
            value={formData.country}
            onChange={e => setFormData({ ...formData, country: e.target.value })}
          />

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

export default AddQuotesDrawer
