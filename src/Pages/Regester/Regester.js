import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/login.png'
import UseAuth from '../../Shared/UseAuth/UseAuth';

const Regester = () => {
    const { setUser, singInWithGoogle, setError, error,createUserWithEmail,updateUser } = UseAuth()
    const loginInGoogle = () => {
        singInWithGoogle()
            .then(result => {
                const user = result.user
                setUser(user)
                setError("")
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)

            })
    }
    const singInWithEmail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name)
        createUserWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user
            setUser(user)
            setError("")
            form.reset()
            updateUserProfile(name,photoUrl)
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
            form.reset()
        })
    }
    const updateUserProfile = (name,photoUrl) => {
        const profile = {
            displayName:name,
            photoURL:photoUrl
        }
        updateUser(profile)
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div >
            <div className='md:flex py-5'>
                <div className='w-full md:my-auto md:mr-5'>
                    <form onSubmit={singInWithEmail} className="flex flex-col gap-4 md:w-3/4 md:mx-auto">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Your Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                name='name'
                                placeholder="enter your name"
                                
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="photo"
                                    value="Your Photo Url"
                                />
                            </div>
                            <TextInput
                                id="photo"
                                type="url"
                                name='photourl'
                                placeholder="enter your Photo url"
                                
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                name='email'
                                placeholder="enter your email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                name='password'
                                required={true}
                            />
                        </div>

                        <Button type="submit">
                            Regester
                        </Button>
                    </form>
                    <Button className='mx-auto my-3' onClick={loginInGoogle}>Google</Button>
                    <p className='text-red-700 text-lg font-semibold'>{error}</p>
                    <p className='mt-5 text-lg text-amber-500 font-semibold'>Already Have Account <Link className='font-bold text-slate-800' to="/login">Login</Link></p>
                </div>
                <div className='w-full'>
                    <img src={image} alt="login img" />
                </div>
            </div>
        </div>
    );
};

export default Regester;