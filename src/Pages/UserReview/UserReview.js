import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Shared/UseAuth/UseAuth';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {
    const {user} = UseAuth()
    const [review,setReview] = useState([])
    useEffect(()=>{
        fetch(`https://tour-server.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[user.email])

    return (
        <div>
            <h1 className='text-xl my-3 font-bold capitalize'>{user.displayName}</h1>
            <div className="md:mx-3">
                <Card>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                review.map(review =><UserReviewCard key={review._id} review={review}></UserReviewCard>)
                            }
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UserReview;