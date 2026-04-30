'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

import ShippingAndBilling from './ShippingAndBilling'
import AddressBook from './AddressBookCard'

const AddressBilling = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ShippingAndBilling></ShippingAndBilling>
        {/* <AddressBook></AddressBook> */}
      </Grid>
    </Grid>
  )
}

export default AddressBilling
