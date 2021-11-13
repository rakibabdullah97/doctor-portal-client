import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-120px' }}
                        src={Doctor} alt='' />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent:'flex-start',
                alignItems: 'center',
                textAlign:'left'}}>
                    <Box>
                        <Typography sx={{mb:5}} variant='h6' style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{my:5}} variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Make An Appointment Today
                        </Typography>
                        <Button
                        style={{ backgroundColor: '#5CE7ED' }}
                         variant='contained'>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;