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
  Paper,
  Card,
  CardHeader
} from '@mui/material'

const SupplierDetailsTable = () => {
  // Sample shipment data
  const [shipments, setShipments] = useState([
    {
      line: '1',
      process: 'CNC Machining',
      material: 'Aluminum',
      finish: 'Anodized',
      qty: 100,
      sr: 'SR-001',
      lt: 'LT-01',
      leadTime: '5 days',
      notes: 'Urgent',
      specifications: 'Tolerance +/- 0.02',
      subtotal: 100,
      total: 120
    },
    {
      line: '2',
      process: '3D Printing',
      material: 'ABS Plastic',
      finish: 'Polished',
      qty: 50,
      sr: 'SR-002',
      lt: 'LT-02',
      leadTime: '3 days',
      notes: 'High precision required',
      specifications: 'Layer height 0.1mm',
      subtotal: 200,
      total: 230
    }
  ])

  const calculateSubtotal = () => shipments.reduce((acc, shipment) => acc + shipment.subtotal, 0)
  const calculateTotal = () => shipments.reduce((acc, shipment) => acc + shipment.total, 0)

  return (
    <Card>
      <CardHeader title='Supplier Details' />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Line</TableCell>
              <TableCell>Process</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Finish</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>SR</TableCell>
              <TableCell>LT</TableCell>
              <TableCell>Lead Time</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Specifications</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.map(shipment => (
              <TableRow key={shipment.line}>
                <TableCell>{shipment.line}</TableCell>
                <TableCell>{shipment.process}</TableCell>
                <TableCell>{shipment.material}</TableCell>
                <TableCell>{shipment.finish}</TableCell>
                <TableCell>{shipment.qty}</TableCell>
                <TableCell>{shipment.sr}</TableCell>
                <TableCell>{shipment.lt}</TableCell>
                <TableCell>{shipment.leadTime}</TableCell>
                <TableCell>{shipment.notes}</TableCell>
                <TableCell>{shipment.specifications}</TableCell>
                <TableCell>{shipment.subtotal}</TableCell>
                <TableCell>{shipment.total}</TableCell>
              </TableRow>
            ))}
            {/* Subtotal and Total rows */}
            <TableRow>
              <TableCell colSpan={10} align='right'>
                <strong>Subtotal</strong>
              </TableCell>
              <TableCell>{calculateSubtotal()}</TableCell>
              <TableCell>{calculateTotal()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={10} align='right'>
                <strong>Total</strong>
              </TableCell>
              <TableCell>{calculateSubtotal()}</TableCell>
              <TableCell>{calculateTotal()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default SupplierDetailsTable
