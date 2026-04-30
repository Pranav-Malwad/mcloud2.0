'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  CardHeader,
  Divider,
  IconButton
} from '@mui/material'

import { useEdit } from '@/contexts/EditContext' // Adjust the path based on your project structure

// Dynamically import ReactQuill to prevent SSR issues in Next.js
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const ShippingInformation = () => {
  const stripHtmlTags = html => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    return tempDiv.innerText || tempDiv.textContent
  }

  const [shippingInfo, setShippingInfo] = useState({
    shipmentType: 'Direct',
    shippingMethod: 'UPS Express Saver',
    shippingAccount: 'UP-123',
    trackingNumber: '2165498465419854984568498',
    doNotShipDirect: false,
    supplierShipDate: '10/09/2024',
    customerShipDate: '10/09/2024',
    actualShipDate: '10/09/2024',
    deliveryDate: '10/09/2024',
    multipleShipping: false,
    shippingNotes: ''
  })

  const [isEditing, setIsEditing] = useState(false)
  const [originalState, setOriginalState] = useState({ ...shippingInfo })

  const handleEdit = () => {
    setOriginalState({ ...shippingInfo })
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log(shippingInfo)
  }

  const handleCancel = () => {
    setShippingInfo({ ...originalState })
    setIsEditing(false)
  }


  const handleInputChange = (key, value) => {
    setShippingInfo(prevState => ({ ...prevState, [key]: value }))
  }

 

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
       <Grid container alignItems='center' justifyContent='space-between' sx={{ padding: 2 }}>
        <Grid item xs>
          <Typography variant='h5' gutterBottom color='primary'>
            Shipping Information
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
        {/* Shipment Type */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel>Shipment Type</InputLabel>
            <Select
            label="Shipment Type"
              value={shippingInfo.shipmentType}
              onChange={e => handleInputChange('shipmentType', e.target.value)}
              disabled={!isEditing}
            >
              <MenuItem value='Direct'>Direct</MenuItem>
              <MenuItem value='Indirect'>Indirect</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Shipping Method */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel>Shipping Method</InputLabel>
            <Select
            label="Shipping Method"
              value={shippingInfo.shippingMethod}
              onChange={e => handleInputChange('shippingMethod', e.target.value)}
              disabled={!isEditing}
            >
              <MenuItem value='UPS Express Saver'>UPS Express Saver</MenuItem>
              {/* Add more shipping methods as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Shipping Account */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Shipping Account'
            value={shippingInfo.shippingAccount}
            onChange={e => handleInputChange('shippingAccount', e.target.value)}
            disabled={!isEditing}
            variant='outlined'
          />
        </Grid>

        {/* Customer Tracking# */}
        <Grid item xs={12}>
          <Typography variant='body1'>
            Customer Tracking#:
            <a
              href={`https://www.ups.com/track?tracknum=${shippingInfo.trackingNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginLeft: '5px', color: 'blue' }}
            >
              {shippingInfo.trackingNumber}
            </a>
          </Typography>
        </Grid>

        {/* Do Not Ship Direct to Customer Checkbox */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={shippingInfo.doNotShipDirect}
                onChange={e => handleInputChange('doNotShipDirect', e.target.checked)}
                disabled={!isEditing}
                color='primary'
              />
            }
            label='Do Not Ship Direct to Customer'
          />
        </Grid>

        {/* Ship Dates */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Supplier Ship Date'
            type='date'
            value={shippingInfo.supplierShipDate}
            onChange={e => handleInputChange('supplierShipDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            disabled={!isEditing}
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Customer Ship Date'
            type='date'
            value={shippingInfo.customerShipDate}
            onChange={e => handleInputChange('customerShipDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            disabled={!isEditing}
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Actual Ship Date'
            type='date'
            value={shippingInfo.actualShipDate}
            onChange={e => handleInputChange('actualShipDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            disabled={!isEditing}
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Delivery Date'
            type='date'
            value={shippingInfo.deliveryDate}
            onChange={e => handleInputChange('deliveryDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            disabled={!isEditing}
            variant='outlined'
          />
        </Grid>

        {/* Multiple Shipping Checkbox */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={shippingInfo.multipleShipping}
                onChange={e => handleInputChange('multipleShipping', e.target.checked)}
                disabled={!isEditing}
                color='primary'
              />
            }
            label='Multiple Shipping'
          />
        </Grid>

        {/* Shipping Notes */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Shipping Notes
          </Typography>
          {isEditing ? (
            <ReactQuill
              theme='snow'
              value={shippingInfo.shippingNotes}
              onChange={value => handleInputChange('shippingNotes', value)}
              style={{ height: '200px', marginBottom: '40px' }}
              readOnly={!isEditing} // Make it read-only if not in edit mode
            />
          ) : (
            <Typography
              variant='body1'
              style={{ whiteSpace: 'pre-wrap', height: '200px', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: shippingInfo.shippingNotes || 'No notes available.' }} // Render raw HTML
            />
          )}
        </Grid>

        {/* Edit and Save Buttons */}
      </Grid>
    </Card>
  )
}

export default ShippingInformation
