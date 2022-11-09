import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [tours,setTour] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/tours")
        .then(res => res.json())
        .then(data => setTour(data))
    },[])
    return (
        <div>
            <h3 className='text-center text-lg font-semibold my-4'>Tour Plans</h3>
            {
                tours.map(tour =><ServiceCard tour={tour} key={tour._id}></ServiceCard>)
            }
        </div>
    );
};

export default Service;