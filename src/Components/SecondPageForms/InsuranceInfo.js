import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../Contexts/FormContext'
import RelativeForm from '../FirstPageForms/RelativeForm'
import JobForm from '../FirstPageForms/JobForm'
import BirthData from '../FirstPageForms/BirthData'
import InsuranceLength from '../FirstPageForms/InsuranceLength'
import FirstYearPayment from '../FirstPageForms/FirstYearPayment'
import PaymentMethod from '../FirstPageForms/PaymentMethod'

function InsuranceInfo() {
    const {state, setState} = useContext(FormContext)
    const [installment, setInstallment] = useState(state.first_payment);
    const [incrementPercent, setIncrementPercent] = useState([]);
    useEffect = (() => {
        // setInstallmentValue();
        let increments = [];

        for(let i = 0; i<26 ; i++){
            if(i%5 == 0)
                increments.push(i)
        }
        // setIncrementPercent(increments);
    });
    const setInstallmentValue = () => {
        switch (state.payment_method) {
            case 0:
                setInstallment(state.first_payment / 1)
                break;
            case 1:
                setInstallment(state.first_payment / 2)
                break;
            case 2:
                setInstallment(state.first_payment / 4)
                break;
            case 3:
                setInstallment(state.first_payment / 12)
                break;
            default:
                break;
        }
    }
    return (
        <div className='border border-dark text-center'>
            <RelativeForm />
            <JobForm />
            <BirthData />
            <InsuranceLength />
            <PaymentMethod />
            {/* <input className='form-control w-50 mt-4' value={state.first_payment / state.payment_method } readOnly={true} onChange={(e) => {
                setInstallment(0);
                e.target.value = installment;
            }}>
            </input> */}
            {/* <label>افزایش سالانه حق بیمه</label>
            <select className='form-control w-50 mt-4 text-center'>
                {incrementPercent && incrementPercent.map((element) => {
                    return <option value={element}>{element}</option>
                })}
            </select> */}
            <FirstYearPayment />
        </div>
  )
}

export default InsuranceInfo
