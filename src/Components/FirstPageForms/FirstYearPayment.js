import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';

const FirstYearPayment = ({prev}) => {
  const {state, setState} = useContext(FormContext)
  return (
    <form className='form-group m-4 d-flex flex-column w-50 m-auto' >
        <label>مبلغ پرداختی سال اول</label>
        <input className='form-control' onChange={(e) => {
            setState({
              ...state,
              first_payment : e.target.value
            });
            console.log(state);
          }}></input>
        {prev()}
    </form>
    )
}

export default FirstYearPayment