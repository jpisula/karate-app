import { useState } from 'react';
import './NavDropdownButton.scss';

function NavDropdownButton({ children, title, icon }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        className='dropdown-btn-container'
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className='nav-title'>{title}</div>
        <div className='nav-icon'>{icon}</div>
      </div>
      {isDropdownOpen && (
        <div
          className='down-dropdown'
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default NavDropdownButton;
