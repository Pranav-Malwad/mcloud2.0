'use client';
import React, { useState } from 'react';
import { Button, Checkbox, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Card } from '@mui/material';

const ShippingAndBilling = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit/save mode
  const [formData, setFormData] = useState({
    industry: 'Consumer Products',
    accountExecutive: 'Pratik AE',
    projectManager: 'Pratik PM',
    sdr: '',
    hearAboutUs: '',
    sameAsBillingAddress: false,
    shippingAddress1: '',
    shippingAddress2: '',
    shippingAddress3: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    nda: false,
    unsubscribe: false,
    receiveInfo: false,
    account: false,
    leadSource: '',
    process: '',
    leadSourceDetail: '',
    email: '',
    phone: '(989) 898-8899',
    rating: '',
    reason: '',
    contactPassword: '',
    sameAsShippingAddress: false,
    billingAddress1: 'Changed On Order Page',
    billingAddress2: '',
    billingAddress3: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    contactStatus: 'Active',
    itar: '',
    manufacturing: '',
    notes: ''
  });

  const handleEditToggle = () => setIsEditing(prev => !prev);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <Card className='p-4'>

      {/* Shipping Info */}
      <Typography variant="h6" gutterBottom >Shipping Info</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Checkbox checked={formData.sameAsBillingAddress} name="sameAsBillingAddress" onChange={handleChange} disabled={!isEditing} /> Same as Billing Address
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping Address 1" name="shippingAddress1" value={formData.shippingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping Address 2" name="shippingAddress2" value={formData.shippingAddress2} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping Address 3" name="shippingAddress3" value={formData.shippingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping City" name="shippingCity" value={formData.shippingCity} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping State" name="shippingState" value={formData.shippingState} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping Zip" name="shippingZip" value={formData.shippingZip} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Shipping Country" name="shippingCountry" value={formData.shippingCountry} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
      </Grid>

       {/* Billing Info */}
       <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Billing Info</Typography>
       <Grid container spacing={4}>
        <Grid item xs={12}>
          <Checkbox checked={formData.sameAsBillingAddress} name="sameAsBillingAddress" onChange={handleChange} disabled={!isEditing} /> Same as Shipping Address
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing Address 1" name="billingAddress1" value={formData.billingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing Address 2" name="billingAddress2" value={formData.billingAddress2} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing Address 3" name="billingAddress3" value={formData.billingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing City" name="billingCity" value={formData.billingCity} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing State" name="shippingState" value={formData.billingState} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing Zip" name="billingZip" value={formData.billingZip} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Billing Country" name="billingCountry" value={formData.billingCountry} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
      </Grid>
      <div className='mt-4'>
          <Button variant='contained' onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        </div>
    </Card>
  );
};

export default ShippingAndBilling;
