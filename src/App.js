import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { RxHamburgerMenu } from 'react-icons/rx';
import './App.css';


const App = () => {
  const [showNav, setShowNav] = useState(false);

  const change = () => {
    setShowNav(!showNav);
    
  }

  return (
    <div className='App'>
      <header>
        <RxHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>

      <Navbar show={showNav}/>
    </div>
  );
}

export default App;
