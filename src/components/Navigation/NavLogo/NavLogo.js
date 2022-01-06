import './NavLogo.scss';
import logo from './logo.png';

function NavLogo() {
  return (
    <div className='logo'>
      <img src={logo} alt='logo' />
      <span id='brand-name'>
        <span className='red-text'>oyama-</span>karate
        <span className='red-text'>.</span>eu
      </span>
    </div>
  );
}

export default NavLogo;
