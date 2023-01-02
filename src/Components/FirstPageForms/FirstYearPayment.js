import React, { useContext, useState } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import Swal from 'sweetalert2';
import { Axios } from 'axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FirstYearPayment = ({prev}) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const {state, setState} = useContext(FormContext)
  const[input_value,setInput] = useState(0);
  const navigate = useNavigate();
  
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