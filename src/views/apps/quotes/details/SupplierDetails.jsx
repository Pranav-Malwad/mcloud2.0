import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Typography, InputLabel, Card, Select, Button, MenuItem, FormControl, Grid } from '@mui/material'
import 'react-quill/dist/quill.snow.css'

// Dynamically import ReactQuill to prevent SSR issues in Next.js
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const SupplierDetails = () => {
  const [formState, setFormState] = useState({
    supplier: 'Sharang Kapsikar',
    paymentTerms: 'NET 30',
    supplierNotes: ''
  })

  const { supplier, paymentTerms, supplierNotes } = formState

  // Store original state for cancel functionality
  const [originalState, setOriginalState] = useState({ ...formState })

  // Sample data for suppliers and payment terms
  const suppliersList = [
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
  ]

  const paymentTermsList = [
    'NET 7',
    'NET 10',
    'NET 15',
    'NET 30',
    'NET 45',
    'NET 60',
    'NET 75',
    'NET 90',
    'Other specify in (notes)'
  ]

  // Function to handle form field changes
  const handleFieldChange = (field, value) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const [isEditing, setIsEditing] = useState(false)

  // Enable edit mode and store the current state for cancellation
  const handleEdit = () => {
    setOriginalState({ ...formState }) // Store current form state
    setIsEditing(true)
  }

  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false)
    console.log(formState)
  }

  // Cancel changes and revert to original state
  const handleCancel = () => {
    setFormState({ ...originalState }) // Revert form state to original
    setIsEditing(false)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Supplier Details
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
      <Grid container spacing={4}>
        {/* Supplier Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Supplier</InputLabel>
            <Select
              value={supplier}
              onChange={e => handleFieldChange('supplier', e.target.value)}
              label='Supplier'
              disabled={!isEditing} // Disable if not editable
            >
              {suppliersList.map(supplierOption => (
                <MenuItem key={supplierOption} value={supplierOption}>
                  {supplierOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Payment Terms Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Payment Terms</InputLabel>
            <Select
              value={paymentTerms}
              onChange={e => handleFieldChange('paymentTerms', e.target.value)}
              label='Payment Terms'
              disabled={!isEditing} // Disable if not editable
            >
              {paymentTermsList.map(termsOption => (
                <MenuItem key={termsOption} value={termsOption}>
                  {termsOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Supplier Notes with React Quill */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Supplier Notes
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={supplierNotes}
              onChange={value => handleFieldChange('supplierNotes', value)}
              style={{ height: '200px', marginBottom: '40px' }}
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: supplierNotes || 'No notes available.' }} // Render raw HTML
            />
          )}
        </Grid>
      </Grid>
    </Card>
  )
}

export default SupplierDetails
