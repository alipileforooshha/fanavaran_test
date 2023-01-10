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
    <div className='form-group m-4 d-flex flex-column w-50 m-auto mt-4' >
        <label className='fs-3 my-3'>مبلغ پرداختی سال اول</label>
        <input
            className='form-control fs-4' value={numberWithCommas(state.first_payment)} onChange={(e) => {
              setState({
                ...state,
                first_payment : parseInt(e.target.value.replace(/,/g, ''))
              });
              e.target.value = numberWithCommas(e.target.value.replace(/,/g, ''))  
        }}></input>
    </div>
    )
}

export default FirstYearPayment