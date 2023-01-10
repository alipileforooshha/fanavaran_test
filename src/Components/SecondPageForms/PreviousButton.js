import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'

function PreviousButton() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext);
    
    const prev = () => {
        if(secondForm.second_step > 1){
            setSecondForm({
                ...secondForm,
                second_step : secondForm.second_step - 1
            });
        }
    }

    return (
        <div>
            <button className='btn btn-danger w-100' onClick={() => {
                prev()
            }}>
                قبلی
            </button>
        </div>
  )
}

export default PreviousButton