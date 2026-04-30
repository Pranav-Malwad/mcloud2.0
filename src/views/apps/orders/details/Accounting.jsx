// // Accounting.js
// 'use client'
// import React, { useState } from 'react'
// import {
//   Box,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   FormHelperText,
//   Select,
//   Card,
//   MenuItem,
//   Typography,
//   Button
// } from '@mui/material'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css' // Import Quill styles
// import { useEdit } from '@/contexts/EditContext'
// const Accounting = () => {
//   const { isEditing, toggleEdit } = useEdit()

//   // State for date fields and inputs
//   const [invoicedDate, setInvoicedDate] = useState('')
//   const [paymentReceivedDate, setPaymentReceivedDate] = useState('')
//   const [commissionPaidDate, setCommissionPaidDate] = useState('')
//   const [billedDate, setBilledDate] = useState('')
//   const [billPaidDate, setBillPaidDate] = useState('')
//   const [commissionRate, setCommissionRate] = useState(10)
//   const [poAudit, setPoAudit] = useState('')
//   const [invoicingStage, setInvoicingStage] = useState('')
//   const [woAudit, setWoAudit] = useState('')
//   const [auditNotes, setAuditNotes] = useState('')
//   const [paymentAndCommission, setPaymentAndCommission] = useState('')

//   // Non-editable fields
//   const bookedRevenue = '$1,000,000.00' // Example value
//   const grossProfit = '$600,000.00' // Example value
//   const projectExpenses = '$494,760.00' // Example value
//   const grossProfitPercentage = 'NaN' // Example value
//   const commissionAmount = '$100,000.00' // Example value

//   const handleSave = () => {
//     // Here you would handle saving the data
//     // For example, making an API call
//     console.log('Data saved:', {
//       invoicedDate,
//       paymentReceivedDate,
//       commissionPaidDate,
//       billedDate,
//       billPaidDate,
//       commissionRate,
//       poAudit,
//       invoicingStage,
//       woAudit,
//       auditNotes,
//       paymentAndCommission
//     })
//     toggleEdit() // Exit edit mode after saving
//   }

//   const stripHtmlTags = html => {
//     return html.replace(/<[^>]*>/g, '') // Remove all HTML tags
//   }

//   return (
//     <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
//       <Typography variant='h5' gutterBottom align='left' color='primary'>
//         Financial Details
//       </Typography>
//       <Grid container spacing={2}>
//         {/* Booked Revenue */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Booked Revenue'
//             value={bookedRevenue}
//             InputProps={{ readOnly: true }}
//             margin='normal'
//           />
//         </Grid>

//         {/* Gross Profit */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Gross Profit'
//             value={grossProfit}
//             InputProps={{ readOnly: true }}
//             margin='normal'
//           />
//         </Grid>

//         {/* Invoiced */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             type='date'
//             value={invoicedDate}
//             onChange={e => setInvoicedDate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }} // Toggle based on editing state
//           />
//           <FormHelperText>{invoicedDate ? '' : 'Please enter the Invoiced received date.'}</FormHelperText>
//         </Grid>

//         {/* Payment Received */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             type='date'
//             value={paymentReceivedDate}
//             onChange={e => setPaymentReceivedDate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//           <FormHelperText>{paymentReceivedDate ? '' : 'Please enter the payment received date.'}</FormHelperText>
//         </Grid>

//         {/* Commission Rate (%) */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Commission Rate (%)'
//             type='number'
//             value={commissionRate}
//             onChange={e => setCommissionRate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//         </Grid>

//         {/* Commission Paid */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             type='date'
//             value={commissionPaidDate}
//             onChange={e => setCommissionPaidDate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//           <FormHelperText>{commissionPaidDate ? '' : 'Please enter the payment received date.'}</FormHelperText>
//         </Grid>

//         {/* PO Audit Dropdown */}
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth variant='outlined' margin='normal'>
//             <InputLabel id='po-audit-label'>PO Audit</InputLabel>
//             <Select
//               labelId='po-audit-label'
//               value={poAudit}
//               onChange={e => setPoAudit(e.target.value)}
//               label='PO Audit'
//               readOnly={!isEditing}
//               disabled={!isEditing} // Disable dropdown when not editing
//             >
//               <MenuItem value='Audit 1'>Audit 1</MenuItem>
//               <MenuItem value='Audit 2'>Audit 2</MenuItem>
//               {/* Add more options as needed */}
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Invoicing Stage Dropdown */}
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth variant='outlined' margin='normal'>
//             <InputLabel id='invoicing-stage-label'>Invoicing Stage</InputLabel>
//             <Select
//               labelId='invoicing-stage-label'
//               value={invoicingStage}
//               onChange={e => setInvoicingStage(e.target.value)}
//               label='Invoicing Stage'
//               readOnly={!isEditing}
//               disabled={!isEditing}
//             >
//               <MenuItem value='Stage 1'>Stage 1</MenuItem>
//               <MenuItem value='Stage 2'>Stage 2</MenuItem>
//               {/* Add more options as needed */}
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Project Expenses */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Project Expenses'
//             value={projectExpenses}
//             InputProps={{ readOnly: true }}
//             margin='normal'
//           />
//         </Grid>

