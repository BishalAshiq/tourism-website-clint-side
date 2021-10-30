import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
   const {signInUsingGoogle} = useAuth();
    return (
        <div className='login'>
            <h2>Login</h2>
            <form className='my-5'>
            <input type="email" placeholder="Email"/> <br/>
            <input type="password" placeholder="Password"/> <br/>
            <button className='mt-2'>Login</button>
            </form>
            <button onClick={signInUsingGoogle}>Sign In with Google</button> <br/>
            <Link to="/register">Create a New Account ?</Link>
        </div>
    );
};

export default Login;