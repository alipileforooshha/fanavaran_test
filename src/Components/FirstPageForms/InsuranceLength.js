import React, {useContext} from 'react'
import {FormContext} from '../../Contexts/FormContext'

const InsuranceLength = ({next, prev}) => {
    const {state,setState} = useContext(FormContext);
    return (
    <form className='form-group m-4 d-flex flex-column w-50 m-auto'>
        
        {/* {data.data} */}
        <label>مدت بیمه نامه</label>
        <select className='form-control form-select' onChange={(e) => {
            setState({
              ...state,
              insurance_length : e.target.value
            });
            console.log(state);
          }}>
            <option className='form-control'>1</option>
            <option className='form-control'>2</option>
            <option className='form-control'>3</option>
            <option className='form-control'>4</option>
            <option className='form-control'>5</option>
            <option className='form-control'>6</option>
        </select>
        {next()}
        {prev()}
    </form>
  )
}

export default InsuranceLength