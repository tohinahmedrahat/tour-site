import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [tours, setTour] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tours")
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])
    return (
        <div>
            <h3 className='text-center text-2xl font-semibold my-4'>Tour Plans</h3>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    tours.map(tour => <ServiceCard tour={tour} key={tour._id}></ServiceCard>)
                }
            </div>
            <Button className='mx-auto mt-5 mb-5' outline={true} gradientMonochrome="cyan">
                <Link to="/tour">See More</Link>
            </Button>

        </div>
    );
};

export default Service;