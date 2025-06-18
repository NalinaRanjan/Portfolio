// Medication.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Medication = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs={12}>
        <h2>Medication</h2>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Medications"
          variant="outlined"
          name="medications"
          value=""
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#962067', // color when focused
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#962067', // color for label when focused
            },
          }}
        />
      </Grid>
      
    </Grid>
  );
};

export default Medication;
