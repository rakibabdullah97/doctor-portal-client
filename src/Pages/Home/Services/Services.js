import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../SingleService/Service';
import fluoride from '../img/fluoride.png'
import cavity from '../img/cavity.png'
import whitening from '../img/whitening.png'


const services = [
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
        img: fluoride,
    },
    {
        name: 'cavity Treatment',
        description: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
        img: cavity,
    },
    {
        name: 'whitening Treatment',
        description: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
        img: whitening,
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 500, color: 'success.main',m:2}} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight: 600,m:5}} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
