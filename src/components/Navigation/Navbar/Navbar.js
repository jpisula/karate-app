import NavLogo from '../NavLogo/NavLogo';
import { TiThMenuOutline } from 'react-icons/ti';
import { AiFillCaretDown } from 'react-icons/ai';
import './Navbar.scss';
import { useState } from 'react';
import NavButton from '../NavButton/NavButton';

function Navbar() {
  const [isSubmenuVisible, setisSubmenuVisible] = useState(false);

  return (
    <nav>
      {/* <div className='container'> */}
      <div className='wrapper'>
        <div className='logo-container'>
          <NavLogo />
        </div>

        <div className='nav-links'>
          <NavButton title={`Informacje`}>
            <AiFillCaretDown />
          </NavButton>
          <NavButton title={'Nasze sekcje'} />
          <NavButton title={'Kalendarz'} />
        </div>

        <div className='hamburger-menu'>
          <span>Menu</span>
          <TiThMenuOutline id='hamburger-btn' />
        </div>

        <div className='submenu' style={{ display: 'none' }}>
          <div className='nav-link'>Informacje</div>
          <div className='nav-link'>Nasze sekcje</div>
          <div className='nav-link'>Kalendarz</div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
