import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const NavItems = ({
  items,
  className,
  expandedNavLinks,
  isDropdownOpen,
  setIsDropdownOpen,
  onMouseEnterSetDropdown
}) => {
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const navItems = [];
  for (const item of items) {
    const { title, to, icon, subItems } = item;

    const expandDropdown = () => {
      if (!subItems) {
        setIsSubDropdownOpen(false);
        setIsDropdownOpen(!isDropdownOpen);
      } else {
        setIsSubDropdownOpen(!isSubDropdownOpen);
      }
    };

    const linkInsideHTML = (
      <>
        <div className='nav-title'>{title}</div>
        {icon ? <div className='nav-icon'>{icon}</div> : ''}
      </>
    );

    navItems.push(
      <>
        {!subItems && (
          <Link onClick={expandDropdown} to={to} className='nav-link'>
            {linkInsideHTML}
          </Link>
        )}
        {subItems && (
          <div
            onClick={expandDropdown}
            onMouseEnter={() => expandedNavLinks && setIsSubDropdownOpen(true)}
            onMouseLeave={() => expandedNavLinks && setIsSubDropdownOpen(false)}
            className='nav-link'
          >
            {linkInsideHTML}
          </div>
        )}

        {subItems && isSubDropdownOpen && (
          <NavItems
            items={subItems}
            className={'nav-link-dropdown'}
            expandedNavLinks={expandedNavLinks}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            onMouseEnterSetDropdown={setIsSubDropdownOpen}
          />
        )}
      </>
    );
  }

  return (
    <div
      className={className}
      onMouseEnter={() =>
        expandedNavLinks && onMouseEnterSetDropdown !== undefined
          ? onMouseEnterSetDropdown(true)
          : ''
      }
      onMouseLeave={() =>
        expandedNavLinks && onMouseEnterSetDropdown !== undefined
          ? onMouseEnterSetDropdown(false)
          : ''
      }
    >
      {navItems}
    </div>
  );
};

export default NavItems;
