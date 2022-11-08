import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/login.png'

const Regester = () => {
    return (
        <div >
            <div className='md:flex py-5'>
                <div className='w-full md:my-auto md:mr-5'>
                    <form className="flex flex-col gap-4 md:w-3/4 md:mx-auto">
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
                                required={true}
                            />
                        </div>

                        <Button type="submit">
                            Regester
                        </Button>
                    </form>
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