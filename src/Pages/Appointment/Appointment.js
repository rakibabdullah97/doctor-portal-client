import React from 'react';
import Navigation from '../Sheared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointments from './AvailableAppointments/AvailableAppointmeants';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;