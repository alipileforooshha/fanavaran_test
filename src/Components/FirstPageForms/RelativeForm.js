import React from 'react'

const RelativeForm = ({next, handleChange, values, name}) => {
  
  function relativechange(event){
    console.log(event.target.name);
    console.log(event.target.value);
    // this.handleChange(event['name'] = 'ali');
    handleChange();
  } 
  return (
    <form className='form-group m-4'>
        {name}
        <label>نسبت با بیمه شونده
          <select className='text-dark form-control form-select' name='relativity' defaultValue={values.relativity} onChange={handleChange("relativity")}>
              <option className='text-danger' value={1}>خودم</option>
              <option className='text-dark' value={2}>همسر</option>
              <option className='text-dark' value={3}>فرزند</option>
              <option className='text-dark' value={4}>پدر</option>
              <option className='text-dark' value={5}>مادر</option>
              <option className='text-dark' value={6}>خواهر</option>
              <option className='text-dark' value={7}>برادر</option>
              <option className='text-dark' value={8}>پدربزرگ</option>
              <option className='text-dark' value={9}>مادربزرگ</option>
          </select>
        </label>
        <button className='btn btn-primary mt-3'>بعدی</button>
    </form>
  )
}

export default RelativeForm