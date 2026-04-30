'use client';
import React, { useState } from 'react';
import { Button, Checkbox, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Card } from '@mui/material';

const preferences = () => {
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
      {/* Legal and Preferences */}
      <Typography variant="h6" gutterBottom >Legal and Preferences</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Checkbox checked={formData.nda} name="nda" onChange={handleChange} disabled={!isEditing} /> Non-Disclosure Agreement
        </Grid>
        <Grid item xs={12}>
          <Checkbox checked={formData.unsubscribe} name="unsubscribe" onChange={handleChange} disabled={!isEditing} /> Account Hold - Finance
        </Grid>
      </Grid>
      
      <div className='mt-4'>
        <Button variant="contained" onClick={handleEditToggle}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </div>
      </Card>
    
    
  );
};

export default preferences;
