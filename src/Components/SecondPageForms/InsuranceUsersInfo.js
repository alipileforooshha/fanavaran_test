import React, { useContext, useState } from 'react'
import e from 'react-date-object/calendars/persian';
import { SecondFormContext } from '../../Contexts/SecondFormContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function InsuranceUsersInfo() {
    const validationSchema = yup.object().shape({
        
    });
    const formOptions = {resolver : yupResolver(validationSchema),};
    
    const {register , handleSubmit, formState:{errors}, watch, unregister} = useForm({
        resolver : yupResolver(validationSchema),
        reValidateMode : "onChange",
        mode : 'onChange'
    });

    const {secondForm, setSecondForm} = useContext(SecondFormContext);

    const [userNumbers, setUserNumbers] = useState(1);
    const [showForms, setShowForms] = useState(false);
    const inputs = [
        [
            {
                label : "تاریخ تولد",
                disable : false,
                name : 'user_birth_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_birth_0 : e.target.value
                    })
                }
            },
            {
                label : "کد ملی",
                disable : false,
                name : 'user_ssn_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_ssn_0 : e.target.value
                    })
                }
            },
            {
                label : "نام",
                disable : true,
                name : 'user_first_name_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_first_name_0 : e.target.value
                    })
                }
            },
            {
                label : "نام خانوادگی",
                disable : true,
                name : 'user_last_name_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_last_name_0 : e.target.value
                    })
                }
            },
            {
                label : "جنسیت",
                disable : true,
                name : 'user_gender_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_gender_0 : e.target.value
                    })
                }
            },
            {
                label : "شماره شناسنامه",
                disable : true,
                name : 'user_serial_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_serial_0 : e.target.value
                    })
                }
            },
            {
                label : "نام پدر",
                disable : true,
                name : 'user_father_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_father_0 : e.target.value
                    })
                }
            },
            {
                label : "نسبت با بیمه شده",
                disable : false,
                name : 'user_relativity_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_relativity_0 : e.target.value
                    })
                }
            },
            {
                label : "درصد سهم",
                disable : false,
                name : 'user_share_0',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_share_0 : e.target.value
                    })
                }
            },
        ],
        [
            {
                label : "تاریخ تولد",
                disable : false,
                name : 'user_birth_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_birth_1 : e.target.value
                    })
                }
            },
            {
                label : "کد ملی",
                disable : false,
                name : 'user_ssn_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_ssn_1 : e.target.value
                    })
                }
            },
            {
                label : "نام",
                disable : true,
                name : 'user_first_name_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_first_name_1 : e.target.value
                    })
                }
            },
            {
                label : "نام خانوادگی",
                disable : true,
                name : 'user_last_name_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_last_name_1 : e.target.value
                    })
                }
            },
            {
                label : "جنسیت",
                disable : true,
                name : 'user_gender_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_gender_1 : e.target.value
                    })
                }
            },
            {
                label : "شماره شناسنامه",
                disable : true,
                name : 'user_serial_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_serial_1 : e.target.value
                    })
                }
            },
            {
                label : "نام پدر",
                disable : true,
                name : 'user_father_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_father_1 : e.target.value
                    })
                }
            },
            {
                label : "نسبت با بیمه شده",
                disable : false,
                name : 'user_relativity_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_relativity_1 : e.target.value
                    })
                }
            },
            {
                label : "درصد سهم",
                disable : false,
                name : 'user_share_1',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_share_1 : e.target.value
                    })
                }
            },
        ],
        [
            {
                label : "تاریخ تولد",
                disable : false,
                name : 'user_birth_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_birth_2 : e.target.value
                    })
                }
            },
            {
                label : "کد ملی",
                disable : false,
                name : 'user_ssn_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_ssn_2 : e.target.value
                    })
                }
            },
            {
                label : "نام",
                disable : true,
                name : 'user_first_name_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_first_name_2 : e.target.value
                    })
                }
            },
            {
                label : "نام خانوادگی",
                disable : true,
                name : 'user_last_name_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_last_name_2 : e.target.value
                    })
                }
            },
            {
                label : "جنسیت",
                disable : true,
                name : 'user_gender_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_gender_2 : e.target.value
                    })
                }
            },
            {
                label : "شماره شناسنامه",
                disable : true,
                name : 'user_serial_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_serial_2 : e.target.value
                    })
                }
            },
            {
                label : "نام پدر",
                disable : true,
                name : 'user_father_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_father_2 : e.target.value
                    })
                }
            },
            {
                label : "نسبت با بیمه شده",
                disable : false,
                name : 'user_relativity_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_relativity_2 : e.target.value
                    })
                }
            },
            {
                label : "درصد سهم",
                disable : false,
                name : 'user_share_2',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_share_2 : e.target.value
                    })
                }
            },
        ],
        [
            {
                label : "تاریخ تولد",
                disable : false,
                name : 'user_birth_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_birth_3 : e.target.value
                    })
                }
            },
            {
                label : "کد ملی",
                disable : false,
                name : 'user_ssn_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_ssn_3 : e.target.value
                    })
                }
            },
            {
                label : "نام",
                disable : true,
                name : 'user_first_name_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_first_name_3 : e.target.value
                    })
                }
            },
            {
                label : "نام خانوادگی",
                disable : true,
                name : 'user_last_name_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_last_name_3 : e.target.value
                    })
                }
            },
            {
                label : "جنسیت",
                disable : true,
                name : 'user_gender_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_gender_3 : e.target.value
                    })
                }
            },
            {
                label : "شماره شناسنامه",
                disable : true,
                name : 'user_serial_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_serial_3 : e.target.value
                    })
                }
            },
            {
                label : "نام پدر",
                disable : true,
                name : 'user_father_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_father_3 : e.target.value
                    })
                }
            },
            {
                label : "نسبت با بیمه شده",
                disable : false,
                name : 'user_relativity_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_relativity_3 : e.target.value
                    })
                }
            },
            {
                label : "درصد سهم",
                disable : false,
                name : 'user_share_3',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_share_3 : e.target.value
                    })
                }
            },
        ],
        [
            {
                label : "تاریخ تولد",
                disable : false,
                name : 'user_birth_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_birth_4 : e.target.value
                    })
                }
            },
            {
                label : "کد ملی",
                disable : false,
                name : 'user_ssn_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_ssn_4 : e.target.value
                    })
                }
            },
            {
                label : "نام",
                disable : true,
                name : 'user_first_name_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_first_name_4 : e.target.value
                    })
                }
            },
            {
                label : "نام خانوادگی",
                disable : true,
                name : 'user_last_name_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        4 : e.target.value
                    })
                }
            },
            {
                label : "جنسیت",
                disable : true,
                name : 'user_gender_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_gender_4 : e.target.value
                    })
                }
            },
            {
                label : "شماره شناسنامه",
                disable : true,
                name : 'user_serial_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_serial_4 : e.target.value
                    })
                }
            },
            {
                label : "نام پدر",
                disable : true,
                name : 'user_father_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_father_4 : e.target.value
                    })
                }
            },
            {
                label : "نسبت با بیمه شده",
                disable : false,
                name : 'user_relativity_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_relativity_4 : e.target.value
                    })
                }
            },
            {
                label : "درصد سهم",
                disable : false,
                name : 'user_share_4',
                onchange : (e) => {
                    setSecondForm({
                        ...secondForm,
                        user_share_4 : e.target.value
                    })
                }
            },
        ],
    ]

    const second_inputs = [
        {
            name : "previous_insurance",
            label : 'سابقه بیمه عمر قبلی',
            type : 'select',
            value : secondForm.previous_insurance,
            onchange : (e) => {
                if(e.target.value > 0)
                    setShowForms(true)
                if(e.target.value == 0)
                    setShowForms(false)
                setSecondForm({
                    ...secondForm,
                    previous_insurance : e.target.value
                })
            },
            options : [
                {
                    value : 0,
                    title : 'تا کنون بیمه عمر نداشته ام'
                },
                {
                    value : 1,
                    title : 'دارای بیمه عمر فعال می باشم'
                },
                {
                    value : 2,
                    title : 'درخواست بیمه عمر داشته ام و پذیرفته نشده ام'
                }
            ]
        },
        {
            name : 'previous_company_name',
            type : 'input',
            label : 'نام شرکت بیمه',
            value : secondForm.previous_company_name,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    previous_company_name : e.target.value
                })
            },
            disable : !showForms
        },
        {
            name : 'previous_insurance_date',
            type : 'input',
            label : 'تاریخ بیمه نامه',
            value : secondForm.previous_insurance_date,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    previous_insurance_date : e.target.value
                })
            },
            disable : !showForms
        },
        {
            name : 'previous_insurance_number',
            type : 'input',
            label : 'شماره بیمه نامه',
            value : secondForm.insurance_number,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    previous_insurance_number : e.target.value
                })
            },
            disable : !showForms
        },
        {
            name : 'previous_death_cost',
            type : 'input',
            label : 'سرمایه فوت (ریال)',
            value : secondForm.previous_death_cost,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    previous_death_cost : e.target.value
                })
            },
            disable : !showForms
        },
        {
            name : 'previous_decline',
            type : 'input',
            label : 'توضیحات/علت عدم صدور',
            value : secondForm.previous_decline,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    previous_decline : e.target.value
                })
            },
            disable : !showForms
        }
    ]
    const generateUsersForm = () => {
        let result = [];
        for(let i = 0; i < userNumbers; i++){
            inputs[i].map((input) => {
                result.push(
                    <div className='mx-3' style={{
                        width : "28%"
                    }}>
                        <label className='text-nowrap align-self-end'>{input.label}</label>
                        <input className='form-control'
                        value={input.value}
                        onChange={input.onchange}
                        disabled={input.disable}
                        {...register(input.name)}>
                        </input>
                    </div>
                    );
            })
        }
        return result;
    }

    return (
        <div className='my-4'>
            <h4 className='d-flex justify-content-start'>مشخصات استفاده کنندگان</h4>
            <div className='d-flex flex-wrap justify-content-center'>
                {generateUsersForm().map((item) => {
                    return item
                })}

            </div>
            <div className='d-flex justify-content-between'>
                {userNumbers < 5 ? <a onClick={() => {
                    if(userNumbers < 5)
                        setUserNumbers(userNumbers + 1)
                    console.log('wwwwwwwww')
                }} className="text-danger">افزایش تعداد موارد</a> : ''}
                
                <span>-</span>
                {userNumbers > 1 ? <a onClick={() => {
                    if(userNumbers > 1)
                        setUserNumbers(userNumbers - 1)
                }} className="text-danger">کاهش تعداد موارد</a> : ''}
            </div>
            <div className='d-flex flex-wrap mt-4'>
                {second_inputs.map((input) => {
                    if(input.type === 'select'){
                        return(
                            <div className='mx-2' style={{
                                width : "28%"
                            }}>
                                <label>{input.label}</label>
                                <select name={input.name}
                                value={input.value}
                                onChange={input.onchange}
                                className="form-select">
                                {input.options.map((option)=>{
                                    return <option value={option.value}>{option.title}</option> 
                                })}
                                </select>
                            </div> 
                        )
                    }
                    if(input.type === 'input'){
                        return(
                            <div className='mx-2' style={{
                                width : "28%"
                            }}>
                                <label>{input.label}</label>
                                <input name={input.name}
                                value={input.value}
                                onChange={input.onchange}
                                className="form-control"
                                disabled={input.disable}>
                                </input>
                            </div> 
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default InsuranceUsersInfo