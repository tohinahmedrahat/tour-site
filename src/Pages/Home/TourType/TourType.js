import React from 'react';
import './TourType.css';

const TourType = () => {
    return (
        <div className='type-container'>
            <div className='bg'>
                <h3 className='text-xl py-5 text-white italic'>Find a Tour by</h3>
                <h1 className='text-3xl text-white font-bold pb-8'>TOUR TYPE</h1>
            <div className='md:flex justify-center items-center pb-36'>
                <div className='mr-4 text-xl border-solid border-inherit border-2 py-12 mb-2 px-10 rounded-[50%] hover:bg-slate-50'>
                    Walking
                </div>
                <div className='mr-4 text-xl border-solid border-inherit border-2 mb-2 py-12 px-10 rounded-[50%] hover:bg-slate-50'>
                    Hiking
                </div>
                <div className='mr-4 text-xl border-solid border-inherit border-2 mb-2 py-12 px-10 rounded-[50%] hover:bg-slate-50'>
                    Cruises
                </div>
                <div className='mr-4 text-xl border-solid border-inherit border-2 py-12 px-10 rounded-[50%] hover:bg-slate-50'>
                    Sports
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default TourType;