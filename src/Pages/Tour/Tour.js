import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourCard from './TourCard';

const Tour = () => {
    const data = useLoaderData()
    
    return (
        <div className='grid md:grid-cols-2 gap-4 mx-auto md:w-3/4 mt-4'>
            {
                data.map(tour => <TourCard key={tour.id} tour={tour}></TourCard>)
            }
        </div>
    );
};

export default Tour;