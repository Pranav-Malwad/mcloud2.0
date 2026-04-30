'use client'
import React, { useState } from 'react'
import { TextField, Button, Typography, Grid, Box, Card } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

// Email validation schema
const EmailSchema = Yup.object().shape({
  to: Yup.string().email('Invalid email').required('Required'),
  cc: Yup.string().email('Invalid email').nullable(),
  bcc: Yup.string().email('Invalid email').nullable(),
  subject: Yup.string().nullable()
})

const Email = () => {
  const initialValues = {
    to: '',
    cc: '',
    bcc: '',
    subject: ''
  }

  const handleSubmit = values => {
    console.log('Email Data: ', values)
  }

  return (
    <Card className='p-4' elevation={3} sx={{ borderRadius: 2 }}>
     <Box sx={{ marginTop: '16px' }}>

      <Formik initialValues={initialValues}  validationSchema={EmailSchema} onSubmit={handleSubmit} >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              {/* From Field (Non-editable) */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label='From'
                  value='crm@paasport.com'
                  InputProps={{
                    readOnly: true
                  }}
                  variant='outlined'
                />
              </Grid>

              {/* To Field (Required) */}
              <Grid item xs={6}>
                <Field
                  name='to'
                  as={TextField}
                  fullWidth
                  label='* To'
                  variant='outlined'
                  error={touched.to && Boolean(errors.to)}
                  helperText={touched.to && errors.to}
                />
              </Grid>

              {/* CC Field */}
              <Grid item xs={6}>
                <Field
                  name='cc'
                  as={TextField}
                  fullWidth
                  label='CC'
                  variant='outlined'
                  error={touched.cc && Boolean(errors.cc)}
                  helperText={touched.cc && errors.cc}
                />
              </Grid>

              {/* BCC Field */}
              <Grid item xs={6}>
                <Field
                  name='bcc'
                  as={TextField}
                  fullWidth
                  label='BCC'
                  variant='outlined'
                  error={touched.bcc && Boolean(errors.bcc)}
                  helperText={touched.bcc && errors.bcc}
                />
              </Grid>

              {/* Subject Field */}
              <Grid item xs={6}>
                <Field
                  name='subject'
                  as={TextField}
                  fullWidth
                  label='Subject'
                  variant='outlined'
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                />
              </Grid>

              <Grid item xs={12} className='flex justify-end'>
                <Button type='submit' variant='contained' color='primary' >
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      </Box>
    </Card>
  )
}

export default Email
