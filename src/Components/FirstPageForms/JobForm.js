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
      console.log(jobs);
      setLoading(true)
    });
  },[]);
  function searchOptions(e){
    let filter_results =  e.target.value.length > 3 ? jobs.filter((job) =>{
      return job.title.toLowerCase().includes(e.target.value.toLowerCase());
    }) : [];
    setResults(filter_results);
    console.log(results);
  }
  if(!loading)
    return <h2>Loading</h2>
  if(loading)  
    return (
      <div className='form-group m-4 d-flex flex-column w-50 m-auto'>
          <label>استعلام بیمه عمر اندوخته دار امید</label>
          <input  className='form-control' placeholder = {job} onChange={(e) => {
            searchOptions(e)
            
          }} />
            {results?results.map((value)=>{
                return <span className='m-2 p-2 border border bg-dark text-white' value={value.id} onClick={(e)=>{
                  setState({
                    ...state,
                    first_job : value.id
                  })
                  setJob(value.title)
                }}>{value.title}</span>
            }):[]}
          <input className='form-control' placeholder='شغل دوم (اختیاری)' onChange={(e) => {
            setState({
              ...state,
              second_job : e.target.value
            })
          }}></input>
          {next()}
          {prev()}
      </div>
    )
}

export default JobForm