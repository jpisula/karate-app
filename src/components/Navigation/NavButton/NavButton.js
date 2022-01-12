import './NavButton.scss';

function NavButton({ title, icon }) {
  return (
    <div className='nav-link'>
      <div className='nav-title'>{title}</div>
      {icon ? <div className='nav-icon'>{icon}</div> : ''}
    </div>
  );
}

export default NavButton;
