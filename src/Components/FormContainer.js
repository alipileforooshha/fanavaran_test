import React, { useContext, useState } from 'react'
import BirthData from './FirstPageForms/BirthData';
import FirstYearPayment from './FirstPageForms/FirstYearPayment';
import InsuranceLength from './FirstPageForms/InsuranceLength';
import JobForm from './FirstPageForms/JobForm';
import PaymentMethod from './FirstPageForms/PaymentMethod';
import RelativeForm from './FirstPageForms/RelativeForm';
import { FormContext } from '../Contexts/FormContext';

const FormContainer = () => {
    const [page, setPage] = useState(1);

    const[state,setState] = useState({
        step : 1,
        relativity : 1,
        first_job : 1,
        second_job : 1,
        birth_day : 1,
        birth_month : 1,
        birth_year : 1332,
        age : 2,
        insurance_length : 5,
        payment_method : 1,
        first_payment : '',
    });

    const tabs = [
        {
          title: 'نسبت',
          pageNo: 1
          // onPress: e => console.log(e)
        },
        {title: 'شغل', pageNo: 2},
        {title: 'تاریخ تولد', pageNo: 3},
        {title: 'مدت بیمه نامه', pageNo: 4},
        {title: 'نوع پرداخت', pageNo: 5},
        {title: 'اولین پرداخت', pageNo: 6},
      ];
    function next() {
        return <button className='btn btn-primary mt-3' onClick={() => {
            setState({
              ...state,
              step : state.step + 1
            });
            }}>بعدی</button>;
    }

    function prev() {
        return <button className='btn btn-primary mt-3' onClick={() => {
            setState({
              ...state,
              step : state.step - 1
            });
            }}>قبلی</button>;
    }
    
    function returnForm(){
        if(state.step === 1)
            return <RelativeForm next={next}/>
        if(state.step === 2)
            return <JobForm next={next} prev={prev}/>
        if(state.step === 3)
            return <BirthData next={next} prev={prev}/>
        if(state.step === 4)
            return <InsuranceLength next={next} prev={prev}/>
        if(state.step === 5)
            return <PaymentMethod next={next} prev={prev}/>
        if(state.step === 6)
            return <FirstYearPayment prev={prev}/>
    }

    return (
        <FormContext.Provider value = {{state,setState}}>
            {
                returnForm()
            }
            <h2>{state.relativity} : relativity</h2>
            <h2>{state.first_job} : first_job</h2>
            <h2>{state.birth_day} : birth_day</h2>
            <h2>{state.birth_month} : birth_month</h2>
            <h2>{state.birth_year} : birth_year</h2>
            <h2>{state.insurance_length} : insurance_length</h2>
            <h2>{state.payment_method} : payment_method</h2>
            <h2>{state.first_payment} : first_payment</h2>
            <h2>{state.age} : age</h2>
        </FormContext.Provider>
  )
}

export default FormContainer