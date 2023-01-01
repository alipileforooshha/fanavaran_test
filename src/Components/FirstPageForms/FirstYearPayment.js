import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import Swal from 'sweetalert2';

const FirstYearPayment = ({prev}) => {
  const {state, setState} = useContext(FormContext)
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto' >
        <label>مبلغ پرداختی سال اول</label>
        <input className='form-control' onChange={(e) => {
            setState({
              ...state,
              first_payment : e.target.value
            });
            console.log(state);
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