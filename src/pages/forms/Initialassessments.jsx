// InitialAssessments.js
import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const InitialAssessments = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs={12}>
        <h2>Initial Assessment</h2>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Symptoms"
          variant="outlined"
          name="symptoms"
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
      <Grid item xs={12}>
        <TextField
          label="Physical Exam"
          variant="outlined"
          name="physicalExam"
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

export default InitialAssessments;
