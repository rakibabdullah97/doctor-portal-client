import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
 
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New <br /> Smile Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{my:3, fontSize: 13, color: 'grey', fontWeight: 300 }}>
                            Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt='' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;