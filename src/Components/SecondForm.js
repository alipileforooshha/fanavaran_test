import React from 'react'
import InsuranceInfo from './SecondPageForms/InsuranceInfo'
import FirstYearForm from './SecondPageForms/FirstYearForm'
import CoverenceForm from './SecondPageForms/CoverenceForm'
import { FormContext } from '../Contexts/FormContext'

function SecondForm() {
  return (
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
  )
}

export default SecondForm
