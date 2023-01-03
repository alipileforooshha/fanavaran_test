import React, { useState } from 'react'

function CoverenceForm() {
  
  const [showForms,setShowForms] = useState(false);
  
  const inputs = [
    {
      label : 'فوت بر اثر حادثه',
      name : "death_by_accident",
      disable : false,
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
      onchange : (e) => {
        if(e.target.value > 0){
          setShowForms(false)
        }else if(e.target.value == 0){
          setShowForms(true)
        }
      }      
    },
    {
      label : 'نقص عضو و از کار افتادگی',
      name : "disability",
      disable : showForms,
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
      disable : showForms,
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
      disable : showForms,
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
      disable : showForms,
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

  return (
    <div className='border border-secondary p-3 m-2'>
      {inputs.map((value,index)=>{
        return <div>
          <label>{value.label}</label>
          <select type={value.type} name={value.name} className="form-select" onChange={value.onchange} disabled={value.disable}>
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

export default CoverenceForm
