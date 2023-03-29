import Music from './Images/music.png';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({show}) => {
  let navigate = useNavigate();

  return(
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <div className="logo__main" onClick={() => { navigate(-1) }}>
        <img src={Music} alt="Logo" className='logo'/><span className='logo__text'>이전 페이지</span>
      </div>
      
      <ul className="banner">
        <li>
          <Link to='/todoList'>ToDo List</Link>
        </li>
        <li>
          <Link to='/study'>Study Timer</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;