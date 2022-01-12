import { useEffect, useState } from 'react';
import './NavDropdownButton.scss';

function NavDropdownButton({ children, title, icon }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const tabletPortraitWidth = 768;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const checkWindowWidth = (isOpen) => {
    if (windowWidth >= tabletPortraitWidth) {
      setIsDropdownOpen(isOpen);
    }
  };

  return (
    <>
      <div
        className='dropdown-btn-container'
        onMouseEnter={() => checkWindowWidth(true)}
        onMouseLeave={() => checkWindowWidth(false)}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className='nav-title'>{title}</div>
        <div className='nav-icon'>{icon}</div>
      </div>
      {isDropdownOpen && (
        <div
          className='down-dropdown'
          onMouseEnter={() => checkWindowWidth(true)}
          onMouseLeave={() => checkWindowWidth(false)}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default NavDropdownButton;
