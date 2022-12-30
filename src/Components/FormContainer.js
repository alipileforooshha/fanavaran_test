import React, { useContext, useState } from 'react'
import BirthData from './FirstPageForms/BirthData';
import FirstYearPayment from './FirstPageForms/FirstYearPayment';
import InsuranceLength from './FirstPageForms/InsuranceLength';
import JobForm from './FirstPageForms/JobForm';
import PaymentMethod from './FirstPageForms/PaymentMethod';
import RelativeForm from './FirstPageForms/RelativeForm';
import { FormContext } from '../Contexts/FormContext';

const FormContainer = () => {
    
    const[state,setState] = useState({
        step : 1,
        relativity : 'test',
        first_job : '',
        second_job : '',
        birth_day : '',
        birth_month : '',
        birth_year : '',
        age : 2,
        insurance_length : '',
        payment_method : '',
        first_payment : '',
    });
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
            <h2>{state.relativity}</h2>
            <h2>{state.first_job}</h2>
            <h2>{state.birth_day}</h2>
            <h2>{state.birth_month}</h2>
            <h2>{state.birth_year}</h2>
            <h2>{state.insurance_length}</h2>
            <h2>{state.payment_method}</h2>
            <h2>{state.first_payment}</h2>
            <h2>{state.age}</h2>
        </FormContext.Provider>
  )
}

export default FormContainer