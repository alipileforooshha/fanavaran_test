import React, { useContext, useState } from 'react'
import { FormContext } from '../../Contexts/FormContext';
import { SecondFormContext } from '../../Contexts/SecondFormContext';

function CoverenceForm() {
  const {state, setState} = useContext(FormContext);
  const {secondForm, setSecondForm} = useContext(SecondFormContext);
  const [showForms,setShowForms] = useState(false);
  
  const inputs = [
    {
      label : 'فوت بر اثر حادثه',
      name : "death_by_accident",
      disable : false,
      value : secondForm.death_by_accident,
      onchange : (e) => {
        if(e.target.value > 0){
          setShowForms(true)
          setSecondForm({...secondForm,
            death_by_accident : e.target.value});
          }else if(e.target.value == 0){
            setShowForms(false)
            setSecondForm({...secondForm,
              death_by_accident : e.target.value,
              disability : 0,
              medical_cost_by_accident : 0,
              extra_dangers_package : 0,
              hospitalization_cost : 0,
              clearance_to_pay_insurance : 0,
              special_illness : 0});
          }
      },  
      options : [
        {
          value : 0,
          title : 'مایل به دریافت نیستم'
        },
        {
          value : 1,
          title : '1 برابر سرمایه فوت'
        },
        {
          value : 2,
          title : '2 برابر سرمایه فوت'
        },
        {
          value : 3,
          title : '3 برابر سرمایه فوت'
        },
        {
          value : 4,
          title : '4 برابر سرمایه فوت'
        },
      ],
    },
    {
      label : 'نقص عضو و از کار افتادگی',
      name : "disability",
      disable : !showForms,
      value : secondForm.disability,
      onchange : (e) => {
        setSecondForm({...secondForm,
          disability : e.target.value});
      },
      options : [
        {
          value : 0,
          title : 'مایل به دریافت نیستم'
        },
        {
          value : 1,
          title : '1 برابر سرمایه فوت'
        },
        {
          value : 2,
          title : '2 برابر سرمایه فوت'
        },
        {
          value : 3,
          title : '3 برابر سرمایه فوت'
        },
        {
          value : 4,
          title : '4 برابر سرمایه فوت'
        },
      ]
    },
    {
      label : 'هزینه پزشکی ناشی از حادثه',
      name : "medical_cost_by_accident",
      disable : !showForms,
      value : secondForm.medical_cost_by_accident,
      onchange : (e) => {
        setSecondForm({...secondForm,
          medical_cost_by_accident : e.target.value});
      },
      options : [
        {
          value : 1,
          title : "بله"
        },
        {
          value : 0,
          title : "خیر"
        },
      ]
    },
    {
      label : 'بسته تکمیلی خطرات اضافی',
      name : "extra_dangers_package",
      disable : !showForms,
      value : secondForm.extra_dangers_package,
      onchange : (e) => {
        setSecondForm({...secondForm,
          extra_dangers_package : e.target.value});
      },
      options : [
        {
          value : 1,
          title : "بله"
        },
        {
          value : 0,
          title : "خیر"
        },
      ]
    },
    {
      label : 'غرامت بستری',
      name : "hospitalization_cost",
      disable : !showForms,
      value : secondForm.hospitalization_cost,
      onchange : (e) => {
        setSecondForm({...secondForm,
          hospitalization_cost : e.target.value});
      },
      options : [
        {
          value : 1,
          title : "بله"
        },
        {
          value : 0,
          title : "خیر"
        },
      ]
    },
    {
      label : 'معافیت از پرداخت حق بیمه',
      name : "clearance_to_pay_insurance",
      disable : false,
      value : secondForm.clearance_to_pay_insurance,
      onchange : (e) => {
        setSecondForm({...secondForm,
          clearance_to_pay_insurance : e.target.value});
      },
      options : [
        {
          value : 1,
          title : "بله"
        },
        {
          value : 0,
          title : "خیر"
        },
      ]
    },
    {
      label : 'امراض خاص',
      name : "special_illness",
      disable : false,
      value : secondForm.special_illness,
      onchange : (e) => {
        setSecondForm({...secondForm,
          special_illness : e.target.value});
      },
      options : [
        {
          value : 0,
          title : 'مایل به دریافت نیستم'
        },
        {
          value : 1,
          title : '1 برابر سرمایه فوت'
        },
        {
          value : 2,
          title : '2 برابر سرمایه فوت'
        },
      ]
    },
  ]

  const expertsRecommendation = () =>{
    inputs[2].value = 2;
    setShowForms(false);
  }
  return (
    <div className='border border-secondary p-3 m-2'>
      <button className='btn btn-primary' onClick={() => expertsRecommendation()}>
        پیشنهاد کارشناسان
      </button>
      {inputs.map((value,index)=>{
        return <div key={index}>
          <label>{value.label}</label>
          <select type={value.type} name={value.name} value={value.value} className="form-select" onChange={value.onchange} disabled={value.disable}>
            {value.options.map((option,index) => {
              return <option value={option.value} key={index}>
                {option.title}
              </option>
            })}
          </select>
        </div>;
      })}
    </div>
  )
}

export default CoverenceForm
