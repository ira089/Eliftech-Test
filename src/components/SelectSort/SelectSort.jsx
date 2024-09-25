import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectSort = ({ handleChange, sort }) => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 140, marginBottom: 5 }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="eventDate">Event date</MenuItem>
          <MenuItem value="organizer">Organizer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectSort;
