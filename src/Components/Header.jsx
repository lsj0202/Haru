/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Nav from './Images/burger-menu.png';
import X from './Images/x-button.png';
import '../App.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [imageSrc, setImageSrc] = useState(Nav);
  const [time, setTime] = useState(0);
  const [title, setTitle] = useState (['화이팅','할 수 있어요!','열심히 해봐요!', '행운을 빌어요!', '포기하지 마세요!','잘 될거에요!', '얼마 남지 않았어요!']);

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

  const formatTime = (val) => {
    if(val < 10){
      return '0'
    } else{
      return ''
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup(){
      clearInterval(timerID)
    }
  })

  const tick = () => {
    const d = new Date();
    let h = d.getHours();
    if(h>12){
      h -= 12
    }
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(formatTime(h) + h + ':' +  formatTime(m) + m + ':' + formatTime(s) + s );
  };

  const random = (length) => {
    return parseInt(Math.random() * length);
  }
  setInterval(random, 5000);

  return (
    <div>
      <header className='header'>
        <img src={imageSrc} className='logo' onClick={change} alt="img"/>
        <div className="header_in">
          <div className="pointer">{time}</div>
          <div className="pointer">
            {title[random(title.length)]}
          </div>
        </div>
      </header>

      <Navbar show={showNav}/>
    </div>
  );
}

export default Header;
