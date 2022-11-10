import { Button, Label, Textarea, TextInput} from 'flowbite-react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../../Shared/UseAuth/UseAuth';

const AddReview = ({ tour }) => {
    const { user } = UseAuth()
    const { name } = tour
    const addReviews = (event)=>{
        event.preventDefault()
        const from = event.target;
        const userName = from.name.value;
        const userReview = from.review.value;
        const Review = {
            userName:userName,
            userEmail:user.email,
            serviceName:name,
            userReview:userReview,
            img:user.photoURL
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Review)
        };
        fetch("http://localhost:5000/review",requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data.acknowledged)
            if(data.acknowledged){
                toast("you review has added successfully")
            }
            from.reset()
        })
    }
    return (
        <div>
            <h3 className='text-xl my-3 font-semibold text-center capitalize'>add your review here</h3>
            <form onSubmit={addReviews} className="flex flex-col gap-4 text-left md:mx-3">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'
                        placeholder="enter your name"
                        required={true}
                    />
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            name='review'
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                    </div>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReview;