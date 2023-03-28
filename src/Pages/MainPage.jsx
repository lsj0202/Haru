/* eslint-disable */
import React,{ useState, useEffect } from 'react';

function MainPage() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [click, setClick] = useState(false);

  let timer;

  useEffect(() =>{
    timer = setInterval(() => {
    setSeconds(seconds+1);

    if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
      }
    }, 1000)

    return () => clearInterval(timer);
  })

  const start = () => {
    setClick(!click);
    setSeconds(0);
    setMinutes(0);
  }

  const stop = () => {
    clearInterval(timer);
  } 

  const restart = () => {
    setClick(!click);
    setSeconds(seconds);
  }

  return (
    <div className="mainBanner">
      <div className="container_study">
        <div className="timer">
          <h1>STUDY TIMER</h1>
            <div className="table">
              {
                (click ? <p className="bigDate">{minutes < 10? "0" + minutes : minutes} : {seconds < 10? "0" + seconds : seconds}</p> : <p className="bigDate2">시작해봅시다!</p>)
              }
            </div>
          <button className="buttonC" onClick={start} sumbit={click}>시작</button>
          <button className="buttonC" onClick={stop}>멈추기</button>
          <button className="buttonC" onClick={restart} submit={click}>재시작</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage;