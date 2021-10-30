import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id,img, name, price, description} = service;
    return (
        <div className='service'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h6>{price}</h6>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}> <button className='rounded-3 btn btn-info fw-bold mb-4'>Book {name.toUpperCase()}</button></Link>
        </div>
    );
};

export default Service;