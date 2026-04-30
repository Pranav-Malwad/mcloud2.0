// React Imports
import { useState } from 'react';

// MUI Imports
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Third-party Imports
import { useForm, Controller } from 'react-hook-form';

// Vars
const initialData = {
  assignedTo: '',
  subject: '',
  dueDate: '',
  email: '',
  comments: '',
  relatedTo: '',
  status: '',
  priority: ''
};

const AddTasksDrawer = (props) => {
  // Props
  const { open, handleClose, userData, setData } = props;

  // States
  const [formData, setFormData] = useState(initialData);

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      assignedTo: '',
      subject: '',
      dueDate: '',
      email: '',
      comments: '',
      relatedTo: '',
      status: '',
      priority: ''
    }
  });

  const onSubmit = (data) => {
    const newTask = {
      id: (userData?.length && userData?.length + 1) || 1,
      ...formData
    };

    setData([...(userData ?? []), newTask]);
    handleClose();
    setFormData(initialData);
    resetForm();
  };

  const handleReset = () => {
    handleClose();
    setFormData(initialData);
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 700 } } }}
    >
      <div className="flex items-center justify-between pli-5 plb-4">
        <Typography variant="h5">Add New Task</Typography>
        <IconButton size="small" onClick={handleReset}>
          <i className="ri-close-line text-2xl" />
        </IconButton>
      </div>
      <Divider />
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
          <FormControl fullWidth>
            <InputLabel id="assigned-to-label">Assigned To</InputLabel>
            <Select
              fullWidth
              id="assigned-to"
              value={formData.assignedTo}
              onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
              label="Assigned To"
              labelId="assigned-to-label"
            >
              <MenuItem value="Justin Howard">Justin Howard</MenuItem>
              <MenuItem value="Rob Schmidt">Rob Schmidt</MenuItem>
              <MenuItem value="Ryan Costello">Ryan Costello</MenuItem>
              <MenuItem value="Lorena Acosta">Lorena Acosta</MenuItem>
              <MenuItem value="Garry Adams">Garry Adams</MenuItem>
              <MenuItem value="Christian Lemelin">Christian Lemelin</MenuItem>
              <MenuItem value="Stewart Aldrich">Stewart Aldrich</MenuItem>
              <MenuItem value="Dymond Mccoy">Dymond Mccoy</MenuItem>
              <MenuItem value="Leanna Persaud">Leanna Persaud</MenuItem>
              <MenuItem value="Pratik AE">Pratik AE</MenuItem>
              <MenuItem value="Sojwal AE">Sojwal AE</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="subject-label">Subject</InputLabel>
            <Select
              fullWidth
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              label="Subject"
              labelId="subject-label"
            >
              <MenuItem value="call">Call</MenuItem>
              <MenuItem value="send quote">Send Quote</MenuItem>
              <MenuItem value="send invoice">Send Invoice</MenuItem>
              <MenuItem value="quote follow up">Quote Follow Up</MenuItem>
              <MenuItem value="old project follow up">Old Project Follow Up</MenuItem>
              <MenuItem value="prospect (warm)">Prospect (Warm)</MenuItem>
              <MenuItem value="prospect (cold)">Prospect (Cold)</MenuItem>
              <MenuItem value="lost quote check in">Lost Quote Check In</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="voice email">Voice Email</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            label="Comments"
            fullWidth
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          />
          <TextField
            label="Related To"
            fullWidth
            value={formData.relatedTo}
            onChange={(e) => setFormData({ ...formData, relatedTo: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              fullWidth
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              label="Status"
              labelId="status-label"
            >
              <MenuItem value="Meeting scheduled">Meeting Scheduled</MenuItem>
              <MenuItem value="Not started">Not Started</MenuItem>
              <MenuItem value="In progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Waiting on someone else">Waiting on Someone Else</MenuItem>
              <MenuItem value="Deferred">Deferred</MenuItem>
              <MenuItem value="Scheduled">Scheduled</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              fullWidth
              id="priority"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              label="Priority"
              labelId="priority-label"
            >
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
          <div className="col-span-2 flex justify-end space-x-2">
            <Button variant="outlined" color="error" type="reset" onClick={() => handleReset()}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default AddTasksDrawer;
