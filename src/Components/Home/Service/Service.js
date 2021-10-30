import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,img, name, description} = service;
    return (
        <div>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/booking/${id}`}> <button>Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;