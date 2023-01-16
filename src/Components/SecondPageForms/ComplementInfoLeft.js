import React from 'react'
import InsurancedInfo from './InsurancedInfo'
import InsuranceInfo from './InsuranceInfo'
import InsurancerInfo from './InsurancerInfo'
import InsuranceUsersInfo from './InsuranceUsersInfo'

function ComplementInfoLeft() {
  return (
    <div className='col-7 mx-4 shadow'>
        <InsurancerInfo />
        <InsurancedInfo />
        <InsuranceUsersInfo />
    </div>
  )
}

export default ComplementInfoLeft