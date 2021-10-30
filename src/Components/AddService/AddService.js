import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        axios.post('http://localhost:5000/services', data)
        .then(res => {
           if(res.data.insertedId){
               alert('added successfully');
               reset();
           }
        })
    }
    return (
        <div className='add-service'>
            <h2>Add a  Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="name" {...register("name")} />
            <input placeholder="image url" {...register("img")} />
            <textarea placeholder="description" {...register("description")} />
            <input placeholder="price" type="number" {...register("price")} />
            <input type="submit" />
        </form>
        </div>
    );
};

export default AddService;