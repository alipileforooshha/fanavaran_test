import React from 'react'

function Input({label, name, value, placeholder, error, onchange, index, register, required}) {
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
                onChange={(e) => onchange(e)}>
            </input>
        </div>
        <p className='text-danger'>{error}</p>
    </div>
  )
}

export default Input