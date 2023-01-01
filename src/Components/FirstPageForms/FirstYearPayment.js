import React, { useContext, useState } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import Swal from 'sweetalert2';

const FirstYearPayment = ({prev}) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const {state, setState} = useContext(FormContext)
  const[input_value,setInput] = useState(0);
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto' >
        <label>مبلغ پرداختی سال اول</label>
        <input
            className='form-control' value={numberWithCommas(state.first_payment)} onChange={(e) => {
              setState({
                ...state,
                first_payment : parseInt(e.target.value.replace(/,/g, ''))
              });
              e.target.value = numberWithCommas(e.target.value.replace(/,/g, ''))
            
          }}></input>
        <button type="submit" className='btn btn-primary my-2' onClick={(e) => {
            if(state.payment_method == 0 || state.payment_method == 1 || state.payment_method == 2 && e.target.value < 400000){
              Swal.fire('پرداختی سال اول باید بالای 400 هزار تومان باشد');
            } 
            else if(state.payment_method == 3 && e.target.value < 600000){
              Swal.fire('پرداختی سال اول باید بالای 600 هزار تومان باشد');
            } 
        }}>مشاهده استعلام</button>
            
        <button type='button' className='btn btn-primary my-2' onClick={(e) => {
            setState({
                ...state,
                step : state.step - 1
            });
        }}>قبلی</button>
    </div>
    )
}

export default FirstYearPayment