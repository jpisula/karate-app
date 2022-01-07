import './DropdownMenu.scss';

function DropdownMenu({ children, isHamburgerMenu }) {
  if (isHamburgerMenu) {
    return <div className='down-dropdown'>{children}</div>;
  } else {
    return '';
  }
}

export default DropdownMenu;
