import React from 'react';
import LoginScreen from './pages/loginPage';
import {BrowserRouter ,Route,Routes} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={LoginScreen}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
