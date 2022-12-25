import React from 'react';
import './App.css';
import FormContainer from './Components/FormContainer';
import Header from './Components/Header';

function App() {
  const varw = "ali";
  const AppContext = React.createContext({varw})
  
  return (
      <div className="App">
        <FormContainer />
      </div>
  );
}

export default App;
