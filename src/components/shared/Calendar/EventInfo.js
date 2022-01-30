import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';

const EventInfo = () => {
  const { event } = useContext(CalendarContext);
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
  console.log(event);
  return (
    <div className='event-container'>
      <img src={imgSrc} alt='' />
      <h2 className='title'>{title}</h2>
      <p className='date'>{`${dayStart} - ${dayEnd} ${month} ${year}r.`}</p>
      <p className='city'>{city}</p>
      <p className='address'>{address}</p>
      <p className='description'>{description}</p>
    </div>
  );
};

export default EventInfo;
