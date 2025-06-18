// Vitals.js
import React from 'react';
import { TextField, Button, Grid,} from '@mui/material';

const Vitals = ({ formData, handleChange }) => {
  return (
    <div className="form">
<Grid  container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs={12}>
        <h2>Vitals</h2>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Temperature"
        //   variant="outlined"
          name="temperature"
          value={formData.tempereture}
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
          label="Blood Pressure"
          variant="outlined"
          name="bloodPressure"
          value={formData.bloodpressure}
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
          label="Heart Rate"
          variant="outlined"
          name="heartRate"
          value={formData.heartrate}
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
      {/* <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={nextStep}>
          Save
        </Button>
      </Grid> */}
    </Grid>
    </div>
    
  );
};

export default Vitals;
