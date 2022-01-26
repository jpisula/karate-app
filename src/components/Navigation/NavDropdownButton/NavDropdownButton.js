import { Children, cloneElement, useEffect, useState } from 'react';
import './NavDropdownButton.scss';

function NavDropdownButton({ children, title, icon }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const tabletLandscapeWidth = 1024;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const checkWindowWidth = (isOpen) => {
    if (windowWidth >= tabletLandscapeWidth) {
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
          {Children.map(children, (child) =>
            cloneElement(child, { setIsDropdownOpen })
          )}
        </div>
      )}
    </>
  );
}

export default NavDropdownButton;
