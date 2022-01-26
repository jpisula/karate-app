import { Link } from 'react-router-dom';
import { FindReactElement } from '../../../lib/helpers/helpers';
import './NavButton.scss';

function NavButton({ title, icon, linkTo, setIsDropdownOpen }) {
  const link = linkTo || '/';

  const handleClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Link onClick={handleClick} to={link} className='nav-link'>
      <div className='nav-title'>{title}</div>
      {icon ? <div className='nav-icon'>{icon}</div> : ''}
    </Link>
  );
}

export default NavButton;
