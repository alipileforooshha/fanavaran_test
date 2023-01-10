import React, {useContext, useEffect, useState} from 'react'
import { FormContext } from '../../Contexts/FormContext'
import axios from "axios"
import { Select } from 'react-select/dist/Select-062d63ee.cjs.dev'

const JobForm = ({next, prev}) => {
  const {state,setState} = useContext(FormContext)
  const [jobs, setJobs] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [job,setJob] = useState("");
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs').then((response) => {
      setJobs(response.data);
      setLoading(true)
    });
  },[]);
  function searchOptions(e){
    let filter_results =  e.target.value.length > 3 ? jobs.filter((job) =>{
      return job.title.toLowerCase().includes(e.target.value.toLowerCase());
    }) : [];
    setResults(filter_results);
  }
  if(!loading)
    return <h2>Loading</h2>
  if(loading)  
    return (
      <div className='form-group m-4 d-flex flex-column w-50 m-auto d-inline mt-4'>
          <label className='fs-3 my-3'>استعلام بیمه عمر اندوخته دار امید</label>
          <input  className='form-control fs-4' value={state.job_name} placeholder = {job} onChange={(e) => {
            searchOptions(e)
            setState({
              ...state,
              first_job : 0,
              job_name : e.target.value
            })
          }} />
            {results?results.map((value)=>{
                return <span className='m-2 p-2 border border bg-dark text-white fs-4' value={value.id} onClick={(e)=>{
                  setState({
                    ...state,
                    first_job : value.id,
                    job_name : value.title
                  })
                  setJob(value.title)
                }}>{value.title}</span>
            }):[]}
          <input className='form-control fs-4' placeholder='شغل دوم (اختیاری)' onChange={(e) => {
            setState({
              ...state,
              second_job : e.target.value
            })
          }}></input>
      </div>
    )
}

export default JobForm