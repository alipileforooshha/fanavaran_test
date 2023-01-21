import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';
import { useEffect, useState } from 'react';

function App() {
  
  const [token, setToken] = useState();

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/prefences' element={<Preferences />} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
      </Routes>
    </Router>
  );
}

export default App;
