import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const RadioButton = ({ value, handleChange }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="hearEvent"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="social_media"
          control={<Radio size="small" />}
          label="Social media"
        />
        <FormControlLabel
          value="friends"
          control={<Radio size="small" />}
          label="Friends"
        />
        <FormControlLabel
          value="found_myself"
          control={<Radio size="small" />}
          label="Found myself"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
