import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
     const {serviceId} = useParams();  
    return (
        <div>
            <div>
                <h2>Booking on this {serviceId}</h2>
            </div>
        </div>
    );
};

export default Booking;