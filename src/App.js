import React, { useState } from 'react';
import './App.css';
import FormContainer from './Components/FormContainer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SecondForm from './Components/SecondForm';
import ErrorPage from './Components/ErrorPage';
import { FormContext } from './Contexts/FormContext';
function App() {
  // const varw = "ali";
  // const AppContext = React.createContext()
  const[state,setState] = useState({
    step : 1,
    relativity : 0,
    first_job : '',
    second_job : '',
    job_name : '',
    birth_day : '',
    birth_month : '',
    birth_year : '',
    age : 2,
    insurance_length : '',
    payment_method : 0,
    first_payment : 1000000,
  });
  return (
      // <div className="App">
      //   <FormContainer />
      // </div>
      <FormContext.Provider value = {{state,setState}}>
        <Router>
          <nav className='d-flex justify-contents-between'>
            <Link to="/" className='text-dark mx-4' onClick={() => {
              setState({
                ...state,
                step : 1
              })
            }}>first Page</Link>
            <Link to="/second" className='text-dark mx-4'>Second Page</Link>
            <Link to="/asdfaddwa" className='text-dark mx-4'>Error Page</Link>
            <hr className='border border-dark'></hr>
          </nav>
          <Routes>
            <Route path='/' element={<FormContainer />} />
            <Route path='/second' element={<SecondForm />} />
            {/* <Route path='/profile/:username' element={<SecondForm />} /> */}
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </Router>
      </FormContext.Provider>
  );
}

export default App;
