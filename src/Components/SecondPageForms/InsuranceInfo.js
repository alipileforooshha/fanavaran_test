import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext'
import RelativeForm from '../FirstPageForms/RelativeForm'

function InsuranceInfo() {
    const {state, setState} = useContext(FormContext)
    return (
        <div>
            <RelativeForm />
        </div>
  )
}

export default InsuranceInfo
