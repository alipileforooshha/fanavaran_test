import React from 'react'

const JobForm = ({next, previous}) => {
  return (
    <form className='form-group m-4'>
        <label>استعلام بیمه عمر اندوخته دار امید</label>
        <select className='form-control form-select' placeholder='شغل اول'>
            <option className='text-secondary'>مورد اول</option>
            <option className='text-secondary'>مورد اول</option>
            <option className='text-secondary'>مورد اول</option>
            <option className='text-secondary'>مورد اول</option>
            <option className='text-secondary'>مورد اول</option>
            <option className='text-secondary'>مورد اول</option>
        </select>
        <input className='form-control' placeholder='شغل دوم (اختیاری)'></input>
        {next()}
        {previous()}
    </form>
  )
}

export default JobForm