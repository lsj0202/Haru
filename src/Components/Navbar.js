import Logo from './lab.png';
import '../App.css'

const Navbar = () => {
  return(
    <div className="sidenav active">
      <img src={Logo} alt="Logo" className='logo'/>
      <ul>
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