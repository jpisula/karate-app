import { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavButton.scss';

function NavButton({ children, title, icon, isHamburgerMenu }) {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  if (children) {
    return (
      <>
        <div
          className={isHamburgerMenu ? 'hamburger-menu nav-link' : 'nav-link'}
          onClick={() => setisDropdownOpen(!isDropdownOpen)}
        >
          <p className={isHamburgerMenu ? 'nav-title' : ''}>{title}</p>{' '}
          <p className='nav-icon'>{icon ? icon : ''}</p>
        </div>
        {isDropdownOpen && (
          <DropdownMenu isHamburgerMenu={isHamburgerMenu}>
            {children}
          </DropdownMenu>
        )}
      </>
    );
  } else {
    return (
      <div className='nav-link'>
        {title} <p>{icon ? icon : ''}</p>
      </div>
    );
  }
}

export default NavButton;
