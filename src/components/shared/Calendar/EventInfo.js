import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import events from '../../../database/events.js';

const EventInfo = () => {
  const {
    event,
    dispatch,
    chosenMonth,
    chosenYear,
    louderForOthers,
    startDay
  } = useContext(CalendarContext);
  console.log(event);
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
                dispatch({
                  type: 'SET_YEAR',
                  payload: events[event.id - 2].year
                });
                dispatch({
                  type: 'SET_MONTH',
                  payload: events[event.id - 2].month - 1
                });
                dispatch({ type: 'SET_LOUDER', payload: true });
                console.log(chosenYear, chosenMonth);
              }
            }}
          />
          <BsFillArrowRightSquareFill
            className='arrow'
            onClick={() => {
              if (event.id < events.length) {
                dispatch({ type: 'SET_EVENT', payload: events[event.id] });
                dispatch({
                  type: 'SET_YEAR',
                  payload: events[event.id].year
                });
                dispatch({
                  type: 'SET_MONTH',
                  payload: events[event.id].month - 1
                });
                dispatch({ type: 'SET_LOUDER', payload: true });
                console.log(chosenYear, chosenMonth);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
