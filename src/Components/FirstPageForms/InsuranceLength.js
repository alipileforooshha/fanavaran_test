import React from 'react'

const InsuranceLength = ({childAge, next, previous}) => {
    
    return (
    <form className='form-group m-4'>
        {childAge}
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