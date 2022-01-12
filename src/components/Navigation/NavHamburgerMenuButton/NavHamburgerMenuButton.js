import './NavHamburgerMenuButton.scss';
import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';

import { useState } from 'react';

function NavHamburgerMenuButton({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        className='hamburger-btn-container'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className='nav-title'>Menu</div>
        <div className='nav-icon'>
          {isDropdownOpen ? <VscChromeClose /> : <TiThMenuOutline />}
        </div>
      </div>

      {isDropdownOpen && (
        <div className='hamburger-down-dropdown'>{children}</div>
      )}
    </>
  );
}

export default NavHamburgerMenuButton;
