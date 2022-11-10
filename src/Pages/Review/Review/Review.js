import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = ({ tour }) => {
    const { name } = tour
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review?name=${name}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [name])

    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>TOUR REVIEWS</h1>
            <div className="md:mx-3">
                <Card>
                    <div className="flex items-center justify-between">
                        <h5 className="text-xl capitalize font-bold leading-none text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                            }
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Review;