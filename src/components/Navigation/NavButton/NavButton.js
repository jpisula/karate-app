import './NavButton.scss';

function NavButton({ children, title }) {
  return (
    <div className='nav-link'>
      {title} <span>{children ? children : ''}</span>
    </div>
  );
}

export default NavButton;
