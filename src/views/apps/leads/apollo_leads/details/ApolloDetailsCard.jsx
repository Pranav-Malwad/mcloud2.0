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
import Divider from '@mui/material/Divider'
// Component Imports

const ApolloDetailsCard = () => {
  // State to hold case details
  const [caseDetails, setCaseDetails] = useState({
    assignedTo: 'Justin Howard',
    industry: 'Automotive',
    fileName: 'google.com',
    url: 'google.com/tensenct.com',
    zip: '455123',
    stage:"New",
    Date:"23/02/2024"
  })

  const [isEditing, setIsEditing] = useState(false)

  // Handle edit/save toggle
  const handleEditToggle = () => {
    setIsEditing(prev => !prev)
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCaseDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Dropdown options for specific fields
  const assignedToOptions = [
    "Justin Howard",
    "Rob Schmidt",
    "Ryan Costello",
    "Lorena Acosta",
    "Garry Adams",
    "Christian Lemelin",
    "Stewart Aldrich",
    "Dymond Mccoy",
    "Leanna Persaud",
    "Pratik AE",
    "Sojwal AE"
  ]
  const stageOptions = ['New' , 'Lead Export Initiated' , 'Lead Export Completed' , 'MCloud Import Initiated' , 'MCloud Import Completed' , 'Statistic Genrated/Done']
  const industryOptions = ['Automotive', 'Aerospace and Defense', 'Medical', "Consumer Products", "Energy", "Oil and Gas", "Other"]

  // Determine if the field should have a dropdown
  const renderDropdown = (field, options) => (
    <Select
      name={field}
      value={caseDetails[field]}
      onChange={handleInputChange}
      fullWidth
      variant="outlined"
      size="small"
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
        title="Lead Export Details"
        action={
          <Button variant="contained" color={isEditing ? 'success' : 'primary'} onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        }
      />
      <CardContent>
        <div className="flex flex-col gap-4">
          {Object.keys(caseDetails).map((detail, index) => (
            <div key={index}>
              <Typography color="text.primary" className="font-medium">
                <strong>{detail.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
              </Typography>
              {isEditing ? (
                // Conditionally render dropdowns for certain fields
                ['assignedTo', 'stage',  'industry'].includes(detail) ? (
                  renderDropdown(
                    detail,
                    {
                      assignedTo: assignedToOptions,
                      industry: industryOptions,
                      stage:stageOptions
                    }[detail]
                  )
                ) : (
                  <TextField
                    name={detail}
                    value={caseDetails[detail]}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                )
              ) : (
                <Typography color="text.secondary">{caseDetails[detail]}</Typography>
              )}
              {!isEditing && index < Object.keys(caseDetails).length - 1 && (
                <Divider sx={{ my: 3 }} />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ApolloDetailsCard
