import React, {useContext} from 'react'
import { FormContext } from '../../Contexts/FormContext';
import { useForm } from 'react-hook-form';

const RelativeForm = ({next}) => {

  const {state,setState} = useContext(FormContext);
  
  return (
    <div className='form-group m-4 d-flex flex-column w-50 m-auto'>
        <label>نسبت با بیمه شونده</label>
          <select className='text-dark form-control form-select' value={state.relativity} name='relativity' onChange={
              (event) => {
                console.log(event.target.value);
                // event.preventDefault();
                event.stopPropagation();
                setState({
                  ...state,
                  relativity : event.target.value});
              }
            }>
              <option className='text-dark' value={0}>نبست متقاضی با بیمه شونده</option>
              <option className='text-dark' value={1}>خودم</option>
              <option className='text-dark' value={2}>همسر</option>
              <option className='text-dark' value={3}>فرزند</option>
              <option className='text-dark' value={4}>پدر</option>
              <option className='text-dark' value={5}>مادر</option>
              <option className='text-dark' value={6}>خواهر</option>
              <option className='text-dark' value={7}>برادر</option>
              <option className='text-dark' value={8}>پدربزرگ</option>
              <option className='text-dark' value={9}>مادربزرگ</option>
          </select>
        {next()}
    </div>
  )
}

export default RelativeForm