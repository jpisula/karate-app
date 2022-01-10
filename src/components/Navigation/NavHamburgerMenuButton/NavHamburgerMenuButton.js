import './NavHamburgerMenuButton.scss';
import { TiThMenuOutline } from 'react-icons/ti';
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
          <TiThMenuOutline />
        </div>
      </div>

      {isDropdownOpen && <div className='down-dropdown'>{children}</div>}
    </>
  );
}

export default NavHamburgerMenuButton;
