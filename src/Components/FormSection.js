import React , { useEffect, useState } from 'react'
import BirthData from './FirstPageForms/BirthData'
import FirstYearPayment from './FirstPageForms/FirstYearPayment'
import InsuranceLength from './FirstPageForms/InsuranceLength'
import JobForm from './FirstPageForms/JobForm'
import PaymentMethod from './FirstPageForms/PaymentMethod'
import RelativeForm from './FirstPageForms/RelativeForm'

const FormSection = () => {
    const[state, setState] = useState({
        count : 1,
        childAge : 1
    });

    const callBackFunction = (childData) => {
        console.log('clicked');
        setState({childAge : childData})
    }

    const nextState = (event) => {
        // console.log(2222);
        event.preventDefault();
        setState({
            count : state.count + 1,
        });
    }
    
    const previousState = (event) => {
        
        setState({
            count : state.count - 1,
        });
    }

    function showPreviousButton(){
        // if(state.count > 1)
            return <button type='button' className='btn border border-dark mx-2' onClick={previousState}>قبلی</button>
    }

    function showNextButton(data = null){
        console.log(data);
            return <button type="submit" className='btn border border-dark mx-2' onClick={nextState}>بعدی</button>
    }

    function returnForm(){
        if(state.count == 1)
            return <RelativeForm next={showNextButton}/>
        if(state.count == 2)
            return <JobForm next={showNextButton} previous={showPreviousButton}/>
        if(state.count == 3)
            return <BirthData next={showNextButton} previous={showPreviousButton} datapasser = {callBackFunction}/>
        if(state.count == 4)
            return <InsuranceLength next={showNextButton} previous={showPreviousButton} childAge = {state.childAge}/>
        if(state.count == 5)
            return <PaymentMethod next={showNextButton} previous={showPreviousButton} />
        if(state.count == 6)
            return <FirstYearPayment previous={showPreviousButton} />
    }

  return (
    <div>
        {
            returnForm()
        }
    </div>
  )
}

export default FormSection