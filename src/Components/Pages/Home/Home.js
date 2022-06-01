import React from 'react';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import MainBanner from './MainBanner';
import MakeAppointment from './MakeAppointment';
import Review from './Review';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <MainBanner/>
           <Info/>
           <Services/>
           <Review/>
           <MakeAppointment/>
           <Testimonials/>
           <Contact/>
        </div>
    );
};

export default Home;