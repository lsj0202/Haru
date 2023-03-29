import React from 'react'
import Kst from '../Components/Images/kst.png';

function Start() {
  return (
    <div className="board">
      <img className="kst" src={Kst} alt="Start" />
      <h2 className="center2">지금 당장 공부하세요, 롸잇나우</h2>
    </div>
  )
}

export default Start