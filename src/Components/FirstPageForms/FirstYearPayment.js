import React from 'react'

const FirstYearPayment = ({previous}) => {
  return (
    <form className='form-group m-4'>
        <label>مبلغ پرداختی سال اول</label>
        <input className='form-control'></input>
        {previous()}
    </form>
    )
}

export default FirstYearPayment