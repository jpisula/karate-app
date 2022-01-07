import { TiThMenuOutline } from 'react-icons/ti';
import NavButton from '../NavButton/NavButton';
import NavLogo from '../NavLogo/NavLogo';
import './Navbar.scss';

function Navbar({ children }) {
  return (
    <nav>
      <div className='wrapper'>
        <div className='logo-container'>
          <NavLogo />
        </div>

        <div className='nav-links'>{children}</div>

        {/* <div className='hamburger-menu'> */}
        <NavButton
          title={'Menu'}
          isHamburgerMenu={true}
          icon={<TiThMenuOutline id='hamburger-btn' />}
        >
          {children}
        </NavButton>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
