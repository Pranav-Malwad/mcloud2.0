import React, { useState } from 'react'
import dynamic from 'next/dynamic' // Import dynamically to avoid SSR issues
import { Box, Typography, Card, Button, Grid } from '@mui/material'
import 'react-quill/dist/quill.snow.css' // Import the styles for Quill

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Notes = () => {
  // Store both current and original notes
  const [notes, setNotes] = useState({
    accountExecNotes: 'hello world these are the notes',
    accountExecNotesSupplier: '',
    customerNotes: ''
  })

  const [originalNotes, setOriginalNotes] = useState({ ...notes }) // Original values to revert on cancel
  const [isEditing, setIsEditing] = useState(false) // State for tracking edit mode

  // Handle input change
  const handleChange = (field, value) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [field]: value
    }))
  }

  // Start editing and store current state as original
  const handleEdit = () => {
    setOriginalNotes({ ...notes }) // Save current notes as original
    setIsEditing(true)
  }

  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false)
    // You can add your API call to save the notes here if needed
  }

  // Cancel changes and restore original values
  const handleCancel = () => {
    setNotes(originalNotes) // Revert to the original notes
    setIsEditing(false)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Notes Section
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
        {/* Account Executive Notes */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Account Executive Notes
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={notes.accountExecNotes}
              onChange={value => handleChange('accountExecNotes', value)}
              style={{ height: '200px', marginBottom: '40px' }}
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: notes.accountExecNotes || 'No notes available.' }}
            />
          )}
        </Grid>

        {/* Account Executive Notes - To Supplier */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Account Executive Notes - To Supplier
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={notes.accountExecNotesSupplier}
              onChange={value => handleChange('accountExecNotesSupplier', value)}
              style={{ height: '200px', marginBottom: '40px' }}
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: notes.accountExecNotesSupplier || 'No notes available.' }}
            />
          )}
        </Grid>

        {/* Customer Notes */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Customer Notes
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={notes.customerNotes}
              onChange={value => handleChange('customerNotes', value)}
              readOnly={true} // This makes the field read-only
              style={{ height: '200px', marginBottom: '40px' }}
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: notes.customerNotes || 'No notes available.' }}
            />
          )}
        </Grid>
      </Grid>
    </Card>
  )
}

export default Notes
