import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const handleEdit =(e)=>{
        e.preventDefault();
        const message = e.target.message.value;
        const ratings = e.target.ratings.value;

        fetch("http://localhost:5000/edit/${_id}",{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({message, ratings})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                toast.success('update Successfully')
                e.target.reset()
            }
        } 
        )
        
    }
    return (
        <div>
            
        </div>
    );
};

export default UpdateReview;