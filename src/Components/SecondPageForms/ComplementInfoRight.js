import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext';

function ComplementInfoRight() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext);
    const relatives = ['خودم'];
    const payment_method_text = (data) => {
        if(data == 1)
            return 'یک قسط یکساله'
        if(data == 2)
            return 'دو قسط 6 ماهه'
        if(data == 1)
            return 'سه قسط 4 ماه'
        if(data == 1)
            return 'چهار قسط 3 ماهه'
    }
    const datas = [
        {
            label : 'نسبت متقاضی با بیمه شده',
            value : relatives[secondForm.relativity]
        },
        {
            label : 'عنوان شغل اول',
            value : secondForm.job_name
        },
        {
            label : 'عنوان شغل دوم',
            value : secondForm.job_name_two? secondForm.job_name_two : '-'
        },
        {
            label : 'سال تولد',
            value : secondForm.birth_year
        },
        {
            label : 'مدت بیمه نامه',
            value : secondForm.insurance_length
        },
        {
            label : 'نحوه پرداخت',
            value : payment_method_text(secondForm.payment_method)
        },
        {
            label : 'حق بیمه سال اول',
            value : secondForm.first_payment
        },
        {
            label : 'شرکت بیمه',
            value : 'کارآفرین'
        },
        {
            label : 'سرمایه فوت به هر علت',
            value : `${secondForm.death_invest} برابر حق بیمه`
        },
        {
            label : 'سرمایه فوت بر اثر حادثه',
            value : `${secondForm.death_by_accident} برابر حق بیمه`
        },
        {
            label : 'نقص عضو و از کار افتادگی',
            value : `${secondForm.disability} برابر حق بیمه`
        },
        {
            label : 'هزینه پزشکی ناشی از حادثه',
            value : secondForm.medical_cost_by_accident ? "بله" : 'خیر'
        },
        {
            label : 'خطرات اضافی شامل زلزله',
            value : secondForm.extra_dangers_package ? "بله" : 'خیر'
        },
        {
            label : 'سرمایه امراض خاص',
            value : `${secondForm.special_illness} برابر حق بیمه`
        },
        {
            label : 'معافیت از پرداخت حق بیمه',
            value : secondForm.clearance_to_pay_insurance ? 'بله' : 'خیر'
        },
        {
            label : 'افزایش سالانه حق بیمه',
            value : `${secondForm.invest_increasement} %`
        },
        {
            label : 'افزایش سالانه سرمایه',
            value : `${secondForm.invest_increasement} %`
        },
    ];

    return (
        <div className='col-3 mx-4 p-3 shadow'>
            {datas.map((data) => {
                return(
                    <div className='d-flex justify-content-between my-3'>
                        <span className='text-secondary text-nowrap'>{data.label}</span>
                        <span className='font-weight-bolder'
                        style={{
                            fontWeight : 'bolder',
                            color : '#021696'
                        }}>{data.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ComplementInfoRight