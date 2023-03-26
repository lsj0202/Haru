import React, { useState } from 'react';
import Navbar from './Navbar';
import Nav from './Images/burger-menu.png';
import X from './Images/x-button.png';
import '../App.css';


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [imageSrc, setImageSrc] = useState(Nav);

  const change = () => {
    if(showNav) {
      setImageSrc(Nav);
      setShowNav(false);
    } else {
      setTimeout(() => {
        setImageSrc(X);
        setShowNav(true);
      }, 200);
    }
  }

  return (
    <div>
      <header className='header'>
        <img src={imageSrc} className='logo' onClick={change} alt="img"/>
        <div className="header_in">
          <div className="pointer">로그인</div>
          <div className="pointer">회원가입</div>
        </div>
      </header>

      <Navbar show={showNav}/>
    </div>
  );
}

export default Header;
