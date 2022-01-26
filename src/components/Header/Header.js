import './Header.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ navConfig }) => {
  const { styles, logo, items, widthToShowItems, hamburgerIcon, closeIcon } =
    navConfig;

  const [navLinksShown, setNavLinksShown] = useState(false);
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false);

  useEffect(() => {
    setNavLinksDisplay(window.innerWidth);

    const handleResize = () => {
      setNavLinksDisplay(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setNavLinksDisplay = (windowWidth) => {
    if (
      (windowWidth > widthToShowItems && navLinksShown) ||
      windowWidth < widthToShowItems
    ) {
      setNavLinksShown(false);
    } else if (windowWidth > widthToShowItems && !navLinksShown) {
      setNavLinksShown(true);
      setIsHamburgerDropdownOpen(false);
    }
  };

  const navigationStyles = {
    backgroundColor: styles.bgColor,
    color: styles.mainTextColor
  };

  return (
    <header className='navigation' style={navigationStyles}>
      <nav>
        <NavLogo logo={logo} />
        {navLinksShown && <NavItem items={items} className={'nav-links'} />}
        {!navLinksShown &&
          generateHamburgerDropdown(
            items,
            hamburgerIcon,
            closeIcon,
            'nav-hamburger',
            isHamburgerDropdownOpen,
            setIsHamburgerDropdownOpen
          )}
      </nav>
    </header>
  );
};

const NavLogo = ({ logo }) => {
  const { title, titleHTML, src } = logo;
  return (
    <Link to='/' className='logo'>
      <img src={src} alt='logo' />
      <div>{title || titleHTML}</div>
    </Link>
  );
};

const NavItem = ({ items, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navItems = [];
  for (const item of items) {
    const { title, to, icon, subItems } = item;

    const expandDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    navItems.push(
      <>
        <Link onClick={subItems && expandDropdown} to={to} className='nav-link'>
          <div className='nav-title'>{title}</div>
          {icon ? <div className='nav-icon'>{icon}</div> : ''}
        </Link>

        {subItems && isDropdownOpen && (
          <NavItem items={subItems} className={'nav-link-dropdown'} />
        )}
      </>
    );
  }

  return <div className={className}>{navItems}</div>;
};

const generateHamburgerDropdown = (
  items,
  hamburgerIcon,
  closeIcon,
  className,
  isHamburgerDropdownOpen,
  setIsHamburgerDropdownOpen
) => {
  return (
    <>
      <div
        className={className}
        onClick={() => setIsHamburgerDropdownOpen(!isHamburgerDropdownOpen)}
      >
        <div className='nav-title'>Menu</div>
        <div className='nav-icon'>
          {isHamburgerDropdownOpen ? closeIcon : hamburgerIcon}
        </div>
      </div>
      {isHamburgerDropdownOpen && (
        <NavItem items={items} className={'hamburger-dropdown'} />
      )}
    </>
  );
};

Header.propTypes = {
  navConfig: PropTypes.shape({
    widthToShowItems: PropTypes.number.isRequired,
    hamburgerIcon: PropTypes.node.isRequired,
    closeIcon: PropTypes.node.isRequired,
    styles: PropTypes.shape({
      bgColor: PropTypes.string.isRequired,
      secondBgColor: PropTypes.string,
      mainTextColor: PropTypes.string.isRequired,
      secondColorText: PropTypes.string,
      hoverColor: PropTypes.string.isRequired,
      secondHoverColor: PropTypes.string
    }),
    logo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      titleHTML: PropTypes.node,
      styles: PropTypes.shape({
        mainTextColor: PropTypes.string.isRequired,
        secondColorText: PropTypes.string
      })
    }),
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
          icon: PropTypes.node,
          subItems: PropTypes.arrayOf(
            PropTypes.oneOfType([
              PropTypes.shape({
                title: PropTypes.string,
                to: PropTypes.string,
                icon: PropTypes.node
              })
            ])
          )
        })
      ])
    )
  }).isRequired
};

export default Header;
