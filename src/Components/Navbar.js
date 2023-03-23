import Music from './Images/music.png';
import '../App.css'

const Navbar = ({show}) => {
  return(
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <div className="logo__main">
        <img src={Music} alt="Logo" className='logo'/><span className='logo__text'> Music</span>
      </div>
      <ul className="banner">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;