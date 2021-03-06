import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
   useEffect(()=>{
    fetch('https://limitless-reaches-36634.herokuapp.com/services')
    .then(res=> res.json())
    .then(data => setServices(data));
   },[])


    return (
        <div>
            <h2 className='my-5 fw-bolder'>Booking Services</h2>
            <div className='service-container'>
                {
                    services.map(service =><Service
                    key={service.id}
                    service = {service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;