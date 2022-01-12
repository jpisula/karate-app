import { useState } from 'react';
import './NavDropdownButton.scss';

function NavDropdownButton({ children, title, icon }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        className='dropdown-btn-container'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className='nav-title'>{title}</div>
        <div className='nav-icon'>{icon}</div>
      </div>
      {isDropdownOpen && <div className='down-dropdown'>{children}</div>}
    </>
  );
}

export default NavDropdownButton;
