import Navbar from './Components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header>
        <GiHamburgerMenu />
      </header>

      <Navbar />
    </div>
  );
}

export default App;
