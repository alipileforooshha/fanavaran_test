import React from 'react'
import InsuranceInfo from './SecondPageForms/InsuranceInfo'
import FirstYearForm from './SecondPageForms/FirstYearForm'
import CoverenceForm from './SecondPageForms/CoverenceForm'
import { FormContext } from '../Contexts/FormContext'

function SecondForm() {
  return (
    <div>
      <div className='col d-inline p-0'>
        <InsuranceInfo />
        <FirstYearForm />
        <CoverenceForm />
      </div>

    </div>
  )
}

export default SecondForm
