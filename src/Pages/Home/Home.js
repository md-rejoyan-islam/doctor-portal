import React from 'react';
import Banner from './Banner.js/Banner';
import Connect from './Connect/Connect';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Terms from './Terms/Terms';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <Terms></Terms>
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
          <Connect></Connect>
        </div>
    );
};

export default Home;