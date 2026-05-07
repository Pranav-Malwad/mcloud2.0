
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
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

const AddUserDrawer = props => {
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 4, px: 5 }}>
        <Typography variant='h5'>Add New Account</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='First Name'
                fullWidth
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Last Name'
                fullWidth
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Email'
                fullWidth
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Phone'
                fullWidth
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Password'
                type='password'
                fullWidth
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Confirm Password'
                type='password'
                fullWidth
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Address'
                fullWidth
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='City'
                fullWidth
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='State'
                fullWidth
                value={formData.state}
                onChange={e => setFormData({ ...formData, state: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Zip'
                fullWidth
                value={formData.zip}
                onChange={e => setFormData({ ...formData, zip: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Country'
                fullWidth
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                label='Company Name'
                fullWidth
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel id='account-executive-label'>Account Executive</InputLabel>
                <Select
                  fullWidth
                  id='account-executive'
                  value={formData.accountExecutive}
                  onChange={e => setFormData({ ...formData, accountExecutive: e.target.value })}
                  label='Account Executive'
                  labelId='account-executive-label'
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
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
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
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
                  Cancel
                </Button>
                <Button variant='contained' type='submit'>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Drawer>
  )
}

export default AddUserDrawer

