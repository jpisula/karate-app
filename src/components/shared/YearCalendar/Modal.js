import './Modal.scss';
import { ImCross } from 'react-icons/im';
import temporaryImg from '../../../../src/assets/karate.jpeg';

const Modal = ({ event, setIsEventModalDisplayed, isEventModalDisplayed }) => {
  const {
    imgSrc,
    title,
    dayStart,
    dayEnd,
    month,
    year,
    address,
    description,
    city
  } = event;

  const setDate = (date) => {
    return date > 9 ? date : '0' + date;
  };

  return (
    <div className='modal-bg'>
      <div className='event-info-container'>
        <div className='cross-container'>
          <ImCross
            className='cross'
            onClick={() => setIsEventModalDisplayed(!isEventModalDisplayed)}
          />
        </div>
        <img src={temporaryImg} alt='current event image' />
        <h2 className='title'>{title}</h2>
        <p className='date'>{`${
          dayStart === dayEnd
            ? setDate(dayStart)
            : `${setDate(dayStart)} - ${setDate(dayEnd)}`
        }.${setDate(month)}.${year}`}</p>
        <p className='city'>{city}</p>
        <p className='address'>{address}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
