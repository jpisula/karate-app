import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import events from '../../../database/events.js';

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
  const { dispatch } = useContext(CalendarContext);
  console.log(event);
  return (
    <div className='edges'>
      <div className='event-container'>
        <img src={imgSrc} alt='' />
        <h2 className='title'>{title}</h2>
        <p className='date'>{`${dayStart} - ${dayEnd} ${month} ${year}r.`}</p>
        <p className='city'>{city}</p>
        <p className='address'>{address}</p>
        <p className='description'>{description}</p>
        <div className='arrows-container'>
          <BsFillArrowLeftSquareFill
            className='arrow'
            onClick={() => {
              if (event.id - 2 >= 0) {
                dispatch({ type: 'SET_EVENT', payload: events[event.id - 2] });
              }
            }}
          />
          <BsFillArrowRightSquareFill
            className='arrow'
            onClick={() => {
              if (event.id < events.length) {
                dispatch({ type: 'SET_EVENT', payload: events[event.id] });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
