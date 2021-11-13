import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react'

const BookingModal = ({ openBooking, handleBookingClose, booking, date,setBookedSuccess }) => {
    const { name, time } = booking
    const { user } = useAuth()

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        console.log(newInfo)
        setBookingInfo(newInfo)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleBookingSubmit = e => {
        // collect data

        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to server
        fetch('http://localhost:5000/appointments',{
            method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify(appointment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                setBookedSuccess(true)
                handleBookingClose()
            }
        })
        e.preventDefault()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="time"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='phone'
                            defaultValue="Phone Number"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="date"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;

