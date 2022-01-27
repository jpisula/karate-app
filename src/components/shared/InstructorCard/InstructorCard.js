import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import instructorPhoto from './assets/instruktor.jpeg';
import './InstructorCard.scss';

function InstructorCard({ animation, name }) {
  return (
    <div data-aos={animation} className='instructor-card'>
      <div className='image-wrapper'>
        <img
          src={instructorPhoto}
          alt='Instructor image'
          className='instructor-image'
        />
      </div>
      <h3>{name}</h3>
      <p>
        Jako instruktor wychowałem wielu utytułowanych zawodników, w tym
        Wicemistrza Europy, wielokrotnych Wicemistrzów i Mistrzów Polski...
      </p>
      <Link className='instructor-link' to='/'>
        <Button text={'Czytaj dalej'} />
      </Link>
    </div>
  );
}

export default InstructorCard;
