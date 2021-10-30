import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='header-container'>
            <div>
                <h1>Hotel.com</h1>
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About US</Link>
                <Link to="/login">Login</Link>
                <span className='text-white'>{user.displayName} </span>
                {user?.email && <button className='btn btn-info' onClick={logOut}>Log Out</button>}
                <Link to="/admin"><button className='btn btn-dark'>Admin</button></Link>
            </div>
        </div>
    );
};

export default Header;