import React, { useContext } from 'react'
import e from 'react-date-object/calendars/persian';
import { FormContext } from '../../Contexts/FormContext';
import { SecondFormContext } from '../../Contexts/SecondFormContext';
function FirstYearForm() {
  
  const {state, setState} = useContext(FormContext);
  const {secondForm, setSecondForm} = useContext(SecondFormContext);
  
  const inputs = [
    {
      label : 'سرمایه فوت به هر علت',
      name : "death_invest",
      type : "select",
      value : secondForm.death_invest,
      onchange : (e) => {
        setSecondForm({
          ...secondForm,
          death_invest : e.target.value
        })
      },
      options : [
        {value : 5, title :" 5 برابر سرمایه فوت"},
        {value : 10, title : "10 برابر سرمایه فوت"},
        {value : 15, title : "15 برابر سرمایه فوت"},
        {value : 20, title : "20 برابر سرمایه فوت"},
        {value : 25, title : "25 برابر سرمایه فوت"}
      ]
    },
    {
      label : 'افزایش سالانه سرمایه',
      name : "invest_increasement",
      type : "select",
      value : secondForm.invest_increasement,
      onchange : (e) => {
        setSecondForm({
          ...secondForm,
          invest_increasement : e.target.value
        })
      },
      options : [
        {value : 5, title :"5%"},
        {value : 10, title : "10%"},
        {value : 15, title : "15%"},
        {value : 20, title : "20%"},
        {value : 25, title : "25%"}
      ]
    },
  ];

  return (
    <div className='border border-secondary m-2 p-3'>
      {inputs.map((value,index)=>{
        return <div>
          <label>{value.label}</label>
          <select type={value.type} name={value.name} className="form-select" onChange={value.onchange}>
            {value.options.map((option) => {
              return <option value={option.value}>
                {option.title}
              </option>
            })}
          </select>
        </div>;
      })}
    </div>
  )
}

export default FirstYearForm
