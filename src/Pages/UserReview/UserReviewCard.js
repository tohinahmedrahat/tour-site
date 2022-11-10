import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDele } from '@fortawesome/free-brands-svg-icons' 

const UserReviewCard = ({review}) => {
    const { img, userEmail, userName, userReview } = review
    return (
        <div>
            <li className="py-3">
                <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                        <img
                            className="h-8 w-8 rounded-full"
                            src={img}
                            alt="user img"
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {userName}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {userEmail}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {userReview}
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default UserReviewCard;