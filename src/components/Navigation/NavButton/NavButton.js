import { Link } from 'react-router-dom';
import './NavButton.scss';

function NavButton({ title, icon, linkTo }) {
  const link = linkTo || '/';
  return (
    <Link to={link} className='nav-link'>
      <div className='nav-title'>{title}</div>
      {icon ? <div className='nav-icon'>{icon}</div> : ''}
    </Link>
  );
}

export default NavButton;
