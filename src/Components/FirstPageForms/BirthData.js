import React, { useState, useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import moment from 'jalali-moment';
import { persianDate } from 'persian-date/dist/persian-date';
const BirthData = ({next, prev}) => {
    // console.log(persianDate())
    console.log(new Intl.DateTimeFormat('fa-IR').format('fa'))
    const {state,setState} = useContext(FormContext);
    const [year,setYear] = useState({
        age : 0
    });
    const changeAge = (e) => {
        console.log(e.target.value)
        console.log('Entered');
        const age = e.target.value;
    }
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
    22,23,24,25,26,27,28,29,30];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    const years = state.relativity == 1 ? Array.from({length: 10}, (_, i) => i + 1332) : Array.from({length: 10}, (_, i) => i + 1)
  return (
    <form className='form-grou m-4 d-flex flex-column w-50 m-auto'>
            <label>روز تولد</label>
            <select className='form-control form-select' onChange={(e) => {
                setState({
                ...state,
                birth_day : e.target.value
                })
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
                })
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
            console.log(state);
          }}>
                {years.map((value, index) => {
                    return <option key={index} className='form-control' >{value}</option>;
                })}
            </select>
            {next()}
            {prev()}
    </form>
  )
}

export default BirthData