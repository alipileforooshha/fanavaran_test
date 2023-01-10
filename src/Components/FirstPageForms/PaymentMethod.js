import React , {useContext} from 'react'
import { FormContext } from '../../Contexts/FormContext';

const PaymentMethod = ({next, prev}) => {
  const {state, setState} = useContext(FormContext)
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto d-inline mt-2'>
        <label className='fs-3 my-3'>نحوه پرداخت</label>
        <select className='form-control form-select fs-4' value={state.payment_method} onChange={(e) => {
            setState({
              ...state,
              payment_method : e.target.value
            });
            console.log(state);
          }}>
            <option className='form-control fs-4' value={0}>نحوه پرداخت</option>
            <option className='form-control fs-4' value={1}>یک قسط یک ساله</option>
            <option className='form-control fs-4' value={2}>دو قسط شش ماهه</option>
            <option className='form-control fs-4' value={4}>4 قسط سه ماهه</option>
            <option className='form-control fs-4' value={12}>12 قسط ماهانه</option>
        </select>

    </div>
  )
}

export default PaymentMethod