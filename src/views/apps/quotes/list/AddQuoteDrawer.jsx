

import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Vars
const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  account: '',
  contact: '',
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
      firstName: '',
      lastName: '',
      email: '',
      account: '',
      contact: ''
    }
  })

  const onSubmit = data => {
    const newUser = {
      id: (userData?.length && userData?.length + 1) || 1,
      avatar: `/images/avatars/${Math.floor(Math.random() * 8) + 1}.png`,
      ...data // Merging form data from `useForm` with formData
    }

    setData([...(userData ?? []), newUser])
    handleClose()
    setFormData(initialData)
    resetForm()
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
    resetForm()
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
        <Typography variant='h5'>New Quote</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>
          {/* First Name Field */}
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='First Name'
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? "First Name is required" : ""}
              />
            )}
            rules={{ required: true }}
          />

          {/* Last Name Field */}
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Last Name'
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName ? "Last Name is required" : ""}
              />
            )}
            rules={{ required: true }}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Email'
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? "Email is required" : ""}
              />
            )}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />

          {/* Account Field */}
          <Controller
            name="account"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Account'
                fullWidth
              />
            )}
          />

          {/* Contact Field */}
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Contact'
                fullWidth
              />
            )}
          />

          {/* Submit and Cancel Buttons */}
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

export default AddQuoteDrawer
