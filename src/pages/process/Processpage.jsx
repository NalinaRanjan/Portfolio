import React, { useState } from 'react';
import './Processpage.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation, useNavigate } from 'react-router-dom';

//wizard
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Vitals from '../forms/Vitals';
import Initialassessments from '../forms/Initialassessments';
import Diagnosis from '../forms/Diagnosis';
import Treatment from '../forms/Treatment';
import Medication from '../forms/Medication';
import EndOfRecord from '../forms/Endofrecords';

const steps = [
    {
        label: 'Vitals',
    },
    {
        label: 'Initial assessment',
    },
    {
        label: 'Diagnosis',
    },
    {
        label: 'Treatment',
    },
    {
        label: 'Medication',
    },
    {
        label: 'Endofrecords',
    },
];


const Processpage = () => {
    const [formData, setFormData] = useState({
        heartRate: '',
        bloodPressure: '',
        // Add other form fields here
      });
    
    const { state } = useLocation();
    const userdata = state || {}; // Default to empty object if no state
    const navigate = useNavigate()
    const handlearrowclick = () => {
        navigate("/home")
    }


    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
        console.log(formData)
      };
    return (
        <div className='processpage'>
            <Sidebar />
            <div className='processpagecontainer'>
                <Navbar />
                <div className='processpage'>

                    <div className='icon' onClick={handlearrowclick} >
                        <ArrowBackIcon style={{ cursor: "pointer" }} />
                    </div>

                    <div className='icon'>
                        <span className="material-symbols-outlined usericon">
                            person
                        </span>
                    </div>
                    <div  >
                        <div className='name'>{userdata[0].name}</div>
                        <div className='txt'>UHID : {userdata[0].uhid}</div>
                    </div>
                    <div className='txt'>
                        <div>OP Number : {userdata[0].opno}</div>
                        <div>Referred by : DR. Jaykumar </div>
                    </div>
                    <div className='icon'>
                        <PhoneIcon />
                        <span className='num'>{userdata[0].phno}</span>
                    </div>
                    <div className='icon' >
                        <WhatsAppIcon />
                        <span className='num'> {userdata[0].whatsappno}</span>
                    </div>
                </div>
                <div className="processpagebody">
                    <div className="processpagebodyright">
                        <Box sx={{ maxWidth: 400 }}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel

                                        >
                                            {step.label}
                                        </StepLabel>
                                        <StepContent>
                                            <Typography>{step.description}</Typography>
                                            <Box sx={{ mb: 2 }}>
                                                {/* <div>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                    </Button>
                                                    <Button
                                                        disabled={index === 0}
                                                        onClick={handleBack}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                </div> */}
                                            </Box>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{ p: 3 }}>
                                    <Typography>All steps completed - you&apos;re finished</Typography>
                                    <Button variant="contained" className='formbtn' onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                        Reset
                                    </Button>
                                </Paper>
                            )}
                        </Box>
                    </div>
                    <div className="processpagebodyleft">
                       <div className='form-content'>{activeStep === 0 && <Vitals formData={formData} handleChange={handleChange}  />}
                        {activeStep === 1 && <Initialassessments />}
                        {activeStep === 2 && <Diagnosis />}
                        {activeStep === 3 && <Treatment />}
                        {activeStep === 4 && <Medication />}
                        {activeStep === 5 && <EndOfRecord />}
                        {activeStep === 6 && <EndOfRecord />}</div> 
                        <div>{activeStep !== 6 ? (
                           <Button variant="contained" className='formbtn' onClick={handleNext}>
                                Save
                            </Button>):(<Button variant="contained" className='formbtn' onClick={handlearrowclick}>
                                Save and exit
                            </Button>)
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Processpage
