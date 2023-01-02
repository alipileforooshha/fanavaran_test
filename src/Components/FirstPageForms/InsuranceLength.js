import React, {useContext} from 'react'
import {FormContext} from '../../Contexts/FormContext'

const InsuranceLength = ({next, prev}) => {
    const {state,setState} = useContext(FormContext);
    const end = 70 - state.age>30 ? 30 : 70 - state.age;
    const length = [...Array(end - 5 + 1).keys()].map(x => x + 5);
    console.log('state age is',state.age);

    return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto d-inline mt-4'>
        <label>مدت بیمه نامه</label>
        <label>{state.age ? state.age : 10}</label>
        <select className='form-control form-select' defaultValue={state.insurance_length} onChange={(e) => {
            setState({
              ...state,
              insurance_length : e.target.value
            });
            console.log(state);
          }}>
            {length.map((value, index) => {
                    return <option key={index} className='form-control'>{value}</option>
                })}
        </select>
    </div>
  )
}

export default InsuranceLength