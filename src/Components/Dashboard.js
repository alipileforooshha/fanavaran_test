import React from 'react'
import { useNavigate } from 'react-router'
import CompleteInfo from './CompleteInfo'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='btn btn-primary' onClick={() => {
        navigate('/completeInfo');
      }}>تکمیل اطلاعات</button>
      {/* <CompleteInfo /> */}
    </div>
  )
}

export default Dashboard
