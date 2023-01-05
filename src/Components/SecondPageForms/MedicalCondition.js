import React, { useContext, useState } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'

function MedicalCondition() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext);
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
    const inputs = [
        {
            type : "input",
            label : "کد ملی بیمه شده",
            placeholder : "لطفا کد ملی 10 رقمی را وارد نمایید",
            value : secondForm.national_code
        },
        {
            type : "input",
            label : "تاریخ تولد بیمه شده",
            value : secondForm.birth_year
        },
        {
            type : "input",
            label : "شماره موبایل بیمه شده",
            placeholder : "09128813755",
            value : secondForm.mobile_number
        },
        {
            type : "input",
            label : "قد بیمه شده",
            placeholder : "",
            value : secondForm.height
        },
        {
            type : "input",
            label : "وزن بیمه شده",
            placeholder : "",
            value : secondForm.weight
        },
        {
            type : "select",
            label : "جنسیت بیمه شده",
            placeholder : "",
            value : 1,
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
            value : state.military_status,
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
                if(e.target.value == 4){
                    setState({
                        ...state,
                        military_medical : true
                    })
                }else{
                    setState({
                        ...state,
                        military_medical : false
                    })
                }
            },
            inputs : [
                {
                    placeholder : "ماده/بند/سال معافیت",
                    disable : state.military_medical,
                },
                {
                    placeholder : "علت معافیت",
                    disable : state.military_medical,
                }
            ]
        },
        {
            type : "select",
            label : "تاریخچه فامیلی",
            placeholder : "",
            value : state.father_death,
            onchange : (e) => {
                if(e.target.value == 0){
                    setState({
                        ...state,
                        father_alive : false
                    })
                }else{
                    setState({
                        ...state,
                        father_alive : true
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
                },
                {
                    placeholder : "علت فوت",
                    disable : !state.father_alive,
                }
            ]
        },
        {
            type : "select",
            placeholder : "",
            value : state.mother_death,
            onchange : (e) => {
                if(e.target.value == 0){
                    setState({
                        ...state,
                        mother_alive : false
                    })
                }else{
                    setState({
                        ...state,
                        mother_alive : true
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
                },
                {
                    placeholder : "علت فوت",
                    disable : !state.mother_alive,
                }
            ]
        },
        {
            type : "select",
            label : "سابقه بیماری افراد خانواده",
            placeholder : "",
            value : state.family_health,
            onchange : (e) =>{
                if(e.target.value == 0){
                    setState({
                        ...state,
                        family_health : false
                    },console.log(state))
                }else{
                    setState({
                        ...state,
                        family_health : true
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
            value : secondForm.weight,
            disable : state.family_health
        },
        {
            type : "select",
            label : "استعمال دخانیات",
            placeholder : "",
            value : 1,
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
            value : state.hospitalization,
            onchange : (e) =>{
                if(e.target.value == 1){
                    setState({
                        ...state,
                        hospitalization : true
                    })
                }else{
                    setState({
                        ...state,
                        hospitalization : false
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
            label : "توضیحات بیماری خانوادگی",
            placeholder : "",
            value : secondForm.weight,
            disable : !state.hospitalization
        },
        {
            type : "input",
            label : "سابقه جسمانی",
            placeholder : "اگر قبلا سابقه نقص عضو و یا از کارافتادگی داشتید علت آن را بیان کنید",
        },
        {
            type : "input",
            label : "مصرف روزانه دارو",
            placeholder : "اگر به صورت مرتب و روزانه دارو مصرف میکنید لطفا نام آن را قید کنید",
        },
        {
            type : "select",
            label : "وضعیت سلامتی فعلی",
            placeholder : "",
            value : state.full_health,
            onchange : (e) =>{
                if(e.target.value == 1){
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
            label : "توضیحات بیماری خانوادگی",
            placeholder : "",
            value : secondForm.weight,
            disable : state.full_health
        },
        {
            type : "select",
            label : "کاهش/افزایش وزن",
            placeholder : "",
            value : state.weight_change,
            onchange : (e) =>{
                if(e.target.value > 0){
                    setState({
                        ...state,
                        weight_change : true
                    })
                }else{
                    setState({
                        ...state,
                        weight_change : false
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
            label : "توضیحات بیماری خانوادگی",
            placeholder : "",
            value : secondForm.weight,
            disable : !state.weight_change
        },
    ]
    return (
        <div>
        {inputs.map((input) => {
            if(input.type == "input"){
                return <div className='d-flex justify-content-between mt-3'>
                    <label className='text-nowrap mx-4'>{input.label}</label>
                    <input className='form-control' defaultValue={input.value} placeholder={input.placeholder} disabled={input.disable}></input>
                </div>
            }
            if(input.type == "select"){
                return <div className='d-flex justify-content-between mt-3'>
                    <label className='text-nowrap mx-4'>{input.label}</label>
                    <div className='w-100 d-flex justify-content-between'>
                        <select className='form-select' defaultValue={input.value} placeholder={input.placeholder} onChange={input.onchange}>
                            {input.options.map((option) => {
                                return <option value={option.value}>{option.title}</option>
                            })}
                        </select>
                        {input.inputs && input.inputs.map((second_input) => {
                            return <input className='form-control mx-4 w-100' placeholder={second_input.placeholder} disabled={!second_input.disable}></input>
                        })}
                    </div>
                </div>
            }
        })}
    </div>
  )
}

export default MedicalCondition