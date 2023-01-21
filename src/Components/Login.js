import React, { useState } from 'react'
import {PropTypes} from 'prop-types';
import axios from 'axios';

function Login({setToken}) {
    
    const [state, setState] = useState({
        username : '',
        password : ''
    });

    const postData = () => {
        return axios.post('http://127.0.0.1/api/login',{
            username : state.username,
            password : state.password
        }).then( res => {
            console.log(res.data);
            return res.data;
        })
    }

    const handleSubmit = () => {
        postData();
    }
    return (
        <div className='d-flex flex-column justify-content-center'>
            <h2 className='text-primary'>Login Form</h2>
            <form className='d-flex flex-column justify-content-center flex-shrink' onSubmit={handleSubmit}>
                <div className='form-group flex-shrink'>
                    <label>Username</label>
                    <input name='username' className='form-control' value={state.username} onChange={(e) => {
                        setState({
                            ...state,
                            username : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input name='password' className='form-control' value={state.password} onChange={(e) => {
                        setState({
                            ...state,
                            password : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mt-2'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

Login.PropTypes = {
    setToken : PropTypes.func.isRequired
}

export default Login
