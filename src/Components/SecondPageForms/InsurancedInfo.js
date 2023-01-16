import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'

function InsurancedInfo() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext)
    
    const inputs = [
        {
            label : 'نام بیمه شده',
            value : 'علی',
            disable : true
        },
        {
            label : 'نام خانوادگی بیمه شده',
            value : 'پیله فروشها',
            disable : true
        }
    ]
    return (
        <div className='my-4'>
            <h4 className='d-flex justify-content-start'>مشخصات بیمه گذار</h4>
            <div className='d-flex flex-wrap justify-content-center mt-4'>
                {inputs.map((input) => {
                    return(
                            <div className='mx-3' style={{
                                width : "35%"
                            }}>
                                <label className='text-nowrap align-self-end'>{input.label}</label>
                                <input value={input.value}
                                className='form-control'
                                disabled={input.disable}>
                                </input>
                            </div>
                        );
                })}
            </div>
        </div>
    )
}

export default InsurancedInfo