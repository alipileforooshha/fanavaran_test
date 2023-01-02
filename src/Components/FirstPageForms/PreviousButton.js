import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext';

function PreviousButton() {
  const {state,setState} = useContext(FormContext);
  return (
    <div>
        <button className='btn btn-primary mt-3 w-50' onClick={() => {
            setState({
              ...state,
              step : state.step - 1
            });
        }}>قبلی</button>
    </div>
  )
}

export default PreviousButton
