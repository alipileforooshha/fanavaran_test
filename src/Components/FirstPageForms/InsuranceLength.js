import React from 'react'
import context from '../../Contexts/FormContext'
const InsuranceLength = ({childAge, next, previous}) => {
    const data = React.useContext(context);
    return (
    <form className='form-group m-4'>
        
        {/* {data.data} */}
        <label>مدت بیمه نامه</label>
        <select className='form-control form-select'>
            <option className='form-control'>1</option>
            <option className='form-control'>2</option>
            <option className='form-control'>3</option>
            <option className='form-control'>4</option>
            <option className='form-control'>5</option>
            <option className='form-control'>6</option>
        </select>
        {next()}
        {previous()}
    </form>
  )
}

export default InsuranceLength