//         {/* Gross Profit (%) */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Gross Profit (%)'
//             value={grossProfitPercentage}
//             InputProps={{ readOnly: true }}
//             margin='normal'
//           />
//         </Grid>

//         {/* Billed */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             type='date'
//             value={billedDate}
//             onChange={e => setBilledDate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//           <FormHelperText>{billedDate ? '' : 'Please enter the billed date.'}</FormHelperText>
//         </Grid>

//         {/* Bill Paid */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             type='date'
//             value={billPaidDate}
//             onChange={e => setBillPaidDate(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//           <FormHelperText>{billPaidDate ? '' : 'Please enter the bill paid date.'}</FormHelperText>
//         </Grid>

//         {/* Commission Amount */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Commission Amount'
//             value={commissionAmount}
//             InputProps={{ readOnly: true }}
//             margin='normal'
//           />
//         </Grid>

//         {/* Shipping GP */}
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth InputProps={{ readOnly: !isEditing }} margin='normal' />
//           <FormHelperText>{'Please enter the Shipping GP.'}</FormHelperText>
//         </Grid>

//         {/* WO Audit */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='WO Audit'
//             value={woAudit}
//             onChange={e => setWoAudit(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//         </Grid>

//         {/* Payment and Commission */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label='Payment and Commission'
//             value={paymentAndCommission}
//             onChange={e => setPaymentAndCommission(e.target.value)}
//             margin='normal'
//             InputProps={{ readOnly: !isEditing }}
//           />
//         </Grid>

//         {/* Audit Notes */}
//         <Grid item xs={12}>
//           {isEditing ? (
//             <ReactQuill
//               theme='snow'
//               value={auditNotes}
//               onChange={setAuditNotes}
//               readOnly={!isEditing}
//               style={{ height: '200px', marginBottom: '40px' }} // Set the desired height
//             />
//           ) : (
//             <Typography variant='body1' style={{ whiteSpace: 'pre-wrap', height: '50px', marginBottom: '40px' }}>
//               {stripHtmlTags(auditNotes) || 'No notes available.'}
//             </Typography>
//           )}
//         </Grid>

//         {/* Edit/Save Button */}
//       </Grid>
//     </Card>
//   )
// }

// export default Accounting

// Accounting.js
'use client'
import React, { useState } from 'react'
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  Card,
  MenuItem,
  Typography,
  Button
} from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import Quill styles
import { useEdit } from '@/contexts/EditContext'

