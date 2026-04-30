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

const TaskDetailsCard = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    assignedTo: 'Justin Howard',
    subject: 'Call',
    dueDate: '01/24/2002',
    email: 'ganesh@gmail.com',
    comments: 'No comments at all',
    relatedTo: 'Quote',
    status: 'Not Started',
    priority: 'Normal'
  })

  const [relatedId, setRelatedId] = useState('20245') // State for related ID
  const [isEditing, setIsEditing] = useState(false)

  // Handle edit/save toggle
  const handleEditToggle = () => {
    setIsEditing(prev => !prev)
  }

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle related ID changes
  const handleRelatedIdChange = e => {
    setRelatedId(e.target.value)
  }

  // Dropdown options for specific fields
  const assignedToOptions = [
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

  const subjectOptions = [
    'Call',
    'Send Quote',
    'Send Invoice',
    'Quote Follow Up',
    'Old Project Follow Up',
    'Prospect (Warm)',
    'Prospect (Cold)',
    'Lost Quote Check In',
    'Email',
    'Voice Email',
    'Other'
  ]

  const relatedToOptions = ['Quote', 'Order', 'Lead', 'Contact', 'Account']
  const statusOptions = [
    'Meeting Scheduled',
    'Not Started',
    'In Progress',
    'Completed',
    'Waiting on Someone Else',
    'Deferred',
    'Scheduled'
  ]

  const priorityOptions = ['Normal', 'High', 'Low']

  return (
    <Card>
      <CardHeader
        title='Task Details'
        action={
          <Button variant='contained' color={isEditing ? 'success' : 'primary'} onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        }
      />
      <CardContent>
        <div className='flex flex-col gap-3'>
          {/* Assigned To Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Assigned To:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='assignedTo'
                value={formData.assignedTo}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              >
                {assignedToOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.assignedTo}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Subject Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Subject:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              >
                {subjectOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.subject}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Due Date Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Due Date:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                name='dueDate'
                value={formData.dueDate}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              />
            ) : (
              <Typography color='text.secondary'>{formData.dueDate}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Email Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Email:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              />
            ) : (
              <Typography color='text.secondary'>{formData.email}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Comments Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Comments:</strong>
            </Typography>
            {isEditing ? (
              <TextField
                name='comments'
                value={formData.comments}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              />
            ) : (
              <Typography color='text.secondary'>{formData.comments}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Related To Field */}
          <div className='flex items-end '>
            <div>
              <Typography color='text.primary' className='font-medium'>
                <strong>Related To:</strong>
              </Typography>
              {isEditing ? (
                <div className='flex items-center gap-3'>
                  <Select
                    name='relatedTo'
                    value={formData.relatedTo}
                    onChange={handleInputChange}
                    variant='outlined'
                    size='small'
                    fullWidth
                  >
                    {relatedToOptions.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <TextField
                    name='relatedValue'
                    value={relatedId}
                    onChange={handleRelatedIdChange}
                    variant='outlined'
                    size='small'
                    placeholder={`Enter ${formData.relatedTo} ID`}
                    fullWidth
                  />
                </div>
              ) : (
                <Typography color='text.secondary'>{formData.relatedTo}</Typography>
              )}
            </div>
            <div className='mx-24'>{!isEditing && <Typography color='text.secondary'> <b>ID:</b> {relatedId}</Typography>}</div>
          </div>

          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Status Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Status:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='status'
                value={formData.status}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              >
                {statusOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.status}</Typography>
            )}
          </div>
          {!isEditing && <Divider sx={{ my: 3 }} />}

          {/* Priority Field */}
          <div>
            <Typography color='text.primary' className='font-medium'>
              <strong>Priority:</strong>
            </Typography>
            {isEditing ? (
              <Select
                name='priority'
                value={formData.priority}
                onChange={handleInputChange}
                fullWidth
                variant='outlined'
                size='small'
              >
                {priorityOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography color='text.secondary'>{formData.priority}</Typography>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TaskDetailsCard
