import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h1>Hotel.com</h1>
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About US</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;