import React from 'react';
import { useState, useRef, useEffect } from 'react';

function TodoLIst() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  })

  const [contents, setContents] = useState([]);
  const [but, setBut] = useState('');
  const [number, setNumber] = useState(4);

  const onChange = (e) => {
    setBut(e.target.value);
  };

  const onClick = () => {
    const newC = contents.concat({
      id: number,
      text: but
    })
    setContents(newC);
    setNumber(number + 1);
    setBut('');
  }

  const del = (id) => {
    const newList = contents.filter((content) => content.id !== id);
    setContents(newList);
  }

  const contentsList = contents.map((cont) => 
    <li className="matop" key={cont.id}>
      <span>{cont.text}</span> {/* listName */}
      <button className="btn2" onClick={() => {del(cont.id)}}>X</button>  {/* button */}
    </li>
  );

  return (
    <div className="mainBanner">
      <div className="main_Banner">
        <h1 className="center">할 일 목록</h1>
          <input className="input" placeholder='할 일을 입력하세요' onChange={onChange} value={but} ref={inputRef}/>
          <button className="btn" onClick={onClick}>입력</button>

        <ul>
          {contentsList}
        </ul>

      </div>
    </div>
  )
}

export default TodoLIst;