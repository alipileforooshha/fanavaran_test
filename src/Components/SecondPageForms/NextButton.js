import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext';

function NextButton() {
    const {secondForm, setSecondForm } = useContext(SecondFormContext);
    function checkCondition(){
        switch (secondForm.second_step) {
            case 1:
                setSecondForm({
                    ...secondForm,
                    second_step : secondForm.second_step + 1
                });
                break;
        
            case 2:
                setSecondForm({
                    ...secondForm,
                    second_step : secondForm.second_step + 1
                });
                break;
        
            case 3:
                setSecondForm({
                    ...secondForm,
                    second_step : secondForm.second_step + 1
                });
                break;
        
            case 4:
                setSecondForm({
                    ...secondForm,
                    second_step : secondForm.second_step + 1
                });
                break;
        
            case 5:
                return 'سفارش نهایی'
                break;
            default:
                break;
        }
    }
    function innerText(){
        switch (secondForm.second_step) {
            case 1:
                return 'سفارش نهایی'
                break;
        
            case 2:
                return 'تایید نهایی'
                break;
        
            case 3:
                return 'کیس سوم'
                break;
        
            case 4:
                return 'کیس سوم'
                break;
        
            case 5:
                return 'سفارش نهایی'
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <button type="submit"  className='btn btn-success w-100 m-2' >
                {innerText()}
            </button>
        </div>
  )
}

export default NextButton