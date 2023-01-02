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
  function postData(){
    axios.post('http://127.0.0.1:8000/api/jobs',{
        step : state.step,
        relativity : state.relativity,
        first_job : state.first_job,
        second_job : state.second_job,
        job_name : state.job_name,
        birth_day : state.birth_day,
        birth_month : state.birth_month,
        birth_year : state.birth_year,
        age : state.age,
        insurance_length : state.insurance_length,
        payment_method : state.payment_method,
        first_payment : state.first_payment,
    }).then((response)=>{
      console.log(response.data);
      navigate('/second');
    }).catch((error)=>{
      console.log(error);
    })
  }
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
            if((state.payment_method == 0 || state.payment_method == 1 || state.payment_method == 2) && state.first_payment < 400000){
              Swal.fire('پرداختی سال اول باید بالای 400 هزار تومان باشد');
            } 
            else if(state.payment_method == 3 && state.first_payment < 600000){
              Swal.fire('پرداختی سال اول باید بالای 600 هزار تومان باشد');
            }else{
              postData();
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