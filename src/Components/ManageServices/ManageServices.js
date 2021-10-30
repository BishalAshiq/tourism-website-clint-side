import React, { useEffect, useState } from 'react';


const ManageServices = () => {
    const[services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        if(data.deletedCount){
            alert('Deleted')
            const remaining = services.filter(service => service._id !==id);
            setServices(remaining);
        }
        })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service =><div key={service._id} className='my-5'>
                    <h3>{service.name}</h3>
                    <img className='w-50' src={service.img} alt=""/>
                    <h5>{service.price}</h5>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;