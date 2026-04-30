'use client'
import React, { useContext, useState } from 'react'
import { FormControl, InputLabel, Select, Grid, Card, MenuItem, TextField, Button } from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import Quill styles

// Assuming useEdit is a custom context that provides edit state
const useEdit = () => {
  const [isEditing, setIsEditing] = useState(false)
  return { isEditing, setIsEditing }
}

const LogACall = () => {
  const { isEditing, setIsEditing } = useEdit()
  const [formData, setFormData] = useState({
    subject: '',
    comment: '',
    name: '',
    relatedTo: ''
  })

  // Handle form data changes
  const handleChange = field => e => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  // Handle comment changes for ReactQuill
  const handleCommentChange = value => {
    setFormData({ ...formData, comment: value })
  }

  const handleSave = () => {
    // Save formData logic
    setIsEditing(false)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
      {/* Assigned To */}

      <Grid container spacing={2}>
        {/* Related To (Non-editable) */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin='normal'
            label='Related To'
            value='yuga@gmail.com'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        {/* Subject */}
        <Grid item xs={6}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='subject-label'>Subject</InputLabel>
            <Select
              label='Subject'
              labelId='subject-label'
              id='subject'
              value={formData.subject}
              onChange={handleChange('subject')}
            >
              <MenuItem value='Email'>Email</MenuItem>
              <MenuItem value='Call'>Call</MenuItem>
              <MenuItem value='Send Letter'>Send Letter</MenuItem>
              <MenuItem value='Send Quote'>Send Quote</MenuItem>
              <MenuItem value='Other '>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Name (Non-editable) */}
        <Grid item xs={6}>
          <TextField fullWidth margin='normal' label='Name' value='Mayuri' InputProps={{ readOnly: true }} />
        </Grid>
        {/* Comment */}
        <Grid item xs={6}>
          <InputLabel id='comment'>Comment</InputLabel>

          <div style={{ marginTop: '16px 0' }}>
            <ReactQuill value={formData.comment} onChange={handleCommentChange} theme='snow' />
          </div>
        </Grid>

        <Grid item xs={12} className='flex justify-end'>
          <Button variant='contained' color='primary' onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default LogACall
