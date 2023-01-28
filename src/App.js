import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import Register from './Components/Register';

const setToken = (token) => {
  sessionStorage.setItem('token',token);
  console.log(token);
}

const getToken = () => {
  return sessionStorage.getItem('token')
}
function App() {
  
  const token = getToken();

  if(token){
    return (
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/prefences' element={<Preferences />} />
        </Routes>
      </Router>
    )
  }else{
    return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login setToken={setToken}/>} />
          <Route path='/register' element={<Register setToken={setToken}/>} />
        </Routes>
      </Router>
    );
  }
    
}

export default App;
