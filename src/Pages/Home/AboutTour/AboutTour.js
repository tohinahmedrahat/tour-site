import React from 'react';
import sideImg from '../../../image/side.jpg'
const AboutTour = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-green-400 my-5 capitalize'>importance of tour</h2>
            <div className='md:flex md:mx-5'>
                <div className='md:mr-5'>
                    <img src={sideImg} alt="" />
                </div>
                <div className='text-left'>
                    <p className='text-gray-500'>Tourism is vital for the success of many economies around the world. There are several benefits of tourism on host destinations. Tourism boosts the revenue of the economy, creates thousands of jobs, develops the infrastructures of a country, and plants a sense of cultural exchange between foreigners and citizens.Tourism creates a cultural exchange between tourists and local citizens. Exhibitions, conferences, and events usually attract foreigners. Organizing authorities usually gain profits from registration fees, gift sales, exhibition spaces, and sales of media copyright. Furthermore, foreign tourists bring diversity and cultural enrichment to the hosting country.
                    Tourism is a great opportunity for foreigners to learn about a new culture, but it also creates many opportunities for local citizens. It allows young entrepreneurs to establish new products and services that would not be sustainable on the local population of residents alone. Moreover, residents experience the benefits that come with tourism occurring in their own country.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutTour;