import React, { useContext, useState } from 'react'
import InsuranceInfo from './SecondPageForms/InsuranceInfo'
import FirstYearForm from './SecondPageForms/FirstYearForm'
import CoverenceForm from './SecondPageForms/CoverenceForm'
import { FormContext } from '../Contexts/FormContext'
import { SecondFormContext } from '../Contexts/SecondFormContext'
function SecondForm() {
  const {state,setState} = useContext(FormContext);
  const [secondForm,setSecondForm] = useState({
    ...state,
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
  return (
    <SecondFormContext.Provider value={{secondForm,setSecondForm}}>
      <div className='row'>
        <div className='text-center col'>
          <InsuranceInfo />
          <FirstYearForm />
          <CoverenceForm />
        </div>
        <div className='col-7'>
          <h2>
            most of the page
          </h2>
        </div>

      </div>
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
