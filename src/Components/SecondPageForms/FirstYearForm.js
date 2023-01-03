import React from 'react'

function FirstYearForm() {
  const invest_increasement = [5,10,15,20,25];
  const death_invest = [5,10,15,20,25];
  function wwwww() {
    console.log('hey')
  }
  function eeeee(){
    console.log('2hey')
  }
  const inputs = [
    {
      label : 'سرمایه فوت به هر علت',
      name : "death_invest",
      type : "select",
      onclick : () => {wwwww()}
    },
    {
      label : 'افزایش سالانه سرمایه',
      name : "invest_increasement",
      type : "select",
      onclick : () => {eeeee()}
    },
  ];

  const death_invest_options = [
    {value : 5, title :" 5 برابر سرمایه فوت"},
    {value : 10, title : "10 برابر سرمایه فوت"},
    {value : 15, title : "15 برابر سرمایه فوت"},
    {value : 20, title : "20 برابر سرمایه فوت"},
    {value : 25, title : "25 برابر سرمایه فوت"}
  ];

  const death_invest_increment = [
    {value : 5, title :" 5"},
    {value : 10, title : "10"},
    {value : 15, title : "15"},
    {value : 20, title : "20"},
    {value : 25, title : "25"}
  ];

  return (
    <div className='border border-secondary m-2 p-3'>
      {inputs.map((value,index)=>{
        return <div>
          <label>{value.label}</label>
          <select type={value.type} name={value.name} className="form-select" onChange={value.onclick}>
            {index == 0 ? death_invest_options.map((value)=>{
              return <option value={value.value}>{value.title}</option>
            }) : ''}

            {index == 1 ? death_invest_increment.map((value)=>{
              return <option value={value.value}>{value.title}</option>
            }) : ''}
          </select>
        </div>;
      })}
    </div>
  )
}

export default FirstYearForm
