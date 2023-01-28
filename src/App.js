import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import Register from './Components/Register';
import { async } from 'q';
import PrivateRoute from './Utils/PrivateRoute';



function App() {
    
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/prefences' element={<Preferences />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
    
}

export default App;
