import React, { useContext, useState } from 'react'
import BirthData from './FirstPageForms/BirthData';
import FirstYearPayment from './FirstPageForms/FirstYearPayment';
import InsuranceLength from './FirstPageForms/InsuranceLength';
import JobForm from './FirstPageForms/JobForm';
import PaymentMethod from './FirstPageForms/PaymentMethod';
import RelativeForm from './FirstPageForms/RelativeForm';
import { FormContext } from '../Contexts/FormContext';
import NextButton from './FirstPageForms/NextButton';
import PreviousButton from './FirstPageForms/PreviousButton';
const FormContainer = () => {
    const [page, setPage] = useState(1);

    const {state,setState} = useContext(FormContext)


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
    function returnForm(){
        if(state.step === 1)
            return <RelativeForm />
        if(state.step === 2)
            return <JobForm />
        if(state.step === 3)
            return <BirthData />
        if(state.step === 4)
            return <InsuranceLength />
        if(state.step === 5)
            return <PaymentMethod />
        if(state.step === 6)
            return <FirstYearPayment />
    }

    return (
        <div className='text-center'>
            {
                returnForm()
            }
            <NextButton />
            <PreviousButton />
            <div className='mt-4'>
                <h2>{state.step} : step</h2>
                <h2>{state.relativity} : relativity</h2>
                <h2>{state.first_job} : first_job</h2>
                <h2>{state.job_name} : job name</h2>
                <h2>{state.birth_day} : birth_day</h2>
                <h2>{state.birth_month} : birth_month</h2>
                <h2>{state.birth_year} : birth_year</h2>
                <h2>{state.insurance_length} : insurance_length</h2>
                <h2>{state.payment_method} : payment_method</h2>
                <h2>{state.first_payment} : first_payment</h2>
                <h2>{state.age} : age</h2>
            </div>
        </div>
  )
}

export default FormContainer