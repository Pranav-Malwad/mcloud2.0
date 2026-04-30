import React, { useState } from 'react';
import { Box, Collapse, IconButton, Typography ,  } from '@mui/material';

const Pane = ({ name, children }) => {
  // State to manage the open/closed state of the pane
  const [open, setOpen] = useState(false);

  // Function to toggle the pane
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{  padding: '16px', marginBottom: '16px' }}>
      {/* Clickable area to toggle the pane */}
      <Box display="flex" alignItems="center" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
       
        <Typography variant="h6">{name} </Typography>
        <span className='ml-2'>
          {open ? "v"  : "v"}
        </span>
      </Box>
      
      {/* Collapsible pane content */}
      <Collapse in={open}>
        <Box sx={{ marginTop: '8px' }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Pane;
