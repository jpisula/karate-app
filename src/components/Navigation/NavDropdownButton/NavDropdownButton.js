import { useState } from 'react';
import './NavDropdownButton.scss';

function NavDropdownButton({ children, title, icon, width }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        className='dropdown-btn-container'
        style={{ width }}
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
