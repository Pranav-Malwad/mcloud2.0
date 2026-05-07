'use client';
import React, { useState } from 'react';
import { Button, Checkbox, TextField, Grid, Typography, Card, FormControlLabel } from '@mui/material';

const ShippingAndBilling = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    sameAsBillingAddress: false,
    shippingAddress1: '',
    shippingAddress2: '',
    shippingAddress3: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    sameAsShippingAddress: false,
    billingAddress1: 'Changed On Order Page',
    billingAddress2: '',
    billingAddress3: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
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
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-4'>
          <Typography variant='h5'>Shipping Info</Typography>
          <FormControlLabel
            control={<Checkbox size="small" checked={formData.sameAsBillingAddress} name="sameAsBillingAddress" onChange={handleChange} disabled={!isEditing} />}
            label={<Typography variant="body2" color="text.secondary">Same as Billing Address</Typography>}
            className="m-0"
          />
        </div>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Information'}
        </Button>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping Address 1" name="shippingAddress1" value={formData.shippingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping Address 2" name="shippingAddress2" value={formData.shippingAddress2} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping Address 3" name="shippingAddress3" value={formData.shippingAddress3} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping City" name="shippingCity" value={formData.shippingCity} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping State" name="shippingState" value={formData.shippingState} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping Zip" name="shippingZip" value={formData.shippingZip} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Shipping Country" name="shippingCountry" value={formData.shippingCountry} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
      </Grid>

      <div className="flex items-center gap-4 mt-8 mb-6">
        <Typography variant="h5">Billing Info</Typography>
        <FormControlLabel
          control={<Checkbox size="small" checked={formData.sameAsShippingAddress} name="sameAsShippingAddress" onChange={handleChange} disabled={!isEditing} />}
          label={<Typography variant="body2" color="text.secondary">Same as Shipping Address</Typography>}
          className="m-0"
        />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing Address 1" name="billingAddress1" value={formData.billingAddress1} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing Address 2" name="billingAddress2" value={formData.billingAddress2} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing Address 3" name="billingAddress3" value={formData.billingAddress3} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing City" name="billingCity" value={formData.billingCity} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing State" name="billingState" value={formData.billingState} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing Zip" name="billingZip" value={formData.billingZip} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField size="small" InputLabelProps={{ shrink: true }} label="Billing Country" name="billingCountry" value={formData.billingCountry} onChange={handleChange} disabled={!isEditing} fullWidth />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ShippingAndBilling;
