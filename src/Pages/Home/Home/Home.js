import React from 'react';
import AboutTour from '../AboutTour/AboutTour';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import TourType from '../TourType/TourType';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutTour></AboutTour>
            <Service></Service>
            <TourType></TourType>
        </div>
    );
};

export default Home;