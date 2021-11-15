import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        price: 45,
        space: 10,
    },
    {
        id: 2,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        space: 10,
        price: 56,
    },
    {
        id: 3,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        space: 10,
        price: 85,
    },
    {
        id: 4,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        space: 10,
        price: 35,
    },
    {
        id: 5,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        space: 10,
        price: 45,
    },
    {
        id: 6,
        name: 'teeth Orthodonics',
        time: '8.00 AM - 09.00AM',
        space: 10,
        price: 95,
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookedSuccess, setBookedSuccess] = useState(false)

    return (
        <Container>
            <Typography variant
                ='h4' sx={{ color: 'info.main', mb: 2 }} >Available Appointment {date.toDateString()}</Typography>
            {bookedSuccess && <Alert severity="success">Appointment Booked Successfully </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setBookedSuccess={setBookedSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;