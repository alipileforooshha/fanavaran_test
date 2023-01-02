import React from 'react';
import './App.css';
import FormContainer from './Components/FormContainer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SecondForm from './Components/SecondForm';
import ErrorPage from './Components/ErrorPage';

function App() {
  const varw = "ali";
  const AppContext = React.createContext({varw})
  
  return (
      // <div className="App">
      //   <FormContainer />
      // </div>
      <Router>
        <nav className='d-flex justify-contents-between'>
          <Link to="/" className='text-dark mx-4'>first Page</Link>
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
  );
}

export default App;
