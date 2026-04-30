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
import { Divider } from '@mui/material'
// Component Imports
import Link from '@components/Link'

const CaseDetailsCard = () => {
  // State to hold case details
  const [caseDetails, setCaseDetails] = useState({
    caseOwner: 'John Doe',
    status: 'New',
    caseOrigin: 'Web',
    priority: 'High',
    description: 'Issue with product delivery',
    relatedTo: 'Order 102146',
    type: 'Problem',
    reason: 'Delay in shipping',
    subject: 'Shipping Delay',
    internalComments: 'Customer contacted support for delay resolution.'
  })

  const [isEditing, setIsEditing] = useState(false)

  // Handle edit/save toggle
  const handleEditToggle = () => {
    setIsEditing(prev => !prev)
  }

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setCaseDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Dropdown options for specific fields
  const caseOwnerOptions = [
    'Justin Howard',
    'Rob Schmidt',
    'Ryan Costello',
    'Lorena Acosta',
    ' Garry Adams',
    'Christian Lemelin',
    ' Stewart Aldrich',
    ' Dymond Mccoy',
    '   Leanna Persaud',
    ' Pratik AE',
    'Sojwal AE'
  ]
  const statusOptions = ['New', 'In Progress', 'Closed']
  const caseOriginOptions = ['Phone', 'Email', 'Web']
  const priorityOptions = ['Low', 'Medium', 'High', 'Urgent']
  const typeOptions = ['Question', 'Problem', 'Feature Request']
  const subjectOptions = ['Billing', 'Technical', 'Other']

  // Determine if the field should have a dropdown
  const renderDropdown = (field, options) => (
    <Select
      name={field}
      value={caseDetails[field]}
      onChange={handleInputChange}
      fullWidth
      variant='outlined'
      size='small'
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )

  return (
    <Card>
      <CardHeader
        title='Case Details'
        action={
          <Button variant='contained' color={isEditing ? 'success' : 'primary'} onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        }
      />
      <CardContent>
        <div className='flex flex-col gap-3'>
          {Object.keys(caseDetails).map((detail, index) => (
            <div key={index}>
              <Typography color='text.primary' className='font-medium'>
                <strong>{detail.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
              </Typography>
              {isEditing ? (
                // Conditionally render dropdowns for certain fields
                ['caseOwner', 'status', 'caseOrigin', 'priority', 'type', 'reason'].includes(detail) ? (
                  renderDropdown(
                    detail,
                    {
                      caseOwner: caseOwnerOptions,
                      status: statusOptions,
                      caseOrigin: caseOriginOptions,
                      priority: priorityOptions,
                      type: typeOptions,
                      reason: subjectOptions
                    }[detail]
                  )
                ) : (
                  <TextField
                    name={detail}
                    value={caseDetails[detail]}
                    onChange={handleInputChange}
                    fullWidth
                    variant='outlined'
                    size='small'
                  />
                )
              ) : (
                <Typography color='text.secondary'>{caseDetails[detail]}</Typography>
              )}
              {/* Add a Divider after each detail except for the last one */}
              {!isEditing && index < Object.keys(caseDetails).length - 1 && <Divider sx={{ my: 3 }} />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CaseDetailsCard
