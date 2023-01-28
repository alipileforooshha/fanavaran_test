import React from 'react'
import { useState } from 'react';

function Register() {
    const [state, setState] = useState({
        ssn : '',
        mobile : '',
        password : '',
        birth_date : '',
        address : '',
        postal_code : '',
        home_number : '',
    });
    
    return (
        <div className='d-flex flex-column justify-content-center'>
            <h2 className='text-primary'>Login Form</h2>
            <form className='d-flex flex-column justify-content-center flex-shrink' onSubmit={handleSubmit}>
                <div className='form-group flex-shrink'>
                    <label>کد ملی</label>
                    <input name='ssn' className='form-control' value={state.ssn} onChange={(e) => {
                        setState({
                            ...state,
                            ssn : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group flex-shrink'>
                    <label>شماره موبایل</label>
                    <input name='ssn' className='form-control' value={state.mobile} onChange={(e) => {
                        setState({
                            ...state,
                            mobile : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>رمز عبور</label>
                    <input name='password' className='form-control' value={state.password} onChange={(e) => {
                        setState({
                            ...state,
                            password : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>تاریخ تولد</label>
                    <input name='birth_date' className='form-control' value={state.birth_date} onChange={(e) => {
                        setState({
                            ...state,
                            birth_date : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>آدرس</label>
                    <input name='address' className='form-control' value={state.address} onChange={(e) => {
                        setState({
                            ...state,
                            address : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>کد پستی</label>
                    <input name='postal_code' className='form-control' value={state.postal_code} onChange={(e) => {
                        setState({
                            ...state,
                            postal_code : e.target.value
                        })
                    }}></input>
                </div>
                <div className='form-group'>
                    <label>تلفن ثابت</label>
                    <input name='home_number' className='form-control' value={state.home_number} onChange={(e) => {
                        setState({
                            ...state,
                            home_number : e.target.value
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

export default Register