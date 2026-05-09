import React, { useState } from 'react'
import { Card, Grid, Typography, Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Chip, FormControlLabel, Switch } from '@mui/material'

const ComplianceTab = ({ customerData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    itar: false,
    industries: [],
    processes: [],
  })

  const industryOptions = ['Aerospace', 'Automotive', 'Consumer Products', 'Energy', 'Medical']
  const processOptions = ['CNC Machining', 'Injection Molding', '3D Printing', 'Sheet Metal']

  const handleEditToggle = () => setIsEditing(prev => !prev)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  return (
    <Card className='p-5'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Compliance</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small" disabled={!isEditing}>
            <InputLabel>Industries</InputLabel>
            <Select multiple name="industries" value={formData.industries} onChange={handleChange} input={<OutlinedInput label="Industries" />} renderValue={(selected) => <div className="flex flex-wrap gap-1">{selected.map((value) => <Chip key={value} label={value} size="small" />)}</div>}>
              {industryOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small" disabled={!isEditing}>
            <InputLabel>Processes</InputLabel>
            <Select multiple name="processes" value={formData.processes} onChange={handleChange} input={<OutlinedInput label="Processes" />} renderValue={(selected) => <div className="flex flex-wrap gap-1">{selected.map((value) => <Chip key={value} label={value} size="small" />)}</div>}>
              {processOptions.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ComplianceTab
