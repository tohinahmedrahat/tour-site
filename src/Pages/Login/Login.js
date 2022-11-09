import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../image/login.png'
import UseAuth from '../../Shared/UseAuth/UseAuth';

const Login = () => {
    const {singInWithGoogle,loginWithEmail,setError,setUser,error} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const loginWithGoogle = () => {
        singInWithGoogle()
        .then(result => {
            const user = result.user;
            setUser(user)
                setError("")
                navigate(from,{replace:true})
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)        })
    }
    const loginInWithEmail = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user)
            setError("")
            form.reset()
            navigate(from,{replace:true})

        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
            form.reset()
        })
    }
    return (
        <div >
            <div className='md:flex py-5'>
                <div className='w-full md:my-auto md:mr-5'>
                    <form onSubmit={loginInWithEmail} className="flex flex-col gap-4 md:w-3/4 md:mx-auto">
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
                            Login
                        </Button>
                    </form>
                    <Button className='mx-auto my-3' onClick={loginWithGoogle}>google</Button>
                    <p className='text-lg text-red-600 font-semibold'>{error}</p>
                    <p className='mt-5 text-lg text-amber-500 font-semibold'>Are You New <Link className='font-bold text-slate-800' to="/regester">Create Account</Link></p>
                </div>
                <div className='w-full'>
                    <img src={image} alt="login img" />
                </div>
            </div>
        </div>
    );
};

export default Login;