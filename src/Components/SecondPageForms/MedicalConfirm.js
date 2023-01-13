import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SecondFormContext } from '../../Contexts/SecondFormContext';
import e from 'react-date-object/calendars/persian';
import MedicalCondition from './MedicalCondition';
import NextButton from './NextButton';

function MedicalConfirm() {
    const {secondForm, setSecondForm} = useContext(SecondFormContext)

    const validationSchema = yup.object().shape({
        verification_code : yup.number().required('نمیتواند خالی باشد')
    });

    const formOptions = {resolver : yupResolver(validationSchema),};
    
    const {register , handleSubmit, formState:{errors}, watch, unregister} = useForm({
        resolver : yupResolver(validationSchema),
        reValidateMode : "onChange",
        mode : 'onChange'
    });

    const submitForm = (data) => {
        setSecondForm({
            ...secondForm,
            second_step : secondForm.second_step + 1
        });
    };

    return (
        <div>
            <MedicalCondition formDisable={true} />
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='d-flex justify-content-between mt-3'>
                    <label className='text-nowrap mx-4'>کد تایید</label>
                    <input name='verification_code'
                    className='form-control'
                    {...register('verification_code')}
                    value={secondForm.verification_code}
                    onChange={(e) => {
                        setSecondForm({
                            ...secondForm,
                            verification_code : e.target.value
                        })
                    }}></input>
                </div>
                <NextButton />
            </form>
        </div>
    )
}

export default MedicalConfirm