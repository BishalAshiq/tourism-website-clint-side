import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <form>
                <input type="email" placeholder="Email"/> <br/>
                <input type="name" placeholder="First Name"/><br/>
                <input type="password" placeholder="Password"/> <br/>
                <input id='sub' type="submit" placeholder="Submit"/>
            </form> <br/>
            <Link to="/login">Already have an Account ?</Link>
        </div>
    );
};

export default Register;