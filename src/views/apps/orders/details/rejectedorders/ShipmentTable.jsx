'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardHeader
} from '@mui/material'

// Icon for the ellipsis

const ShipmentComponent = () => {
  // Sample shipment data
  const [shipments, setShipments] = useState([
    {
      orderId: '1001',
      shipmentId: 'S001',
      trackingNo: 'TRK123456',
      subtotal: 100,
      total: 120,
      shippingCost: 10,
      shippingCharges: 5
    },
    {
      orderId: '1002',
      shipmentId: 'S002',
      trackingNo: 'TRK654321',
      subtotal: 200,
      total: 230,
      shippingCost: 15,
      shippingCharges: 8
    }
  ])

  const [open, setOpen] = useState(false)
  const [currentShipment, setCurrentShipment] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  // Handle open/close of dialog
  const handleClickOpen = shipment => {
    setCurrentShipment(shipment)
    setOpen(true)
    setAnchorEl(null) // Close the menu when opening the dialog
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentShipment(null)
  }

  // Handle delete action
  const handleDelete = shipmentId => {
    setShipments(prevShipments => prevShipments.filter(shipment => shipment.shipmentId !== shipmentId))
    setAnchorEl(null) // Close the menu after deletion
  }

  // Handle update action
  const handleUpdate = () => {
    if (currentShipment) {
      setShipments(prevShipments =>
        prevShipments.map(shipment => (shipment.shipmentId === currentShipment.shipmentId ? currentShipment : shipment))
      )
      handleClose()
    }
  }

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setCurrentShipment(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle menu open
  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card className='p-4'>
      <Typography variant='h5' gutterBottom align='left' className='mb-8' color='primary'>
        Shipment Details
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Shipment ID</TableCell>
              <TableCell>Tracking No</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Shipping Cost</TableCell>
              <TableCell>Shipping Charges</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.map(shipment => (
              <TableRow key={shipment.shipmentId}>
                <TableCell>{shipment.orderId}</TableCell>
                <TableCell>{shipment.shipmentId}</TableCell>
                <TableCell>{shipment.trackingNo}</TableCell>
                <TableCell>{shipment.subtotal}</TableCell>
                <TableCell>{shipment.total}</TableCell>
                <TableCell>{shipment.shippingCost}</TableCell>
                <TableCell>{shipment.shippingCharges}</TableCell>
                <TableCell>
                  <IconButton onClick={handleMenuClick}>...</IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem
                      onClick={() => {
                        handleClickOpen(shipment)
                        handleMenuClose()
                      }}
                    >
                      Update
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleDelete(shipment.shipmentId)
                        handleMenuClose()
                      }}
                      style={{ color: 'red' }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for updating shipment */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Shipment</DialogTitle>
        <DialogContent>
          {currentShipment && (
            <>
              <TextField
                autoFocus
                margin='dense'
                name='trackingNo'
                label='Tracking No'
                type='text'
                fullWidth
                variant='outlined'
                value={currentShipment.trackingNo}
                onChange={handleInputChange}
              />
              <TextField
                margin='dense'
                name='subtotal'
                label='Subtotal'
                type='number'
                fullWidth
                variant='outlined'
                value={currentShipment.subtotal}
                onChange={handleInputChange}
              />
              <TextField
                margin='dense'
                name='total'
                label='Total'
                type='number'
                fullWidth
                variant='outlined'
                value={currentShipment.total}
                onChange={handleInputChange}
              />
              <TextField
                margin='dense'
                name='shippingCost'
                label='Shipping Cost'
                type='number'
                fullWidth
                variant='outlined'
                value={currentShipment.shippingCost}
                onChange={handleInputChange}
              />
              <TextField
                margin='dense'
                name='shippingCharges'
                label='Shipping Charges'
                type='number'
                fullWidth
                variant='outlined'
                value={currentShipment.shippingCharges}
                onChange={handleInputChange}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default ShipmentComponent
