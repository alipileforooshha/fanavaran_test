import React from 'react'
import InsuranceInfo from './SecondPageForms/InsuranceInfo'
import FirstYearForm from './SecondPageForms/FirstYearForm'
import CoverenceForm from './SecondPageForms/CoverenceForm'
import { FormContext } from '../Contexts/FormContext'

function SecondForm() {
  return (
      <div>
        <InsuranceInfo />
        <FirstYearForm />
        <CoverenceForm />
      </div>
  )
}

export default SecondForm
