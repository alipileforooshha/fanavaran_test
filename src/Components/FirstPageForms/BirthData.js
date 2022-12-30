import React, { useState, useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
const BirthData = ({next, prev}) => {
    const date = new DateObject({ calendar: persian, locale: persian_fa })
    const {state,setState} = useContext(FormContext);
    const checkAge = () => {
        let age = date.year - state.birth_year;
        if(date.month.number < state.birth_month){
            age = age - 1;
        }else if(date.month.number == state.birth_month && date.day < state.birth_day){
            age = age - 1;
        }
        setState({
            ...state,
            age : age
        });
        if(age < 18 && state.relativity == 1){
            return 0
        }else{
            return 1;
        }
    }
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    const years = Array.from({length: 1000}, (_, i) => i + 1332);
    return (
    <div className='form-grou m-4 d-flex flex-column w-50 m-auto'>
            <label>روز تولد</label>
            <select className='form-control form-select' onChange={(e) => {
                setState({
                ...state,
                birth_day : e.target.value
                });
            }}>
                {days.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>
                })}
            </select>

            <label>ماه تولد</label>
            <select className='form-control form-select' onChange={(e) => {
                setState({
                ...state,
                birth_month : e.target.value
                });
            }}>
                {months.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>
                })}
            </select>

            <label>سال تولد</label>
            <select className='form-control form-select' onChange={(e) => {
            setState({
              ...state,
              birth_year : e.target.value
            });
            }}>
                {years.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>;
                })}
            </select>
            <button type='button' className='btn border border-dark mx-2' onClick={(e) => {

                setState({
                    ...state,
                    step : state.step - 1
                });
            }}>قبلی</button>
            <button type="submit" className='btn border border-dark mx-2' onClick={(e) => {
                if(checkAge()){
                    setState({
                        ...state,
                        step : state.step + 1
                    });
                }else{
                    console.log('age not reached');
                }
            }}>بعدی</button>

    </div>
  )
}

export default BirthData