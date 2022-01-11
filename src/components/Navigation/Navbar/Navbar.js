import NavHamburgerMenuButton from '../NavHamburgerMenuButton/NavHamburgerMenuButton';
import NavLogo from '../NavLogo/NavLogo';
import './Navbar.scss';

function Navbar({ children }) {
  return (
    <nav>
      <div className='container wrapper'>
        <div className='logo-container'>
          <NavLogo />
        </div>

        <div className='nav-links'>{children}</div>

        <div className='hamburger-menu-container'>
          <NavHamburgerMenuButton>{children}</NavHamburgerMenuButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
