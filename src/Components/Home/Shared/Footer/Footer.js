import React from 'react';
import './Footer.css'
import logo1 from '../../../../images/logos/logo-footer1.webp'
import logo2 from '../../../../images/logos/logo-footer2.png'
import logo3 from '../../../../images/logos/logo-footer3.jpg'


const Footer = () => {
    return (
        <div className='Footer-container'>
            <h6>Hotel.com is the world leader in online travel and related services.</h6>
         <div>
            <img src={logo1} alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo3} alt=""/>
         </div>
        </div>
    );
};

export default Footer;