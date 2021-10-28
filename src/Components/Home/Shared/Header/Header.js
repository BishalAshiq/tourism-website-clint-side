import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About US</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;