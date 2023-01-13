import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'

function InsurancesInfo() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext)
    
    const inputs = [
        {
            label : 'نام بیمه شده',
            value : secondForm.first_name
        }
    ]
    return (
        <div>

        </div>
    )
}

export default InsurancesInfo