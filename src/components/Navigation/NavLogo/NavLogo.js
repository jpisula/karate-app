import './NavLogo.scss';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function NavLogo() {
  return (
    <Link to='/' className='logo'>
      <img src={logo} alt='logo' />
      <span id='brand-name'>
        <span className='red-text'>oyama-</span>karate
        <span className='red-text'>.</span>eu
      </span>
    </Link>
  );
}

export default NavLogo;
