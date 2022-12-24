import React, { useState } from 'react'
import BirthData from './FirstPageForms/BirthData';
import FirstYearPayment from './FirstPageForms/FirstYearPayment';
import InsuranceLength from './FirstPageForms/InsuranceLength';
import JobForm from './FirstPageForms/JobForm';
import PaymentMethod from './FirstPageForms/PaymentMethod';
import RelativeForm from './FirstPageForms/RelativeForm';

const FormContainer = () => {
    const[state,setState] = useState({
        step : 1,
        relativity : 'test',
        first_job : '',
        second_job : '',
        birth_day : '',
        birth_month : '',
        birth_year : '',
        insurance_length : '',
        payment_method : '',
        first_payment : '',
    });
    // setState({
    //     relativity: "changed"
    // });
    // console.log(state)
    const {relativity, first_job, second_job, birth_day, birth_month, birth_year, insurance_length, payment_method, first_payment} = state;

    const values = {relativity, first_job, second_job, birth_day, birth_month, birth_year, insurance_length, payment_method, first_payment};
    // console.log(values);
    const prevStep = () => {
        setState({step : state.step - 1});
    }

    const nextStep = () => {
        setState({step : state.step + 1});
    }

    const handleChange = input => e => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(input);
        console.log(setState({ [input] : e.target.value}));
        return;
        // console.log(state.relativity);
    }

    function returnForm(){
        if(state.step === 1)
            return <RelativeForm next={nextStep} handleChange={handleChange} values = {values} name={"ali"}/>
        if(state.step === 2)
            return <JobForm next={nextStep} previous={prevStep} handleChange={handleChange} values = {values}/>
        if(state.step === 3)
            return <BirthData next={nextStep} previous={prevStep} handleChange={handleChange} values = {values}/>
        if(state.step === 4)
            return <InsuranceLength next={nextStep} previous={prevStep} handleChange={handleChange} values = {values}/>
        if(state.step === 5)
            return <PaymentMethod next={nextStep} previous={prevStep} handleChange={handleChange} values = {values}/>
        if(state.step === 6)
            return <FirstYearPayment previous={prevStep} handleChange={handleChange} values = {values}/>
    }

    return (
    <div>
        {returnForm()}
    </div>
  )
}

export default FormContainer
