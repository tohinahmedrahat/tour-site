import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const { name, details, img,_id } = tour
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                    <Link className='bg-green-400 text-white py-2 rounded' to={`/tour/${_id}`}>See More</Link>
                </Card>
            </div>
        </div>
    );
};

export default TourCard;