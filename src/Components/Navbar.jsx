import Music from './Images/music.png';
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = ({show}) => {
  return(
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <div className="logo__main">
        <img src={Music} alt="Logo" className='logo'/><span className='logo__text'> 하루하루</span>
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