import { Card } from 'flowbite-react';
import React from 'react';

const Service = () => {
    return (
        <div>
            <h3 className='text-center text-lg font-semibold'>Tour Plans</h3>
            <div className='md:grid grid-cols-3 gap-4 md:mx-auto md:w-3/4'>
            <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            
        </div>
        </div>
    );
};

export default Service;