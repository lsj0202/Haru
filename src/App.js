import React, { useState } from 'react';
import Navbar from './Components/Navbar';
//import { RxHamburgerMenu } from 'react-icons/rx';
import Nav from './Components/Images/burger-menu.png';
import X from './Components/Images/x-button.png';
import './App.css';


const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [imageSrc, setImageSrc] = useState(Nav);

  const change = () => {
    if(showNav) {
      setImageSrc(Nav);
      setShowNav(false);
    } else {
      setImageSrc(X);
      setShowNav(true);
    }
  }

  return (
    <div className='App'>
      <header>
        <img src={imageSrc} className='logo' onClick={change} alt="img"/>
      </header>

      <Navbar show={showNav}/>
    </div>
  );
}

export default App;
