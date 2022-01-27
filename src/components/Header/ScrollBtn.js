import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavItems from './NavItems';
import './ScrollBtn.scss';

const ScrollBtn = ({
  items,
  hamburgerIcon,
  closeIcon,
  isScrollButtonVisible
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={isScrollButtonVisible}
        timeout={(200, 0)}
        classNames={'nav-scroll-anim'}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div
          className='nav-scroll'
          ref={nodeRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className='nav-icon'>{!isDropdownOpen && hamburgerIcon}</div>
        </div>
      </CSSTransition>

      {isDropdownOpen && (
        <div className='scroll-dropdown'>
          <div className='close-icon' onClick={() => setIsDropdownOpen(false)}>
            {closeIcon}
          </div>
          <NavItems
            items={items}
            className={'nav-links'}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
