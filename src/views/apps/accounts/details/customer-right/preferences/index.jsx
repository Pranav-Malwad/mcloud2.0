'use client';
import React, { useState } from 'react';
import { Button, Checkbox, Grid, Typography, Card, FormControlLabel } from '@mui/material';

const Preferences = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nda: false,
    unsubscribe: false,
  });

  const handleEditToggle = () => setIsEditing(prev => !prev);

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  return (
    <Card className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <Typography variant='h5'>Legal and Preferences</Typography>
        <Button variant='contained' onClick={handleEditToggle} startIcon={<i className={isEditing ? 'ri-save-line' : 'ri-edit-box-line'} />} size='small'>
          {isEditing ? 'Save Changes' : 'Edit Preferences'}
        </Button>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.nda} name="nda" onChange={handleChange} disabled={!isEditing} />}
            label="Non-Disclosure Agreement"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.unsubscribe} name="unsubscribe" onChange={handleChange} disabled={!isEditing} />}
            label="Account Hold - Finance"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Preferences;
