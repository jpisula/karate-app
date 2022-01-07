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
          <span className={isHamburgerMenu ? 'nav-title' : ''}>{title}</span>{' '}
          <span className='nav-icon'>{icon ? icon : ''}</span>
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
        {title} <span>{icon ? icon : ''}</span>
      </div>
    );
  }
}

export default NavButton;
