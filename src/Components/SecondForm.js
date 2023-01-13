import React, { useContext, useState } from 'react'
import InsuranceInfo from './SecondPageForms/InsuranceInfo'
import FirstYearForm from './SecondPageForms/FirstYearForm'
import CoverenceForm from './SecondPageForms/CoverenceForm'
import { FormContext } from '../Contexts/FormContext'
import { SecondFormContext } from '../Contexts/SecondFormContext'
import NextButton from './SecondPageForms/NextButton'
import PreviousButton from './SecondPageForms/PreviousButton'
import MedicalCondition from './SecondPageForms/MedicalCondition'
function SecondForm() {
  const {state,setState} = useContext(FormContext);
  const [secondForm,setSecondForm] = useState({
    ...state,
    second_step : 2,
    death_invest : 5,
    invest_increasement : 5,
    death_by_accident : 0,
    disability : 0,
    medical_cost_by_accident : 0,
    extra_dangers_package : 0,
    hospitalization_cost : 0,
    clearance_to_pay_insurance : 0,
    special_illness : 0,
  });
  
  function formBuiler() {
    if(secondForm.second_step == 1){
      return <div>
        <div className='text-center col'>
          <InsuranceInfo />
          <FirstYearForm />
          <CoverenceForm />
          <NextButton />
        </div>
      </div>
    }
    if(secondForm.second_step == 2){
      return <div>
        <div className='text-center col'>
          <MedicalCondition />
        </div>
      </div>
    }
    if(secondForm.second_step == 3){
      return <div>
        <div className='text-center col'>
          <MedicalCondition formDisable={true} />
        </div>
      </div>
    }
    if(secondForm.second_step == 4){
      return <div>
        <div className='text-center col'>
          <h3>fourth page</h3>
        </div>
      </div>
    }
  }
  return (
    <SecondFormContext.Provider value={{secondForm,setSecondForm}}>
      <div className='row'>
        {formBuiler()}
      </div>
      <div className='d-flex justify-content-around w-100'>
        <PreviousButton />
        {/* <NextButton /> */}
      </div>
      <h2>{secondForm.second_step} : second_step</h2>
      <h2>{secondForm.death_invest} : death_invest</h2>
      <h2>{secondForm.invest_increasement} : invest_increasement</h2>
      <h2>{secondForm.death_by_accident} : death_by_accident</h2>
      <h2>{secondForm.disability} : disability</h2>
      <h2>{secondForm.medical_cost_by_accident} : medical_cost_by_accident</h2>
      <h2>{secondForm.extra_dangers_package} : extra_dangers_package</h2>
      <h2>{secondForm.hospitalization_cost} : hospitalization_cost</h2>
      <h2>{secondForm.clearance_to_pay_insurance} : clearance_to_pay_insurance</h2>
      <h2>{secondForm.special_illness} : special_illness</h2>
    </SecondFormContext.Provider>
  )
}

export default SecondForm
