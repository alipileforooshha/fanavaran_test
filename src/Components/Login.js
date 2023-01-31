import React, { useEffect, useState } from 'react'
import {PropTypes} from 'prop-types';
import axios from 'axios';
import { async } from 'q';
import { useNavigate } from 'react-router-dom';

function Login({setToken}) {
    
    const navigate = useNavigate();
    const [state, setState] = useState({
        ssn : '',
        password : ''
    });

    const postData = async () => {
        console.log('sending',state)
        return await axios.post('http://127.0.0.1:8000/api/login',{
            ...state
        }).then( res => {
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            localStorage.setItem('token',res.data.user.token)
            navigate('/dashboard');            
        }).catch(res => {
            console.log('wwwwwwwww')
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }
    return (
        <div className='d-flex flex-column justify-content-center'>
            <h2 className='text-primary'>Login Form</h2>
            <form className='d-flex flex-column justify-content-center flex-shrink' onSubmit={handleSubmit}>
                <div className='form-group flex-shrink'>
                    <label>ssn</label>
                    <input name='ssn' className='form-control' value={state.ssn} onChange={(e) => {
                        setState({
                            ...state,
                            ssn : e.target.value
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

Login.propTypes = {
    setToken : PropTypes.func.isRequired
}

export default Login
