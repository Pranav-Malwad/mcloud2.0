// components/PaymentType.js

import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';

const PaymentType = () => {
  const [formState, setFormState] = useState({
    paymentType: '',
    poNumber: '',
    file: null,
    service: '',
    accountNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      file: event.target.files[0],
    }));
  };

  const { paymentType, poNumber, service, accountNumber } = formState;

  return (
    <Box sx={{  mt: 5 }}>
      <Typography variant="h6" gutterBottom mb={4}>
        Select Payment Type
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="payment-type-label">Payment Type</InputLabel>
        <Select
          labelId="payment-type-label"
          name="paymentType"
          label="Payment Type"
          value={paymentType}
          onChange={handleChange}
        >
          <MenuItem value="ups">UPS Account</MenuItem>
          <MenuItem value="fedex">FedEx Account</MenuItem>
          <MenuItem value="prepay">Prepay Using Printform</MenuItem>
        </Select>
      </FormControl>

      {paymentType === 'prepay' && (
        <Grid container spacing={2} className='flex items-center'>
          <Grid item xs={10}>
            <TextField
              label="PO Number"
              fullWidth
              sx={{ mb: 3 }}
              name="poNumber"
              value={poNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              className='h-12'
              component="label"
              sx={{ mb: 3 }}
              fullWidth
            >
              Attach File
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
        </Grid>
      )}

      {(paymentType === 'ups' || paymentType === 'fedex') && (
        <>
        <Grid container spacing={2} className='flex items-center'>
        <Grid item xs={5}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="service-label">Service</InputLabel>
            <Select
              labelId="service-label"
              name="service"
              label="Service"
              value={service}
              onChange={handleChange}
            >
              <MenuItem value="ground">Ground</MenuItem>
              <MenuItem value="2-day">2-Day</MenuItem>
              <MenuItem value="overnight">Overnight</MenuItem>
            </Select>
          </FormControl>
          </Grid>

          <Grid item xs={7}>
          <TextField
            label="Account Number"
            fullWidth
            sx={{ mb: 3 }}
            name="accountNumber"
            value={accountNumber}
            onChange={handleChange}
          />
          </Grid>
          </Grid>
        </>

      )}
    </Box>
  );
};

export default PaymentType;
