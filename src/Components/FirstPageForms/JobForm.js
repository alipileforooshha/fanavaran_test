import React, {useContext, useEffect, useState} from 'react'
import { FormContext } from '../../Contexts/FormContext'
import axios from "axios"

const JobForm = ({next, prev}) => {
  const {state,setState} = useContext(FormContext)
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs').then((response) => {
      setJobs(response.data);
      console.log(jobs);
      setLoading(true)
    });
  },[]);

  if(!loading)
    return <h2>Loading</h2>
  if(loading)  
    return (
      <form className='form-group m-4 d-flex flex-column w-50 m-auto'>
          <label>استعلام بیمه عمر اندوخته دار امید</label>
          <select className='form-control form-select' placeholder='شغل اول' onChange={(e) => {
            setState({
              ...state,
              first_job : e.target.value
            })
          }}>
            {jobs.map(job => (
              <option className='text-secondary' key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
          <input className='form-control' placeholder='شغل دوم (اختیاری)' onChange={(e) => {
            setState({
              ...state,
              second_job : e.target.value
            })
          }}></input>
          {next()}
          {prev()}
      </form>
    )
}

export default JobForm