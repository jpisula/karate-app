import { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavButton.scss';

function NavButton({ title, icon, width }) {
  return (
    <div className='nav-link' style={{ width }}>
      <div className='nav-title'>{title}</div>
      {icon ? <div className='nav-icon'>{icon}</div> : ''}
    </div>
  );
}

export default NavButton;
