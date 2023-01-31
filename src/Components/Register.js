import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';
import Input from './Input';
import { Navigate, useNavigate } from 'react-router';
function Register({setToken}) {
    const [state, setState] = useState({
        ssn : null,
        mobile : null,
        password : null,
        birth_year : null,
        birth_month : null,
        birth_day : null,
        address : null,
        postal_code : null,
        home_number : null,
    });
    
    const validationSchema = yup.object().shape({
        ssn : yup.number().typeError('کد ملی باید عددی باشد').test('len', 'باید بین 5 تا 10 حرف باشد', val => val.toString().length >= 5 && val.toString().length <= 10)
        .required('باید حتما پر شده باشد'),
        mobile : yup.number().typeError('موبایل باید عددی باشد').test('len','موبایل باید دقیقا 10 حرف باشد', val => val.toString().length === 10).
        required('فیلد موبایل باید پر شده باشد'),
        password : yup.string().test('len', 'رمز عبور باید بین 8 تا 15 حرف باشد', val => val.toString().length >= 4 && val.toString().length <= 15).required()
    });

    const {register, handleSubmit, formState:{errors}, watch, unregister} = useForm({
        resolver : yupResolver(validationSchema),
        reValidateMode : 'onChange',
        mode : 'onChange'
    });
    const navigate = useNavigate();

    const inputs = [
        {
            label : "کد ملی",
            name : 'ssn',
            value : state.ssn,
            placeholder : "لطفا کد ملی 10 رقمی را وارد نمایید",
            error : errors.ssn && errors.ssn.message,
            required : true,
            onchange : (e) => {
                setState({
                    ...state,
                    ssn : e.target.value
                })
            }
        },
        {
            label : "موبایل",
            name : 'mobile',
            value : state.mobile,
            placeholder : "لطفا شماره موبایل خود را وارد نمایید",
            error : errors.mobile && errors.mobile.message,
            required : true,
            onchange : (e) => {
                setState({
                    ...state,
                    mobile : e.target.value
                })
            }
        },
        {
            label : "پسورد",
            name : 'password',
            value : state.password,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : true,
            error : errors.password && errors.password.message,
            onchange : (e) => {
                setState({
                    ...state,
                    password : e.target.value
                })
            }
        },
        {
            label : "تاریخ تولد",
            name : 'birth_date',
            value : state.birth_date,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.birth_date && errors.birth_date.message,
            onchange : (e) => {
                setState({
                    ...state,
                    birth_year : e.year,
                    birth_month : e.month.number,
                    birth_day : e.day
                })
            }
        },
        {
            label : "آدرس",
            name : 'address',
            value : state.address,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.address && errors.address.message,
            onchange : (e) => {
                setState({
                    ...state,
                    address : e.target.value
                })
            }
        },
        {
            label : "کد پستی",
            name : 'postal_code',
            value : state.postal_code,
            placeholder : "لطفا کد پستی خود را وارد نمایید",
            required : false,
            error : errors.postal_code && errors.postal_code.message,
            onchange : (e) => {
                setState({
                    ...state,
                    postal_code : e.target.value
                })
            }
        },
        {
            label : "تلفن ثابت",
            name : 'home_number',
            value : state.home_number,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.home_number && errors.home_number.message,
            onchange : (e) => {
                setState({
                    ...state,
                    home_number : e.target.value
                })
            }
        },
    ]
    const postData = async () => {
        console.log(state);
        await axios.post('http://127.0.0.1:8000/api/register',{
            ...state
        }).then(res => {
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            localStorage.setItem('token',res.data.user.token)
            navigate('/dashboard');            
        }).catch(res => {
            return 0;
        })
    };
    
    const submitForm = () => {
        postData()
    };

    return (
        <div className='d-flex flex-column justify-content-center'>
            <h2 className='text-primary'>Login Form</h2>
            <form className='d-flex flex-column justify-content-center flex-shrink' onSubmit={handleSubmit(submitForm)}>
                {inputs.map((input, index) => {
                    return <Input key={index} label={input.label} name={input.name} value={input.value} placeholder={input.placeholder} error={input.error} onchange={input.onchange} index={index} register={register} required={input.required}/>
                })}
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