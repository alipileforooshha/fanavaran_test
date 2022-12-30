import React , {useContext} from 'react'
import { FormContext } from '../../Contexts/FormContext';

const PaymentMethod = ({next, prev}) => {
  const {state, setState} = useContext(FormContext)
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto'>
        <select className='form-control form-select' onChange={(e) => {
            setState({
              ...state,
              payment_method : e.target.value
            });
            console.log(state);
          }}>
            <option className='form-control'>یک قسط یک ساله</option>
            <option className='form-control'>دو قسط شش ماهه</option>
            <option className='form-control'>4 قسط سه ماهه</option>
            <option className='form-control'>12 قسط ماهانه</option>
        </select>
        {next()}
        {prev()}
    </div>
  )
}

export default PaymentMethod