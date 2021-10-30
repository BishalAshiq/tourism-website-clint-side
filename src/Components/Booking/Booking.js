import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
     const {serviceId} = useParams(); 
     const [service, setService] = useState({});
     
     useEffect(()=>{
         fetch(`https://limitless-reaches-36634.herokuapp.com/${serviceId}`)
         .then(res=>res.json())
         .then(data => setService(data))
     },[])
     
    return (
        <div>
            <div className='booking-service'>
                <img src={service.img} alt=''/>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Booking;