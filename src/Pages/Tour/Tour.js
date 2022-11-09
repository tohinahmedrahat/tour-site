import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourCard from './TourCard';

const Tour = () => {
    const data = useLoaderData()

    return (
        <div>
            <h3 className='text-3xl font-bold text-green-400 my-3'>The Best Place You Can Visit</h3>
            <div className='grid md:grid-cols-3 gap-4 mx-auto md:w-3/4 mt-4'>
                {
                    data.map(tour => <TourCard key={tour._id} tour={tour}></TourCard>)
                }
            </div>
        </div>
    );
};

export default Tour;