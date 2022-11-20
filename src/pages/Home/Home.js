import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeApointment from './MakeApointment/MakeApointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';



const Home = () => {
    return (
        <div className='container mx-auto'> 
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeApointment></MakeApointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;