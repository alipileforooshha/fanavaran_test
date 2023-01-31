import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function Input({label, name, value, placeholder, error, onchange, index, register, required}) {
  

  if(name === 'birth_date')
    return(
      <div className='d-flex flex-column justify-content-between mt-3' key={index}>
          <div className='d-flex justify-content-start align-items-center mt-3'>
              <div className='d-flex justify-content-start'>
                  <label className='text-nowrap mx-4 d-flex'>{label}{required ? <p className='text-danger mr-0 ml-4 fs-4'>*</p> : ""}</label>
              </div>
              <div className='p-3'>
                <DatePicker
                  style={{fontSize : "22px" ,
                    height : "50px" ,
                    width:"250px" ,
                    border:'none', 
                    border:'2px solid rgb(0, 55, 255)' }}
                  calendar={persian}
                  locale={persian_fa} 
                  calendarPosition="bottom-right"
                  onChange={e => {onchange(e)}}
                />
              </div>
          </div>
          <p className='text-danger'>{error}</p>
      </div>
    )
  return (
    <div className='d-flex flex-column justify-content-between mt-3' key={index}>
        <div className='d-flex justify-content-between mt-3'>
            <div className='d-flex justify-content-start'>
                <label className='text-nowrap mx-4 d-flex'>{label}{required ? <p className='text-danger mr-0 ml-4 fs-4'>*</p> : ""}</label>
            </div>
            <input name={name}
                style={error && {borderColor : "red", outline : "red", boxShadow : ""}}
                className='form-control'
                {...register(name)}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onchange(e)}
                >
            </input>
        </div>
        <p className='text-danger'>{error}</p>
    </div>
  )
}

export default Input