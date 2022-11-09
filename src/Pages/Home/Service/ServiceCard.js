import { Card } from 'flowbite-react';
import React from 'react';

const ServiceCard = ({ tour }) => {
    const { name, img, details } = tour
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={img}>
                    <h5 className="text-2xl font-bold capitalize tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                        {details.slice(0, 100)}
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default ServiceCard;