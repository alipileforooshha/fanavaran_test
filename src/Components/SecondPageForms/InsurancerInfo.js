import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'

function InsurancerInfo() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext);

    const datas = [
        {
            label : 'تاریخ تولد بیمه گذار',
            value : secondForm.birth_year,
            disable : true,
        },
        {
            label : 'کد ملی بیمه گذار',
            value : secondForm.ssn,
            disable : true,
        },
        {
            label : 'نام بیمه گذار',
            value : secondForm.first_name,
            disable : true,
        },
        {
            label : 'نام خانوادگی بیمه گذار',
            value : secondForm.last_name,
            disable : true,
        }
    ];

    return (
        <div>
            <h4>مشخصات بیمه گذار</h4>
            <div className='d-flex flex-wrap justify-content-center'>
                {datas.map((input) => {
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

export default InsurancerInfo