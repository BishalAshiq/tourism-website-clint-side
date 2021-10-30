import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
   useEffect(()=>{
    fetch('/')
    .then(res=> res.json())
    .then(data => setServices(data));
   },[])


    return (
        <div>
            <h2>Booking Services</h2>
            <div>
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