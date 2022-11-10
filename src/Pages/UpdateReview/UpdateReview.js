import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const data = useLoaderData()
    const handleEdit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const review = e.target.review.value;
        fetch(`http://localhost:5000/reviewUpdate/${data._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userName:name,
                userReview:review})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('update Successfully')
                    e.target.reset()
                }
            }
            )

    }
    return (
        <div>
            <h1 className='text-xl my-4 capitalize font-semibold text-center'>update your review</h1>
            <form onSubmit={handleEdit} className="flex flex-col gap-4 my-4 text-left md:mx-8">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        name='name'
                        placeholder="your Name"
                        required={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your review"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        name='review'
                        required={true}
                        rows={4}
                    />
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateReview;