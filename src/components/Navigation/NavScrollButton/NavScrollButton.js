import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import { Children, cloneElement, useEffect, useState } from 'react';
import './NavScrollButton.scss';
import { CSSTransition } from 'react-transition-group';

function NavScrollButton({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBtnVisible, setisBtnVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setisBtnVisible(offset > 350);
  }, [offset]);

  return (
    <>
      <FixedBtn
        isBtnVisible={isBtnVisible}
        setIsDropdownOpen={setIsDropdownOpen}
        isDropdownOpen={isDropdownOpen}
      />

      {isDropdownOpen && (
        <div className='nav-scroll-dropdown'>
          <FixedBtn
            isBtnVisible={isBtnVisible}
            setIsDropdownOpen={setIsDropdownOpen}
            isDropdownOpen={isDropdownOpen}
          />
          <div className='nav-items'>
            {Children.map(children, (child) =>
              cloneElement(child, { setIsDropdownOpen })
            )}
          </div>
        </div>
      )}
    </>
  );
}

const FixedBtn = ({ isBtnVisible, setIsDropdownOpen, isDropdownOpen }) => {
  return !isDropdownOpen ? (
    <CSSTransition
      in={isBtnVisible}
      timeout={200}
      classNames={!isDropdownOpen && 'nav-scroll-btn-fixed'}
      unmountOnExit
    >
      <div
        className={'nav-scroll'}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {isDropdownOpen ? <VscChromeClose /> : <TiThMenuOutline />}
      </div>
    </CSSTransition>
  ) : (
    <div
      className='nav-scroll-open-btn'
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <VscChromeClose />
    </div>
  );
};

export default NavScrollButton;
