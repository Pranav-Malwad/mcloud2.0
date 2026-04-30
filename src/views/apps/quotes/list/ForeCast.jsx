import React from 'react';
import {  Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const dummyData = [
  { existing: 10, new: 5, total: 15, workOrder: 7, underProduction: 3, shipped: 2, rejected: 1, completed: 10, invoiced: 8, paid: 5 },
  { existing: 8, new: 6, total: 14, workOrder: 5, underProduction: 4, shipped: 3, rejected: 0, completed: 9, invoiced: 7, paid: 6 },
];

const Forecast = () => {
  return (
    <>
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Current Month - Till Date
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Existing</TableCell>
                  <TableCell>New</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Work Order</TableCell>
                  <TableCell>Under Production</TableCell>
                  <TableCell>Shipped</TableCell>
                  <TableCell>Rejected</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell>Invoiced</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.existing}</TableCell>
                    <TableCell>{row.new}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.workOrder}</TableCell>
                    <TableCell>{row.underProduction}</TableCell>
                    <TableCell>{row.shipped}</TableCell>
                    <TableCell>{row.rejected}</TableCell>
                    <TableCell>{row.completed}</TableCell>
                    <TableCell>{row.invoiced}</TableCell>
                    <TableCell>{row.paid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            All Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Existing</TableCell>
                  <TableCell>New</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Work Order</TableCell>
                  <TableCell>Under Production</TableCell>
                  <TableCell>Shipped</TableCell>
                  <TableCell>Rejected</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell>Invoiced</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.existing}</TableCell>
                    <TableCell>{row.new}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.workOrder}</TableCell>
                    <TableCell>{row.underProduction}</TableCell>
                    <TableCell>{row.shipped}</TableCell>
                    <TableCell>{row.rejected}</TableCell>
                    <TableCell>{row.completed}</TableCell>
                    <TableCell>{row.invoiced}</TableCell>
                    <TableCell>{row.paid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default Forecast;
