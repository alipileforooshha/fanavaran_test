import React, { useContext, useEffect, useState } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NextButton from './NextButton';
import e from 'react-date-object/calendars/persian';

function MedicalCondition() {
    const [state, setState] = useState({
        mother_alive : 1,
        father_alive : 1,
        military_medical : 0,
        military_status : 0,
        family_health : 1,
        hospitalization : 0,
        full_health : 1,
        weight_change : 0
    })

    const validationSchema = yup.object().shape({
        ssn : yup.number().typeError('کد ملی باید عددی باشد').
        test('len', 'باید بین 5 تا 10 حرف باشد', val => val.toString().length >= 5 && val.toString().length <= 10)
        .required('باید حتما پر شده باشد'),
        birth_date : yup.string().required('باید حتما پر شده باشد'),
        mobile : yup.number('مقدار باید عددی باشد').typeError('موبایل باید عددی باشد').required('باید حتما پر شده باشد'),
        height : yup.number('مقدار باید عددی باشد').typeError('قد باید عددی باشد').required('باید حتما پر شده باشد'),
        weight : yup.number('مقدار باید عددی باشد').typeError('وزن ملی باید عددی باشد').required('باید حتما پر شده باشد'),
        gender : yup.string('مقدار باید عددی باشد').required('pppppppp'),
        cancelation_detail_boolean : yup.boolean(),
        cancelation_detail : yup.string().when('cancelation_detail_boolean',{
            is : () => secondForm.military_status == 4,
            then : yup.string().required('فیلد کنسلی بولین نمیتواند خالی باشد'),
            otherwise : yup.string()
        }),
        cancelation_reason : yup.string().when('cancelation_detail_boolean',{
            is : () => secondForm.military_status == 4,
            then : yup.string().required('فیلد کنسلی دلیل'),
            otherwise : yup.string()
        }),
        father_boolean : yup.boolean(),
        father_age : yup.number('سن پدر باید عددی باشد').when('father_boolean',{
            is : () => state.father_alive == 1,
            then : yup.number('سن پدر باید عددی باشد').required('llllllllll')
        }),
        father_death_reason : yup.string().when('father_boolean',{
            is : () => state.father_alive == 0,
            then : yup.string(),
        }),
        mother_boolean : yup.boolean(),
        mother_age : yup.number('سن مادر باید عددی باشد').when('mother_boolean',{
            is : () => state.mother_alive == 1,
            then : yup.number('سن مادر باید عددی باشد').required('llllllllll')
        }),
        mother_death_reason : yup.string().when('mother_boolean',{
            is : () => state.mother_alive == 0,
            then : yup.string(),
        }),
        family_illness_description_boolean : yup.boolean(),
        family_illness_description : yup.string('سن مادر باید عددی باشد').when('family_illness_description_boolean',{
            is : () => state.family_health == 0,
            then : yup.string('سن مادر باید عددی باشد').required('lwwwwlllllllll')
        }),
        smoking : yup.number().required('smoking is required'),
        hospitalization_boolean : yup.boolean(),
        hospitalization_description : yup.string('سن مادر باید عددی باشد').when('hospitalization_boolean',{
            is : () => state.hospitalization == 1,
            then : yup.string('سن مادر باید عددی باشد').required('lwwwwlllsllllll')
        }),
        self_illness_description_boolean : yup.boolean(),
        self_illness_description : yup.string('سن مادر باید عددی باشد').when('family_illness_description_boolean',{
            is : () => state.full_health == 0,
            then : yup.string('سن مادر باید عددی باشد').required('lwwwwlll2llllll')
        }),
        weight_change_description_boolean : yup.boolean(),
        weight_change_description : yup.string('سن مادر باید عددی باشد').when('family_illness_description_boolean',{
            is : () => state.weight_change == 1,
            then : yup.string('سن مادر باید عددی باشد').required('lwwwwlll2llllll1000')
        }),
    });
    const formOptions = {resolver : yupResolver(validationSchema),};
    
    const {register , handleSubmit, formState:{errors}, watch, unregister} = useForm({
        resolver : yupResolver(validationSchema),
        reValidateMode : "onChange",
        mode : 'onChange'
    });
    watch();
    const {secondForm, setSecondForm} = useContext(SecondFormContext);
    const inputs = [
        {
            type : "input",
            label : "کد ملی بیمه شده",
            name : "ssn",
            placeholder : "لطفا کد ملی 10 رقمی را وارد نمایید",
            value : secondForm.national_code,
            error : errors.ssn && errors.ssn.message
        },
        {
            type : "input",
            name : 'birth_date',
            label : "تاریخ تولد بیمه شده",
            value : secondForm.birth_year,
            error : errors.birth_date && errors.birth_date.message
        },
        {
            type : "input",
            name : "mobile",
            label : "شماره موبایل بیمه شده",
            placeholder : "09128813755",
            value : secondForm.mobile_number,
            error : errors.mobile && errors.mobile.message
        },
        {
            type : "input",
            name : "height",
            label : "قد بیمه شده",
            placeholder : "",
            value : secondForm.height,
            error : errors.height && errors.height.message
        },
        {
            type : "input",
            name : 'weight',
            label : "وزن بیمه شده",
            placeholder : "",
            value : secondForm.weight,
            error : errors.weight && errors.weight.message
        },
        {
            type : "select",
            name : "gender",
            label : "جنسیت بیمه شده",
            placeholder : "",
            value : secondForm.gender,
            error : errors.gender && errors.gender.message,
            onchange : (e) => {
                console.log(typeof e.target.value)
                setSecondForm({
                    ...secondForm,
                    gender : e.target.value
                })
            },
            options : [
                {
                    title : "مرد",
                    value : 1
                },
                {
                    title : "زن",
                    value : 2
                }
            ]
        },
        {
            type : "select",
            label : "وضعیت خدمت سربازی",
            placeholder : "",
            name : "military",
            error : errors.military && errors.military.message,
            value : secondForm.military_status,
            options : [
                {
                    title : "انتخاب کنید",
                    value : 0
                },
                {
                    title : "انجام شده",
                    value : 1
                },
                {
                    title : "انجام نشده",
                    value : 2
                },
                {
                    title : "معافیت غیرپزشکی",
                    value : 3
                },
                {
                    title : "معافیت پزشکی",
                    value : 4
                },
            ],
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    military_status : e.target.value
                })
                if(e.target.value == 4){
                    setState({
                        ...state,
                        military_medical : 1
                    })
                }else{
                    setState({
                        ...state,
                        military_medical : 0
                    })
                }
            },
            inputs : [
                {
                    placeholder : "ماده/بند/سال معافیت",
                    disable : state.military_medical,
                    name : "cancelation_detail",
                    value : secondForm.cancelation_detail,
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            cancelation_detail : e.target.value
                        })
                    }
                },
                {
                    placeholder : "علت معافیت",
                    disable : state.military_medical,
                    name : "cancelation_reason",
                    value : secondForm.cancelation_reason,
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            cancelation_reason : e.target.value
                        })
                    }
                }
            ]
        },
        {
            type : "select",
            label : "تاریخچه فامیلی",
            placeholder : "",
            name : 'father_status',
            error : errors.father_status && errors.father_status.message,
            value : state.father_death,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    father_status : e.target.value
                })
                if(e.target.value == 0){
                    setState({
                        ...state,
                        father_alive : 0
                    })
                }else{
                    setState({
                        ...state,
                        father_alive : 1
                    })
                }
            },
            options : [
                {
                    title : "پدر در قید حیات می باشد",
                    value : 1
                },
                {
                    title : "پدر قید حیات نمی باشد",
                    value : 0
                },
            ],
            inputs : [
                {
                    placeholder : "سن فعلی",
                    disable : state.father_alive,
                    value : secondForm.father_age,
                    name : "father_age",
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            father_age : e.target.value
                        })
                    }
                },
                {
                    placeholder : "علت فوت",
                    disable : !state.father_alive,
                    value : secondForm.father_death_reason,
                    name : "father_death_reason",
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            father_death_reason : e.target.value
                        })
                    }
                }
            ]
        },
        {
            type : "select",
            placeholder : "",
            name : 'mother_status',
            value : state.mother_death,
            error : errors.mother_status && errors.mother_status.message,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    mother_status : e.target.value
                })
                if(e.target.value == 0){
                    setState({
                        ...state,
                        mother_alive : 0
                    })
                }else{
                    setState({
                        ...state,
                        mother_alive : 1
                    })
                }
            },
            options : [
                {
                    title : "مادر در قید حیات می باشد",
                    value : 1
                },
                {
                    title : "مادر قید حیات نمی باشد",
                    value : 0
                },
            ],
            inputs : [
                {
                    placeholder : "سن فعلی",
                    disable : state.mother_alive,
                    value : secondForm.mother_age,
                    name : "mother_age",
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            mother_age : e.target.value
                        })
                    }
                },
                {
                    placeholder : "علت فوت",
                    disable : !state.mother_alive,
                    value : secondForm.mother_death_reason,
                    name : "mother_death_reason",
                    onchange : (e) => {
                        console.log(e.target.value)
                        setSecondForm({
                            ...secondForm,
                            mother_death_reason : e.target.value
                        })
                    }
                }
            ]
        },
        {
            type : "select",
            label : "سابقه بیماری افراد خانواده",
            placeholder : "",
            value : secondForm.family_health,
            name : "family_health",
            error : errors.family_health && errors.family_health.message,
            onchange : (e) =>{
                setSecondForm({
                    ...secondForm,
                    family_health : e.target.value
                })
                if(e.target.value == 0){
                    setState({
                        ...state,
                        family_health : 0
                    },console.log(state))
                }else{
                    setState({
                        ...state,
                        family_health : 1
                    },console.log(state))
                }
            },
            options : [
                {
                    title : "افراد خانواده سابقه بیماری نداشته اند",
                    value : 1
                },
                {
                    title : "افراد خانواده سابقه بیماری داشته اند",
                    value : 0
                },
            ]
        },
        {
            type : "input",
            label : "توضیحات بیماری خانوادگی",
            placeholder : "",
            name : 'family_illness_description',
            error : errors.family_illness_description && errors.family_illness_description.message,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    family_illness_description : e.target.value
                })
            },
            value : secondForm.family_illness_description,
            disable : state.family_health
        },
        {
            type : "select",
            label : "استعمال دخانیات",
            placeholder : "",
            value : secondForm.smoking,
            name : "smoking",
            error : errors.smoking && errors.smoking.message,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    smoking : e.target.value
                })
            },
            options : [
                {
                    title : "بله",
                    value : 1
                },
                {
                    title : "خیر",
                    value : 0
                }
            ]
        },
        {
            type : "select",
            label : "سابقه بستری یا جراحی قبلی",
            placeholder : "",
            name : "hospitalization",
            value : secondForm.hospitalization,
            error : errors.hospitalization && errors.hospitalization.message,
            onchange : (e) =>{
                setSecondForm({
                    ...secondForm,
                    hospitalization : e.target.value
                })
                if(e.target.value == 1){
                    setState({
                        ...state,
                        hospitalization : 1
                    })
                }else{
                    setState({
                        ...state,
                        hospitalization : 0
                    })
                }
            },
            options : [
                {
                    title : "بله",
                    value : 1
                },
                {
                    title : "خیر",
                    value : 0
                }
            ]
        },
        {
            type : "input",
            label : "دلیل بستری شدن",
            placeholder : "",
            name : 'hospitalization_description',
            error : errors.hospitalization_description && errors.hospitalization_description.message,
            value : secondForm.hospitalization_description,
            disable : !state.hospitalization
        },
        {
            type : "input",
            name : "physical_record",
            label : "سابقه جسمانی",
            value : secondForm.physical_record,
            error : errors.physical_record && errors.physical_record.message,
            placeholder : "اگر قبلا سابقه نقص عضو و یا از کارافتادگی داشتید علت آن را بیان کنید",
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    physical_record : e.target.value
                })
            }
        },
        {
            type : "input",
            name : "daily_medicine_consume",
            label : "مصرف روزانه دارو",
            value : secondForm.daily_medicine_consume,
            error : errors.daily_medicine_consume && errors.daily_medicine_consume.message,
            placeholder : "اگر به صورت مرتب و روزانه دارو مصرف میکنید لطفا نام آن را قید کنید",
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    daily_medicine_consume : e.target.value
                })
            }
        },
        {
            type : "select",
            label : "وضعیت سلامتی فعلی",
            placeholder : "",
            name : "current_physical_state",
            error : errors.current_physical_state && errors.current_physical_state.message,
            value : secondForm.full_health,
            onchange : (e) =>{
                if(e.target.value == 1){
                    setSecondForm({
                        ...secondForm,
                        full_health : e.target.value
                    })
                    setState({
                        ...state,
                        full_health : 1
                    })
                }else{
                    setState({
                        ...state,
                        full_health : 0
                    })
                }
            },
            options : [
                {
                    title : "در سلامت کامل هستم",
                    value : 1
                },
                {
                    title : "در حال حاضر سلامتی کامل ندارم",
                    value : 0
                }
            ]
        },
        {
            type : "input",
            label : "ابتلا به بیماری",
            placeholder : "",
            name : "self_illness_description",
            value : secondForm.weight,
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    self_illness_description : e.target.value
                })
            },
            error : errors.self_illness_description && errors.self_illness_description.message,
            disable : state.full_health
        },
        {
            type : "select",
            label : "کاهش/افزایش وزن",
            placeholder : "",
            name : "weight_change",
            value : secondForm.weight_change,
            error : errors.weight_change && errors.weight_change.message,
            onchange : (e) =>{
                setSecondForm({
                    ...secondForm,
                    weight_change : e.target.value
                })
                if(e.target.value > 0){
                    setState({
                        ...state,
                        weight_change : 1
                    })
                }else{
                    setState({
                        ...state,
                        weight_change : 0
                    })
                }
            },
            options : [
                {
                    title : "تغییر محسوسی نداشته ام",
                    value : 0
                },
                {
                    title : "در 6 ماه گذشته بیش از 10 کیلو افزایش",
                    value : 1
                },
                {
                    title : "در 6 ماه گذشته بیش از 10 کیلو کاهش",
                    value : 2
                },
            ]
        },
        {
            type : "input",
            label : "توضیحات تکمیلی افزایش/کاهش وزن",
            placeholder : "",
            onchange : (e) => {
                setSecondForm({
                    ...secondForm,
                    weight_change : e.target.value
                })
            },
            name : 'weight_change_description',
            error : errors.weight_change_description && errors.weight_change_description.message,
            value : secondForm.weight_description,
            disable : !state.weight_change
        },
    ];

    const submitForm = (data) => {
        setSecondForm({
            ...secondForm,
            second_step : secondForm.second_step + 1
        });
    };
    
    return (
        <div>

            <form onSubmit={handleSubmit(submitForm)}>
            
                {inputs.map((input,index) => {
                    if(input.type == "input"){
                        return <div className='d-flex flex-column justify-content-between mt-3' key={index}>
                            <div className='d-flex justify-content-between mt-3'>
                                <label className='text-nowrap mx-4'>{input.label}</label>
                                <input name={input.name} 
                                    className='form-control'
                                    {...register(input.name)}
                                    value={input.value}
                                    placeholder={input.placeholder}
                                    disabled={input.disable}>
                                </input>
                            </div>
                            <p className='text-danger'>{input.error}</p>
                        </div>
                    }
                    if(input.type == "select"){
                        return <div className='d-flex flex-column justify-content-between mt-3' key={index}>
                            <div className='d-flex justify-content-between mt-3'>
                                <label className='text-nowrap mx-4'>{input.label}</label>
                                <div className='w-100 d-flex justify-content-between'>
                                    <select type="select" {...register(input.name)} name={input.name} className='form-select' value={input.value} placeholder={input.placeholder} onChange={input.onchange}>
                                        {input.options.map((option,index) => {
                                            return <option value={option.value} key={index}>{option.title}</option>
                                        })}
                                    </select>
                                    {input.inputs && input.inputs.map((second_input,index) => {
                                        return <input name={second_input.name} {...register(second_input.name)} onChange={second_input.onchange} className='form-control mx-4 w-100' key={index} placeholder={second_input.placeholder} disabled={!second_input.disable}></input>
                                    })}
                                </div>
                                <p className='text-danger'>{input.error}</p>
                            </div>
                        </div>
                    }
                })}
            {errors.ssn && <p>{errors.ssn.message}</p>}
            {errors.gender && <p>{errors.gender.message}</p>}
            {errors.father_age && <p>{errors.father_age.message}</p>}
            {errors.father_death_reason && <p>{errors.father_death_reason.message}</p>}            
            {errors.cancelation_detail && <p>{errors.cancelation_detail.message}</p>}
            {errors.cancelation_reason && <p>{errors.cancelation_reason.message}</p>}
            {errors.family_illness_description && <p>{errors.family_illness_description.message}</p>}
            {errors.smoking && <p>{errors.smoking.message}</p>}
            {errors.hospitalization_description && <p>{errors.hospitalization_description.message}</p>}
            {errors.self_illness_description && <p>{errors.self_illness_description.message}</p>}
            {errors.weight_change_description && <p>{errors.weight_change_description.message}</p>}
            
            <NextButton />
        </form>
    </div>
        
  )
}

export default MedicalCondition