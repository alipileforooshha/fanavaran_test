import React from 'react'

const RelativeForm = ({next}) => {
  return (
    <form className='form-group m-4'>
        <label>نسبت با بیمه شونده</label>
        <select className='text-dark form-control form-select'>
            <option className='text-danger'>خودم</option>
            <option className='text-dark'>همسر</option>
            <option className='text-dark'>فرزند</option>
            <option className='text-dark'>پدر</option>
            <option className='text-dark'>مادر</option>
            <option className='text-dark'>خواهر</option>
            <option className='text-dark'>برادر</option>
            <option className='text-dark'>پدربزرگ</option>
            <option className='text-dark'>مادربزرگ</option>
        </select>
        {next()}
    </form>
  )
}

export default RelativeForm