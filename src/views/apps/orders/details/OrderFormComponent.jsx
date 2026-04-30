// React & MUI Imports
'use client'
import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Typography
} from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Importing ReactQuill styles

const OrderFormComponent = () => {
  const [isEditing, setIsEditing] = useState(false)

  const [orderDetails, setOrderDetails] = useState({
    orderStatus: 'Processing',
    paymentType: 'Purchase Order',
    paymentTerms: 'NET 30 ',
    supplier: 'ENL',
    fileName: 'A28769_Q102162_PFQ102162.pdf',
    customerNotes: 'Customer requested delivery within 2 weeks.',
    supplierNotes: 'Supplier confirmed material availability.',
    accountExecNotes: '',
    accountExecNotesSupplier: '',
    projectManagerNotes: '',
    invoiceNotes: ''
  })

  const [originalState, setOriginalState] = useState({ ...orderDetails })

  const handleFileUpload = event => {
    if (event.target.files[0]) {
      setOrderDetails(prev => ({ ...prev, fileName: event.target.files[0].name }))
    }
  }

  const handleChange = (key, value) => {
    setOrderDetails(prev => ({ ...prev, [key]: value }))
  }

  const handleEdit = () => {
    setOriginalState({ ...orderDetails })
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log(orderDetails)
  }

  const handleCancel = () => {
    setOrderDetails({ ...originalState })
    setIsEditing(false)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Order Details
          </Typography>
        </Grid>

        {/* Edit/Save/Cancel Buttons */}
        <Grid item>
          {isEditing ? (
            <>
              <Button variant='contained' color='primary' onClick={handleSave}>
                Save
              </Button>
              <Button variant='outlined' color='secondary' onClick={handleCancel} sx={{ ml: 2 }}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant='contained' color='primary' onClick={handleEdit}>
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      <CardContent>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <FormControlLabel control={<Checkbox name='openOrder' disabled={!isEditing} />} label='Open Order' />
            <FormControl fullWidth margin='normal'>
              <InputLabel>Order Status</InputLabel>
              <Select
                label='Order Status'
                value={orderDetails.orderStatus}
                onChange={e => handleChange('orderStatus', e.target.value)}
                disabled={!isEditing}
              >
                {[
                  'Processing',
                  'Cancelled',
                  'Awaiting Supplier Confirmation',
                  'In Production',
                  'Project Closed',
                  'Late',
                  'Issue Resolution',
                  'Waiting on Final Files from Customer',
                  'Shipped from Supplier to PF'
                ].map(status => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField label='Customer PO#' fullWidth margin='normal' disabled={!isEditing} />
            <Button variant='outlined' component='label' title='upload' disabled={!isEditing}>
              {orderDetails.fileName}
              <input type='file' hidden onChange={handleFileUpload} />
            </Button>

            <FormControl fullWidth margin='normal'>
              <InputLabel>Payment Type</InputLabel>
              <Select
                label='Payment Type'
                value={orderDetails.paymentType}
                onChange={e => handleChange('paymentType', e.target.value)}
                disabled={!isEditing}
              >
                {['Credit Card', 'Purchase Order'].map(payment => (
                  <MenuItem key={payment} value={payment}>
                    {payment}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField label='Due Date' value='11/08/2024' fullWidth margin='normal' disabled />
            <TextField label='Supplier Score' value='85' fullWidth margin='normal' disabled />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} className='mt-9'>
            <FormControl fullWidth margin='normal'>
              <InputLabel>Payment Terms Customer</InputLabel>
              <Select
                label='Payment Terms Customer'
                value={orderDetails.paymentTerms}
                onChange={e => handleChange('paymentTerms', e.target.value)}
                disabled={!isEditing}
              >
                {[
                  'NET 7',
                  'NET 10',
                  'NET 15',
                  'NET 30 ',
                  'NET 45',
                  'NET 60',
                  'NET 75',
                  'NET 90',
                  'Other (Specify in notes)'
                ].map(term => (
                  <MenuItem key={term} value={term}>
                    {term}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin='normal'>
              <InputLabel>Supplier</InputLabel>
              <Select
                label='Supplier'
                value={orderDetails.supplier}
                onChange={e => handleChange('supplier', e.target.value)}
                disabled={!isEditing}
              >
                {[
                  'Pavilion Manufacturing PVT.LMT',
                  'Other Supplier',
                  'Sharang Kapsikar',
                  'idea supplier',
                  'Leshine Technology Co Ltd',
                  'Zhongshan Hord Rapidtools Ltd',
                  'DONGGUAN BOLE RP M COLTD',
                  'ENL',
                  'Hkwcd',
                  'Jason Mould',
                  'Merit',
                  'Enable Fab',
                  'SHENZHEN FASTPROTO CO.,LTD',
                  'ARRK',
                  'Fusion',
                  'PrintForm Supplier',
                  'Agile Manufacturing ltd.',
                  'Prototek',
                  'Jabil Additive',
                  'Wuxi Odiem Technology',
                  'WG Sourcing',
                  'HyMetals',
                  'Pavilion Manufacturing'
                ].map(supplier => (
                  <MenuItem key={supplier} value={supplier}>
                    {supplier}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField label='Supplier Quote#' fullWidth margin='normal' className='mt-[55px]' disabled={!isEditing} />
            <TextField label='GP(%)' value='70.56' fullWidth margin='normal' disabled />
          </Grid>

          {/* Notes Fields */}
          <Grid item xs={12}>
            <Typography variant='h6'>Account Executive Notes</Typography>
            {isEditing ? (
              <ReactQuill
                value={orderDetails.accountExecNotes}
                onChange={value => handleChange('accountExecNotes', value)}
                theme='snow'
                style={{ marginBottom: 20 }}
              />
            ) : (
              <Typography
                variant='body1'
                style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
                dangerouslySetInnerHTML={{ __html: orderDetails.accountExecNotes || 'No notes available.' }} // Render raw HTML
              />
            )}

            <Typography variant='h6'>Account Executive Notes - To Supplier</Typography>
            {isEditing ? (
              <ReactQuill
                value={orderDetails.accountExecNotesSupplier}
                onChange={value => handleChange('accountExecNotesSupplier', value)}
                theme='snow'
                style={{ marginBottom: 20 }}
              />
            ) : (
              <Typography
                variant='body1'
                style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
                dangerouslySetInnerHTML={{ __html: orderDetails.accountExecNotesSupplier || 'No notes available.' }} // Render raw HTML
              />
            )}

            <Typography variant='h6'>Project Manager Notes</Typography>
            {isEditing ? (
              <ReactQuill
                value={orderDetails.projectManagerNotes}
                onChange={value => handleChange('projectManagerNotes', value)}
                theme='snow'
                style={{ marginBottom: 20 }}
              />
            ) : (
              <Typography
                variant='body1'
                style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
                dangerouslySetInnerHTML={{ __html: orderDetails.projectManagerNotes || 'No notes available.' }} // Render raw HTML
              />
            )}

            <Typography variant='h6'>Invoice Notes</Typography>
            {isEditing ? (
              <ReactQuill
                value={orderDetails.invoiceNotes}
                onChange={value => handleChange('invoiceNotes', value)}
                theme='snow'
                style={{ marginBottom: 20 }}
              />
            ) : (
              <Typography
                variant='body1'
                style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
                dangerouslySetInnerHTML={{ __html: orderDetails.invoiceNotes || 'No notes available.' }} // Render raw HTML
              />
            )}
          </Grid>

          {/* Customer and Supplier Notes */}
          <Grid item xs={12} md={6}>
            <TextField
              label='Customer Notes'
              value={orderDetails.customerNotes}
              fullWidth
              margin='normal'
              disabled
              onChange={e => handleChange('customerNotes', e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label='Supplier Notes'
              value={orderDetails.supplierNotes}
              fullWidth
              margin='normal'
              disabled
              onChange={e => handleChange('supplierNotes', e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default OrderFormComponent
