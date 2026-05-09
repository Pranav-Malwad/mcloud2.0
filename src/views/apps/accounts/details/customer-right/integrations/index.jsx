import React, { useState } from 'react'
import { Card, Grid, Typography, Button, TextField } from '@mui/material'

const IntegrationsTab = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    pif_sdr: '',
    apollo_id: ''
  })

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Integrations</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}><TextField fullWidth size='small' label='PIF SDR' name='pif_sdr' value={formData.pif_sdr} onChange={handleChange} disabled={!isEditing} /></Grid>
        <Grid item xs={12} sm={6}><TextField fullWidth size='small' label='Apollo ID' name='apollo_id' value={formData.apollo_id} onChange={handleChange} disabled={!isEditing} /></Grid>
      </Grid>
    </Card>
  )
}

export default IntegrationsTab
