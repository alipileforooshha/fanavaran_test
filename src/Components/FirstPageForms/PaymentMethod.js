import React , {useContext} from 'react'
import { FormContext } from '../../Contexts/FormContext';

const PaymentMethod = ({next, prev}) => {
  const {state, setState} = useContext(FormContext)
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto d-inline mt-2'>
        <label>نحوه پرداخت</label>
        <select className='form-control form-select' value={state.payment_method} onChange={(e) => {
            setState({
              ...state,
              payment_method : e.target.value
            });
            console.log(state);
          }}>
            <option className='form-control' value={0}>نحوه پرداخت</option>
            <option className='form-control' value={1}>یک قسط یک ساله</option>
            <option className='form-control' value={2}>دو قسط شش ماهه</option>
            <option className='form-control' value={4}>4 قسط سه ماهه</option>
            <option className='form-control' value={12}>12 قسط ماهانه</option>
        </select>

    </div>
  )
}

export default PaymentMethod