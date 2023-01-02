import React, { useState, useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import DatePicker, { DateObject } from 'react-multi-date-picker';

const BirthData = () => {
    const {state,setState} = useContext(FormContext);
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    const years = Array.from({length: 1000}, (_, i) => i + 1332);
    
    return (
        <div className='form-grou m-4 d-flex flex-column w-50 m-auto'>
                <label>روز تولد</label>
                <select className='form-control form-select' value={state.birth_day} onChange={(e) => {
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
                <select className='form-control form-select' value={state.birth_month} onChange={(e) => {
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
                <select className='form-control form-select' value={state.birth_year} onChange={(e) => {
                setState({
                ...state,
                birth_year : e.target.value
                });
                }}>
                    {years.map((value, index) => {
                        return <option key={index} className='form-control'>{value}</option>;
                    })}
                </select>
        </div>
  )
}

export default BirthData