import * as React from 'react';
import { Grid } from '@mui/material';
import Calander from '../../Sheared/Calander/Calander';
import Appointments from '../Appointment/Appointments';


const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Calander
              date={date}
              setDate={setDate}
              ></Calander>
            </Grid>
            <Grid item xs={12} md={8}>
               <Appointments
               date={date}
               ></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;
