import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm/CheckOutForm';


const stripePromise = loadStripe('pk_test_51Jvt3wFOyizKZIQ88z8bQlJkoO0NItcP2UB1389A1UFamWRmb9OoMoKezmfpDzGH118KqF4gyeEsRuzukwnaXyRN00PqxInqgy')

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointments] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointmentId])

    return (
        <div>
            <h2>pay for:{appointment.patientName} for {appointment.serviceName} </h2>
            <h4>pay: $ {appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;