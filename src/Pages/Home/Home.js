import React from 'react';
import Navigation from '../Sheared/Navigation/Navigation';
import AppointmentBanner from './ApointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;