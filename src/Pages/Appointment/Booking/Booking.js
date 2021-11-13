import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking , date, setBookedSuccess}) => {
  const { name, time, space } = booking
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' gutterBottom components='div'>
            {name}
          </Typography>
          <Typography variant='h5' gutterBottom components='div'>
            {time}
          </Typography>
          <Typography variant='caption' gutterBottom display='block' >
            {space} Spaces Available
          </Typography>
          <Button onClick={handleBookingOpen} variant='contained'>Book Appointment</Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookedSuccess={setBookedSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;