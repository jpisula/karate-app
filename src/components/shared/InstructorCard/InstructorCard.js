import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import instructorPhoto from '../../../assets/instruktor.jpeg';
import './InstructorCard.scss';

function InstructorCard({ animation, name, id }) {
  return (
    <div className='card'>
      <img
        src={instructorPhoto}
        alt='Instructor image'
        className='instructor-image'
      />
      <div className='vignette'>
        <div className='instructor-info'>
          <h3>Sensei {name}, 3 DAN</h3>
          <p>
            Jako instruktor wychowałem wielu utytułowanych zawodników, w tym
            Wicemistrza Europy, wielokrotnych Wicemistrzów i Mistrzów Polski...
          </p>
        </div>
        <Link className='instructor-link' to={`/instructors/${id}`}>
          <Button text={'Czytaj dalej'} />
        </Link>
      </div>
    </div>
  );

  // return (
  //   <div data-aos={animation} className='instructor-card'>
  //     <div className='image-wrapper'>
  //       <img
  //         src={instructorPhoto}
  //         alt='Instructor image'
  //         className='instructor-image'
  //       />
  //     </div>
  //     <h3>{name}</h3>
  //     <p>
  //       Jako instruktor wychowałem wielu utytułowanych zawodników, w tym
  //       Wicemistrza Europy, wielokrotnych Wicemistrzów i Mistrzów Polski...
  //     </p>
  //     <Link className='instructor-link' to={`/instructors/${id}`}>
  //       <Button text={'Czytaj dalej'} />
  //     </Link>
  //   </div>
  // );
}

export default InstructorCard;
