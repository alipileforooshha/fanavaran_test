import React, { useState } from 'react'
import context from '../../Contexts/FormContext';

const BirthData = ({next, previous}) => {
    const [year,setYear] = useState({
        age : 0
    });
    const changeAge = (e) => {
        console.log(e.target.value)
        console.log('Entered');
        const age = e.target.value;
        <context.Provider value = {{data : age}}>

        </context.Provider>
    }
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
    22,23,24,25,26,27,28,29,30];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    const years = (aroundNumber) => [...Array(66).keys()].map(i => i + aroundNumber);
  return (
    <form className='form-grou m-4'>
            <label>روز تولد</label>
            <select className='form-control form-select'>
                {days.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>
                })}
            </select>
            <label>ماه تولد</label>
            <select className='form-control form-select'>
                {months.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>
                })}
            </select>
            <label>سال تولد</label>
            <select className='form-control form-select' onClick={(e) => changeAge(e)}>
                {years(1336).map((value, index) => {
                    return <option key={index} className='form-control' >{value}</option>;
                })}
            </select>
            {next(year.age)}
            {previous()}
    </form>
  )
}

export default BirthData