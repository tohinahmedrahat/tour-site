import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UserReviewCard = ({review}) => {
    const { img, userEmail, userName, userReview,_id } = review
    // add delet review function
    const deletReview = id => {
        const agreed = window.confirm("are you want to delet")
        if(agreed){
            fetch(`https://tour-server.vercel.app/review/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast("your item delet succssfully")
                }
                console.log(data)
            })
        }
    }
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
                    <div className="md:flex-1 items-center text-base font-semibold text-gray-900 dark:text-white">
                        {userReview}
                    </div>
                    <div>
                        <Link to={`/update/${_id}`}>Update</Link>
                    </div>
                    <div>
                        <button onClick={()=> deletReview(_id)}>delete</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </li>
        </div>
    );
};

export default UserReviewCard;