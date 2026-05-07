


'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'

// Component Imports
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'

// Vars
const countries = ['Select Country', 'France', 'Russia', 'China', 'UK', 'US']

const initialAddressData = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '', // Added phone field
  country: '',
  address1: '',
  address2: '',
  landmark: '',
  city: '',
  state: '',
  zipCode: '',
  isDefaultAddress: false
}

// Styled Components
const Title = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'title'
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: 'var(--mui-palette-text-primary) !important'
}))

const customInputData = [
  {
    title: (
      <Title component='div' className='flex items-center gap-1'>
        <i className='ri-home-smile-2-line text-xl' />
        <Typography color='text.primary' className='font-medium'>
          Shipping
        </Typography>
      </Title>
    ),
    content: 'Delivery Time (7am - 9pm)',
    value: 'Shipping',
    isSelected: true
  },
  {
    title: (
      <Title component='div' className='flex items-center gap-1'>
        <i className='ri-building-line text-xl' />
        <Typography color='text.primary' className='font-medium'>
          Billing
        </Typography>
      </Title>
    ),
    content: 'Delivery Time (10am - 6pm)',
    value: 'Billing'
  }
]

const AddEditAddress = ({ open, setOpen, data, onSave, addressType }) => {
  // Vars
  const initialSelected = addressType || data?.typeOfAddress || customInputData?.find(item => item.isSelected)?.value || 'Shipping'

  // States
  const [selected, setSelected] = useState(initialSelected)
  const [addressData, setAddressData] = useState(initialAddressData)

  const handleChange = prop => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected(prop.target.value)
    }
  }

  useEffect(() => {
    setAddressData(data ? { ...initialAddressData, ...data } : initialAddressData)
    setSelected(addressType || data?.typeOfAddress || 'Shipping')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, data, addressType])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSave) {
      onSave({ ...addressData, typeOfAddress: selected })
    }
    setOpen(false)
    setSelected(initialSelected)
  }

  return (
    <Dialog
      open={open}
      maxWidth='md'
      scroll='body'
      onClose={() => {
        setOpen(false)
        setSelected(initialSelected)
      }}
    >
      <DialogTitle variant='h4' sx={{ textAlign: 'center', pt: 4, pb: 4 }}>
        {data ? 'Edit Address' : 'Add New Address'}
        <Typography variant='body1' sx={{ mt: 1, color: 'text.secondary' }}>
          {data ? 'Edit Address for future billing' : 'Add address for billing or shipping'}
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent className='pbs-0 sm:pbe-4 sm:pli-8'>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: 'text.secondary'
            }}
          >
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={4}>
            {customInputData.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <CustomInputHorizontal
                  key={index}
                  type='radio'
                  name='addressType'
                  selected={selected}
                  data={item}
                  handleChange={handleChange}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='First Name'
                name='firstName'
                variant='outlined'
                placeholder='John'
                value={addressData?.firstName || ''}
                onChange={e => setAddressData({ ...addressData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='Last Name'
                name='lastName'
                variant='outlined'
                placeholder='Doe'
                value={addressData?.lastName || ''}
                onChange={e => setAddressData({ ...addressData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='Phone Number'
                name='phone'
                variant='outlined'
                placeholder='(123) 456-7890'
                value={addressData?.phone || ''}
                onChange={e => setAddressData({ ...addressData, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size='small'>
                <InputLabel>Country</InputLabel>
                <Select
                  label='Country'
                  name='country'
                  variant='outlined'
                  value={addressData?.country?.toLowerCase().replace(/\s+/g, '-') || ''}
                  onChange={e => setAddressData({ ...addressData, country: e.target.value })}
                >
                  {countries.map((item, index) => (
                    <MenuItem key={index} value={item.toLowerCase().replace(/\s+/g, '-')}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size='small'
                label='Address Line 1'
                name='address1'
                variant='outlined'
                placeholder='12, Business Park'
                value={addressData?.address1 || ''}
                onChange={e => setAddressData({ ...addressData, address1: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size='small'
                label='Address Line 2'
                name='address2'
                variant='outlined'
                placeholder='Mall Road'
                value={addressData?.address2 || ''}
                onChange={e => setAddressData({ ...addressData, address2: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='Landmark'
                name='landmark'
                variant='outlined'
                placeholder='Nr. Hard Rock Cafe'
                value={addressData?.landmark || ''}
                onChange={e => setAddressData({ ...addressData, landmark: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='City'
                name='city'
                variant='outlined'
                placeholder='Los Angeles'
                value={addressData?.city || ''}
                onChange={e => setAddressData({ ...addressData, city: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='State'
                name='state'
                variant='outlined'
                placeholder='California'
                value={addressData?.state || ''}
                onChange={e => setAddressData({ ...addressData, state: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size='small'
                label='Zip Code'
                type='number'
                name='zipCode'
                variant='outlined'
                placeholder='99950'
                value={addressData?.zipCode || ''}
                onChange={e => setAddressData({ ...addressData, zipCode: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} className='sm:pbs-2'>
              <FormControlLabel 
                control={
                  <Switch 
                    checked={addressData?.isDefaultAddress || false} 
                    onChange={e => setAddressData({ ...addressData, isDefaultAddress: e.target.checked })} 
                  />
                } 
                label='Make this default address' 
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-8 sm:pli-8'>
          <Button variant='contained' type='submit'>
            {data ? 'Update' : 'Submit'}
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setOpen(false)
              setSelected(initialSelected)
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddEditAddress
