





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
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Dummy Data
const dummyOrders = [
  { id: '1', accountName: 'Company A', firstName: 'John', lastName: 'Doe' },
  { id: '2', accountName: 'Company B', firstName: 'Jane', lastName: 'Smith' },
  { id: '3', accountName: 'Company C', firstName: 'Mike', lastName: 'Johnson' }
]

const AddCasesDrawer = props => {
  // Props
  const { open, handleClose, setData } = props

  // States
  const [selectedOrder, setSelectedOrder] = useState('')
  const [formData, setFormData] = useState({
    caseOwner: '',
    contactName: '',
    accountName: '',
    status: '',
    caseOrigin: '',
    priority: '',
    description: '',
    updatedDate: new Date().toISOString().split('T')[0],
    updatedBy: '',
    internalComments: '',
    createdDate: new Date().toISOString().split('T')[0],
    createdBy: ''
  })

  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleOrderSelect = orderId => {
    const selected = dummyOrders.find(order => order.id === orderId)
    if (selected) {
      setFormData(prev => ({
        ...prev,
        accountName: selected.accountName,
        contactName: `${selected.firstName} ${selected.lastName}`
      }))
    }
  }

  const onSubmit = data => {
    const newCase = { ...formData, ...data }
    setData(prevData => [...prevData, newCase])
    handleClose()
    setFormData({
      caseOwner: '',
      contactName: '',
      accountName: '',
      status: '',
      caseOrigin: '',
      priority: '',
      description: '',
      updatedDate: new Date().toISOString().split('T')[0],
      updatedBy: '',
      internalComments: '',
      createdDate: new Date().toISOString().split('T')[0],
      createdBy: ''
    })
  }

  const handleReset = () => {
    handleClose()
    setFormData(formData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 700 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Add New Case</Typography>
        <IconButton size='small' onClick={handleClose}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>
          <FormControl fullWidth className='col-span-2'>
            <InputLabel id='case-owner-label'>Case Owner</InputLabel>
            <Select
              labelId='case-owner-label'
              label='Case Owner'
              value={formData.caseOwner}
              onChange={e => setFormData({ ...formData, caseOwner: e.target.value })}
              required
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
            label='Contact Name'
            fullWidth
            value={formData.contactName}
            onChange={e => setFormData({ ...formData, contactName: e.target.value })}
            required
            variant='outlined'
          />

          <TextField
            label='Account Name'
            fullWidth
            value={formData.accountName}
            onChange={e => setFormData({ ...formData, accountName: e.target.value })}
            required
            variant='outlined'
          />

          <FormControl fullWidth>
            <InputLabel id='status-label'>Status</InputLabel>
            <Select
              labelId='status-label'
              label='Status'
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value })}
              required
            >
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='In Progress'>In Progress</MenuItem>
              <MenuItem value='Closed'>Closed</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='case-origin-label'>Case Origin</InputLabel>
            <Select
              labelId='case-origin-label'
              label='Case Origin'
              value={formData.caseOrigin}
              onChange={e => setFormData({ ...formData, caseOrigin: e.target.value })}
              required
            >
              <MenuItem value='Phone'>Phone</MenuItem>
              <MenuItem value='Email'>Email</MenuItem>
              <MenuItem value='Web'>Web</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='priority-label'>Priority</InputLabel>
            <Select
              labelId='priority-label'
              label='Priority'
              value={formData.priority}
              onChange={e => setFormData({ ...formData, priority: e.target.value })}
              required
            >
              <MenuItem value='Low'>Low</MenuItem>
              <MenuItem value='Medium'>Medium</MenuItem>
              <MenuItem value='High'>High</MenuItem>
              <MenuItem value='Urgent'>Urgent</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label='Description'
            fullWidth
            multiline
            rows={4}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            variant='outlined'
          />

          <TextField
            label='Updated Date'
            type='date'
            fullWidth
            value={formData.updatedDate}
            onChange={e => setFormData({ ...formData, updatedDate: e.target.value })}
            InputLabelProps={{ shrink: true }} // Keeps label visible when the field is filled
            variant='outlined'
          />
          <TextField
            label='Updated By'
            fullWidth
            value={formData.updatedBy}
            onChange={e => setFormData({ ...formData, updatedBy: e.target.value })}
            variant='outlined'
          />

          <FormControl fullWidth>
            <InputLabel id='related-to-label'>Related To</InputLabel>
            <Select
              labelId='related-to-label'
              label='Related To'
              value={selectedOrder}
              onChange={e => {
                setSelectedOrder(e.target.value)
                handleOrderSelect(e.target.value)
              }}
            >
              {dummyOrders.map(order => (
                <MenuItem key={order.id} value={order.id}>
                  {order.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label='Internal Comments'
            fullWidth
            multiline
            rows={2}
            value={formData.internalComments}
            onChange={e => setFormData({ ...formData, internalComments: e.target.value })}
            variant='outlined'
          />

          <TextField
            label='Created Date'
            type='date'
            fullWidth
            value={formData.createdDate}
            onChange={e => setFormData({ ...formData, createdDate: e.target.value })}
            InputLabelProps={{ shrink: true }} // Keeps label visible when the field is filled
            variant='outlined'
          />
          <TextField
            label='Created By'
            fullWidth
            value={formData.createdBy}
            onChange={e => setFormData({ ...formData, createdBy: e.target.value })}
            variant='outlined'
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

export default AddCasesDrawer
