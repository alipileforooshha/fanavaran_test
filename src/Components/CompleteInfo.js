import React, { useEffect, useState } from 'react'
import Input from './Input';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';


function CompleteInfo() {

    const [user, setUser] = useState({...JSON.parse(localStorage.getItem('user'))});
    const [state, setState] = useState({});

    const validationSchema = yup.object().shape({
        
    });

    const {register, handleSubmit, formState:{errors}, watch, unregister} = useForm({
        resolver : yupResolver(validationSchema),
        reValidateMode : 'onChange',
        mode : 'onChange'
    });

    const inputs = [
        {
            label : "کد ملی",
            name : 'ssn',
            value : user?.ssn,
            placeholder : "لطفا کد ملی 10 رقمی را وارد نمایید",
            error : errors.ssn && errors.ssn.message,
            required : true,
            show : false,
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
            value : user?.mobile,
            placeholder : "لطفا شماره موبایل خود را وارد نمایید",
            error : errors.mobile && errors.mobile.message,
            required : true,
            show : false,
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
            value : user?.password,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : true,
            error : errors.password && errors.password.message,
            show : false,
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
            value : user?.birth_date,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.birth_date && errors.birth_date.message,
            show : user?.birth_year && user?.birth_month && user?.birth_day ? false : true,
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
            value : user?.address,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.address && errors.address.message,
            show : user?.address? false : true,
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
            value : user?.postal_code,
            placeholder : "لطفا کد پستی خود را وارد نمایید",
            required : false,
            error : errors.postal_code && errors.postal_code.message,
            show : user?.postal_code? false : true,
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
            value : user?.home_number,
            placeholder : "لطفا رمز عبور خود را وارد نمایید",
            required : false,
            error : errors.home_number && errors.home_number.message,
            show : user?.home_number? false : true,
            onchange : (e) => {
                setState({
                    ...state,
                    home_number : e.target.value
                })
            }
        },
    ]

    const postData = async () => {
        console.log('data',state)
        await axios.post(`http://127.0.0.1:8000/api/completeInfo/${user.id}`,{
            ...state
        }).then(res => {
            console.log('data',res.data);
            localStorage.setItem('user',JSON.stringify(res.data))
            // localStorage.setItem('token',res.data.user.token)
            setUser({
                ...res.data
            });
            // navigate('/dashboard');            
        }).catch(res => {
            return 0;
        })
    };
    
    const submitForm = () => {
        postData()
    };

    return (
        <div className='p-4'>
            <div className='d-flex flex-column justify-content-center'>
            <h2 className='text-primary'>تکمیل اطلاعات</h2>
            <form className='d-flex flex-column justify-content-center flex-shrin' onSubmit={handleSubmit(submitForm)}>
                {inputs.map((input, index) => {
                    return input.show ? <Input key={index} label={input.label} name={input.name} value={input.value} placeholder={input.placeholder} error={input.error} onchange={input.onchange} index={index} register={register} required={input.required}/> : ""
                })}
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mt-2'>
                        Login
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CompleteInfo