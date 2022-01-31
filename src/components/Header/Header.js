import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Header.scss';
import NavItems from './NavItems';
import NavLogo from './NavLogo';
import ScrollBtn from './ScrollBtn';

const Header = ({ navConfig }) => {
  const { styles, logo, items, widthToShowItems, hamburgerIcon, closeIcon } =
    navConfig;

  const [navLinksShown, setNavLinksShown] = useState(false);
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  //resize handling useEffect
  useEffect(() => {
    setNavLinksDisplay(window.innerWidth);

    const handleResize = () => {
      setNavLinksDisplay(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!navLinksShown) {
      setIsScrollButtonVisible(offset > 350);
    } else {
      setIsScrollButtonVisible(false);
    }
  }, [offset]);

  useEffect(() => {
    if (!navLinksShown) {
      setIsScrollButtonVisible(offset > 350);
    } else {
      setIsScrollButtonVisible(false);
    }
  }, [navLinksShown]);

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
    <>
      <header className='navigation' style={navigationStyles}>
        <nav>
          <NavLogo logo={logo} />
          {navLinksShown && (
            <NavItems
              items={items}
              className={'nav-links'}
              expandedNavLinks={true}
            />
          )}
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

      <ScrollBtn
        items={items}
        hamburgerIcon={hamburgerIcon}
        closeIcon={closeIcon}
        isScrollButtonVisible={isScrollButtonVisible}
      />
    </>
  );
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
        <NavItems
          items={items}
          className={'hamburger-dropdown'}
          isDropdownOpen={isHamburgerDropdownOpen}
          setIsDropdownOpen={setIsHamburgerDropdownOpen}
        />
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
