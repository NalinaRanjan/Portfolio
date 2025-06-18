// EndOfRecord.js
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const EndOfRecord = ({ prevStep, values, handleSubmit }) => {
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs={12}>
        <h2>Review & Submit</h2>
      </Grid>
      <Grid item xs={12}>
        <Typography>Temperature: </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Blood Pressure: </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Heart Rate:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Symptoms:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Physical Exam: </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Diagnosis:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Treatment Plan: </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Medications:</Typography>
      </Grid>
     
    </Grid>
  );
};

export default EndOfRecord;
