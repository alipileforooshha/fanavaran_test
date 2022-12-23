import React from 'react'

const PaymentMethod = ({next, previous}) => {
  return (
    <form className='form-group m-4'>
        <select className='form-control form-select'>
            <option className='form-control'>یک قسط یک ساله</option>
            <option className='form-control'>دو قسط شش ماهه</option>
            <option className='form-control'>4 قسط سه ماهه</option>
            <option className='form-control'>12 قسط ماهانه</option>
        </select>
        {next()}
        {previous()}
    </form>
  )
}

export default PaymentMethod