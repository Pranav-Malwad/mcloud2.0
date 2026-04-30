'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Divider, Grid } from '@mui/material' // Import Grid for layout
import Alert from '@mui/material/Alert'
import { useEdit } from '@/contexts/EditContext'
const CaseDetailsCard = () => {
  // State to hold all fields
  const [formData, setFormData] = useState({
    sdr: 'Harshita KM',
    accountExecutive: 'Ryan Costello',
    projectManager: 'Jim ONeal',
    productionType: 'Manufacturing',
    stage: 'Manual',
    contact: 'John Doe',
    nextFollowUpDate: '2024-10-15',
    reason: 'Product Inquiry',
    itar: 'No',
    leadSource: 'Facebook',
    paymentTerms: 'NET 30 ',
    closedDate: '2024-11-10',
    createdDate: '2024-09-05'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [originalState, setOriginalState] = useState({ ...formData })
  const [errors, setErrors] = useState({})

  // Handle input change for form fields
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  const handleEdit = () => {
    setOriginalState({ ...formData }) // Store current form state
    setIsEditing(true)
  }

  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false)
    console.log(formData)
  }

  // Cancel changes and revert to original state
  const handleCancel = () => {
    setFormData({ ...originalState }) // Revert form state to original
    setIsEditing(false)
  }

  // Dropdown options for specific fields
  const sdrOptions = ['Ummadi Sravani', 'Harshita KM', 'Saloni Verma', 'Shalmoli Chavan']
  const accountExecutiveOptions = [
    'Justin Howard',
    'Rob Schmidt',
    'Ryan Costello',
    'Lorena Acosta',
    'Garry Adams',
    'Christian Lemelin',
    'Stewart Aldrich',
    'Dymond Mccoy',
    'Leanna Persaud',
    'Pratik AE',
    'Sojwal AE'
  ]
  const projectManagerOptions = ['Jim ONeal', 'Julie Thomas', 'Matt Wendel ', 'Lindsey Tundidor', 'Pratik PM']
  const leadTypeOptions = ['New', 'Existing']
  const productionTypeOptions = ['Manufacturing', 'Prototype']
  const stageOptions = [
    'Manual',
    'Request for Quote',
    'Quote',
    'Follow Up/Review',
    'Positive Buying Sign',
    'Negotiation',
    'Purchase Order',
    'Closed Lost'
  ]
  const leadSourceOptions = [
    'Facebook',
    'Twitter',
    'Instagram',
    'Email',
    'Linkedin',
    'Referral',
    'Trade Show',
    'Other',
    'Research',
    'Google/Search Engines'
  ]
  const paymentTermsOptions = [
    'NET 7',
    'NET 10',
    'NET 15',
    'NET 30 ',
    'NET 45',
    'NET 60',
    'NET 75',
    'NET 90',
    'Other (Specify in notes)'
  ]

  return (
    <Card>
      <Grid container alignItems='center' justifyContent='space-between'>
        <CardHeader title='Order Details' />
        <Grid item>
          {isEditing ? (
            <>
              <Button variant='contained' color='primary' onClick={handleSave}>
                Save
              </Button>
              <Button variant='outlined' color='secondary' onClick={handleCancel} sx={{ ml: 2, mr: 6 }}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant='contained' color='primary' onClick={handleEdit} sx={{ mr: 6 }}>
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>SDR:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='sdr'
                value={formData.sdr}
                onChange={e => handleInputChange('sdr', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {sdrOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.sdr}</Typography>
            )}
          </Grid>

          {/* Row 2 */}
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Account Executive:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='accountExecutive'
                value={formData.accountExecutive}
                onChange={e => handleInputChange('accountExecutive', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {accountExecutiveOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.accountExecutive}</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Project Manager:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='projectManager'
                value={formData.projectManager}
                onChange={e => handleInputChange('projectManager', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {projectManagerOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.projectManager}</Typography>
            )}
          </Grid>

          {/* Row 4 */}

          {/* Row 6 */}
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Production Type:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='productionType'
                value={formData.productionType}
                onChange={e => handleInputChange('productionType', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {productionTypeOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.productionType}</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Stage:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='stage'
                value={formData.stage}
                onChange={e => handleInputChange('stage', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {stageOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.stage}</Typography>
            )}
          </Grid>

          {/* Row 7 */}

          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Contact:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                name='contact'
                value={formData.contact}
                onChange={e => handleInputChange('contact', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
                error={!!errors.contact}
                helperText={errors.contact}
              />
            ) : (
              <Typography color='text.secondary'>{formData.contact}</Typography>
            )}
          </Grid>

          {/* Row 8 */}
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Next Follow-Up Date:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                type='date'
                name='nextFollowUpDate'
                value={formData.nextFollowUpDate}
                onChange={e => handleInputChange('nextFollowUpDate', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
                error={!!errors.nextFollowUpDate}
                helperText={errors.nextFollowUpDate}
              />
            ) : (
              <Typography color='text.secondary'>{formData.nextFollowUpDate}</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Reason:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                name='reason'
                value={formData.reason}
                onChange={e => handleInputChange('reason', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
                error={!!errors.reason}
                helperText={errors.reason}
              />
            ) : (
              <Typography color='text.secondary'>{formData.reason}</Typography>
            )}
          </Grid>

          {/* Row 9 */}

          {/* Row 10 */}
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Payment Terms:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='paymentTerms'
                value={formData.paymentTerms}
                onChange={e => handleInputChange('paymentTerms', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
              >
                {paymentTermsOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.paymentTerms}</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography color='text.primary'>
              <strong>Closed Date:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                type='date'
                name='closedDate'
                value={formData.closedDate}
                onChange={e => handleInputChange('closedDate', e.target.value)}
                fullWidth
                variant='outlined'
                size='small'
                error={!!errors.closedDate}
                helperText={errors.closedDate}
              />
            ) : (
              <Typography color='text.secondary'>{formData.closedDate}</Typography>
            )}
          </Grid>
        </Grid>

        {Object.keys(errors).length > 0 && (
          <Alert severity='error' sx={{ mt: 2 }}>
            Please correct the highlighted fields.
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

export default CaseDetailsCard
