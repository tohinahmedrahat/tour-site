import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.png"

const Header = () => {
    return (
        <Navbar className='bg-slate-600'
            fluid={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="dream tour Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Dream Tour
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link className='text-white' to="/">Home</Link>
                <Link className='text-white' to="/login">Login</Link>
                <Link className='text-white' to="/regester">Regester</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;