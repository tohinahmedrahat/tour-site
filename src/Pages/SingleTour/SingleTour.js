import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleTour = () => {
    const tour = useLoaderData()
    const {details,img,rating,price,name}=tour
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 md:px-10 py-4 bg-cyan-400'>
                <div>
                    <img src={img} alt="tour name" />
                </div>
                <div className='text-left'>
                    <h2 className='md:text-4xl capitalize font-bold text-slate-600 mb-5'>{name}</h2>
                    <p className='text-xl text-gray-700 mb-5'>{details}</p>
                    <h4 className='text-xl font-bold text-neutral-700'>Price: {price}</h4>
                    <h6 className='text-lg font-bold text-neutral-700'>Rating: {rating}</h6>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;