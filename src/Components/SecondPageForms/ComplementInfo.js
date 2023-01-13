import React, { useContext } from 'react'
import { SecondFormContext } from '../../Contexts/SecondFormContext'
import ComplementInfoLeft from './ComplementInfoLeft';
import ComplementInfoRight from './ComplementInfoRight';

function ComplementInfo() {
    
    const {secondForm , setSecondForm} = useContext(SecondFormContext);
    
    return (
        <div className='row'>
            <ComplementInfoRight />
            <ComplementInfoLeft />
        </div>
    )
}

export default ComplementInfo