const Accounting = () => {
  // State for all fields
  const [fields, setFields] = useState({
    invoicedDate: '',
    paymentReceivedDate: '',
    commissionPaidDate: '',
    billedDate: '',
    billPaidDate: '',
    commissionRate: 10,
    poAudit: '',
    invoicingStage: '',
    woAudit: '',
    auditNotes: '',
    paymentAndCommission: ''
  })

  // Non-editable fields
  const bookedRevenue = '$1,000,000.00' // Example value
  const grossProfit = '$600,000.00' // Example value
  const projectExpenses = '$494,760.00' // Example value
  const grossProfitPercentage = '20' // Example value
  const commissionAmount = '$100,000.00' // Example value

  const [isEditing, setIsEditing] = useState(false)
  const [originalState, setOriginalState] = useState({ ...fields })

  const handleEdit = () => {
    setOriginalState({ ...fields }) // Store current form state
    setIsEditing(true)
  }

  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false)
    console.log(fields)
  }

  // Cancel changes and revert to original state
  const handleCancel = () => {
    setFields({ ...originalState }) // Revert form state to original
    setIsEditing(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFields({
      ...fields,
      [name]: value
    })
  }

  const stripHtmlTags = html => {
    return html.replace(/<[^>]*>/g, '') // Remove all HTML tags
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Accounting Section
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
      <Grid container spacing={2}>
        {/* Booked Revenue */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Booked Revenue'
            value={bookedRevenue}
            InputProps={{ readOnly: true }}
            margin='normal'
          />
        </Grid>

        {/* Gross Profit */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Gross Profit'
            value={grossProfit}
            InputProps={{ readOnly: true }}
            margin='normal'
          />
        </Grid>

        {/* Invoiced */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            name='invoicedDate'
            value={fields.invoicedDate}
            label='Invoiced Date'
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange}
            margin='normal'
            InputProps={{ readOnly: !isEditing }} // Toggle based on editing state
          />
          <FormHelperText>{fields.invoicedDate ? '' : 'Please enter the Invoiced received date.'}</FormHelperText>
        </Grid>

        {/* Payment Received */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            name='paymentReceivedDate'
            value={fields.paymentReceivedDate}
            onChange={handleChange}
            margin='normal'
            label='Billed Date'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{ readOnly: !isEditing }}
          />
          <FormHelperText>{fields.paymentReceivedDate ? '' : 'Please enter the payment received date.'}</FormHelperText>
        </Grid>

        {/* Commission Rate (%) */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Commission Rate (%)'
            type='number'
            name='commissionRate'
            value={fields.commissionRate}
            onChange={handleChange}
            margin='normal'
            InputProps={{ readOnly: !isEditing }}
          />
        </Grid>

        {/* Commission Paid */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            name='commissionPaidDate'
            value={fields.commissionPaidDate}
            onChange={handleChange}
            margin='normal'
            label='Commission Paid'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{ readOnly: !isEditing }}
          />
          <FormHelperText>{fields.commissionPaidDate ? '' : 'Please enter the payment received date.'}</FormHelperText>
        </Grid>

        {/* PO Audit Dropdown */}

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined' margin='normal'>
            <InputLabel id='po-audit-label'>PO Audit</InputLabel>
            <Select
              labelId='po-audit-label'
              name='poAudit'
              value={fields.poAudit}
              onChange={handleChange}
              label='PO Audit'
              readOnly={!isEditing}
              disabled={!isEditing} // Disable dropdown when not editing
            >
              <MenuItem value='PO copy not available'>PO copy not available</MenuItem>
              <MenuItem value='The PO amount does not match with MCloud'>
                The PO amount does not match with MCloud
              </MenuItem>
              <MenuItem value='Audit completed'>Audit completed</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Invoicing Stage Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined' margin='normal'>
            <InputLabel id='invoicing-stage-label'>Invoicing Stage</InputLabel>
            <Select
              labelId='invoicing-stage-label'
              name='invoicingStage'
              value={fields.invoicingStage}
              onChange={handleChange}
              label='Invoicing Stage'
              readOnly={!isEditing}
              disabled={!isEditing}
            >
              <MenuItem value='Not invoiced'>Not invoiced</MenuItem>
              <MenuItem value='Part invoiced'>Part invoiced</MenuItem>
              <MenuItem value='Waiting for the shipping bill'>Waiting for the shipping bill</MenuItem>
              <MenuItem value='Complete invoiced'>Complete invoiced</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Project Expenses */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Project Expenses'
            value={projectExpenses}
            InputProps={{ readOnly: true }}
            margin='normal'
          />
        </Grid>

        {/* Gross Profit (%) */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Gross Profit (%)'
            value={grossProfitPercentage}
            InputProps={{ readOnly: true }}
            margin='normal'
          />
        </Grid>

        {/* Billed */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            name='billedDate'
            value={fields.billedDate}
            onChange={handleChange}
            margin='normal'
            InputProps={{ readOnly: !isEditing }}
          />
          <FormHelperText>{fields.billedDate ? '' : 'Please enter the billed date.'}</FormHelperText>
        </Grid>

        {/* Bill Paid */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='date'
            name='billPaidDate'
            value={fields.billPaidDate}
            onChange={handleChange}
            margin='normal'
            InputProps={{ readOnly: !isEditing }}
          />
          <FormHelperText>{fields.billPaidDate ? '' : 'Please enter the bill paid date.'}</FormHelperText>
        </Grid>

        {/* Commission Amount */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Commission Amount'
            value={commissionAmount}
            InputProps={{ readOnly: true }}
            margin='normal'
          />
        </Grid>

        {/* Shipping GP */}
        <Grid item xs={12} sm={6}>
          <TextField fullWidth InputProps={{ readOnly: !isEditing }} label='Shipping GP' margin='normal' />
          <FormHelperText>{'Please enter the Shipping GP.'}</FormHelperText>
        </Grid>

        {/* WO Audit */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined' margin='normal'>
            <InputLabel id='wo-audit-label'>WO Audit</InputLabel>
            <Select
              labelId='wo-audit-label'
              name='woAudit'
              value={fields.woAudit}
              onChange={handleChange}
              label='WO Audit'
              readOnly={!isEditing}
              disabled={!isEditing}
            >
              <MenuItem value='WO copy not available'>WO copy not available</MenuItem>
              <MenuItem value='The WO amount does not match with MCloud'>
                The WO amount does not match with MCloud
              </MenuItem>
              <MenuItem value='Audit completed'>Audit completed</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Audit Notes */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Audit Notes
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={fields.auditNotes}
              onChange={value => setFields({ ...fields, auditNotes: value })}
              readOnly={!isEditing}
              style={{ height: '200px', marginBottom: '40px' }} // Set the desired height
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: fields.auditNotes || 'No notes available.' }}
            />
          )}
        </Grid>

        {/* Payment and Commission */}
        <Grid item xs={12} sm={12}>
          <Typography variant='h6' gutterBottom>
            Payment and Commission
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={fields.paymentAndCommission}
              onChange={value => setFields({ ...fields, paymentAndCommission: value })}
              readOnly={!isEditing}
              style={{ height: '200px', marginBottom: '40px' }} // Set the desired height
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: fields.paymentAndCommission || 'No notes available.' }}
            />
          )}
        </Grid>
      </Grid>
    </Card>
  )
}

export default Accounting
