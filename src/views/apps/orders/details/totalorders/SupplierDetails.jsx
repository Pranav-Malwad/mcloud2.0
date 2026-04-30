'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Typography, Button , InputLabel, Select,CardHeader, MenuItem, FormControl, Grid, Card } from '@mui/material'
import 'react-quill/dist/quill.snow.css'
import SupplierDetailsTable from './SupplierDetailsTable'
import { useEdit } from '@/contexts/EditContext'

// Dynamically import ReactQuill to prevent SSR issues in Next.js
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const SupplierDetails = () => {
  const [supplierState, setSupplierState] = useState({
    paymentTerms: 'Net 30',
    supplierNotes: 'Supplier Notes Goes here.'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [originalState, setOriginalState] = useState({ ...supplierState })

  const handleEdit = () => {
    setOriginalState({ ...supplierState })
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log(supplierState)
  }

  const handleCancel = () => {
    setSupplierState({ ...originalState })
    setIsEditing(false)
  }



  // Function to handle state updates
  const handleStateChange = (key, value) => {
    setSupplierState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  // Function to strip HTML tags from supplier notes
  const stripHtmlTags = html => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    return tempDiv.innerText || tempDiv.textContent
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
      <Grid container spacing={3}>
        {/* Payment Terms Dropdown */}
        <Grid item xs={12}>
          <FormControl fullWidth margin='normal'>
            <InputLabel>Payment Terms</InputLabel>
            <Select
              value={supplierState.paymentTerms}
              label='Payment Terms'
              onChange={e => handleStateChange('paymentTerms', e.target.value)}
              disabled={!isEditing} // Enable only if editing is allowed
            >
              <MenuItem value='Net 30'>Net 30</MenuItem>
              <MenuItem value='Net 60'>Net 60</MenuItem>
              <MenuItem value='Net 90'>Net 90</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Supplier Notes with React Quill */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Supplier Notes - To Account Executive
          </Typography>
          <Typography
            variant='body1'
            style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
            dangerouslySetInnerHTML={{ __html: supplierState.supplierNotes || 'No notes available.' }} // Render raw HTML
          />
        </Grid>

        {/* Supplier Details Table */}
        <Grid item xs={12}>
          <SupplierDetailsTable />
        </Grid>
      </Grid>
    </Card>
  )
}

export default SupplierDetails
