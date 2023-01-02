import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import Swal from 'sweetalert2';
import DateObject from 'react-date-object';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NextButton() {
  const {state,setState} = useContext(FormContext);
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

  const checkCondition = () => {
    switch (state.step) {
      case 1:
        return checkRelativeCondition()
        break;
        case 2:
          return checkJobCondition()
          break;
          case 3:
            return checkAgeCondition()
            break;
            case 4:
              return checkInsuranceLengthCondition()
              break;
              case 5:
                return checkPaymentMethodCondition()
                break;
                case 6:
                  return checkFirstPaymentCondition()
                  break;
                  default:
        break;
      }
    }
    
    const checkRelativeCondition = () => {
      return 1
    }
    
    const checkJobCondition = () => {
      return 1
    }
    
    const checkAgeCondition = () => {
      const date = new DateObject({ calendar: persian, locale: persian_fa })

      var age = date.year - state.birth_year;
      
      if(date.month.number < state.birth_month){
          age = age - 1;
      }else if(date.month.number == state.birth_month && date.day < state.birth_day){
          age = age - 1;
      }
        
      if(state.relativity == 1 && age < 18){
        Swal.fire('your age is under 18');
        return 0;
      }else if(age >= 65){
        Swal.fire('age should be under 65')
        return 0;
      }
      setState({
        ...state,
        age : age
    });
      return 1
    }
    
    const checkInsuranceLengthCondition = () => {
    return 1
  }

  const checkPaymentMethodCondition = () => {
    return 1
  }

  const checkFirstPaymentCondition = () => {
    if((state.payment_method == 0 || state.payment_method == 1 || state.payment_method == 2) && state.first_payment < 400000){
      Swal.fire('پرداختی سال اول باید بالای 400 هزار تومان باشد');
    } 
    else if(state.payment_method == 3 && state.first_payment < 600000){
      Swal.fire('پرداختی سال اول باید بالای 600 هزار تومان باشد');
    }else{
      postData();
    }
    return 1
  }

  return (
    <div>
        <button className='btn btn-primary mt-3 w-50' onClick={() => {
            if(checkCondition()){
              setState({
                ...state,
                step : state.step + 1
              });
            }
        }}>بعدی</button>
    </div>
  )
}

export default NextButton
