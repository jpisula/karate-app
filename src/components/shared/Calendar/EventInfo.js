import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import events from '../../../database/events.js';

const EventInfo = () => {
  const { event, dispatch, chosenMonth, chosenYear } =
    useContext(CalendarContext);
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
    <div className='edges'>
      <div className='event-container'>
        <img src={imgSrc} alt='' />
        <h2 className='title'>{title}</h2>
        <p className='date'>
          {`${
            dayStart === dayEnd
              ? setDate(dayStart)
              : `${setDate(dayStart)} - ${setDate(dayEnd)}`
          }.${setDate(month)}.${year}`}
        </p>
        <p className='city'>{city}</p>
        <p className='address'>{address}</p>
        <p className='description'>{description}</p>
        <div className='arrows-container'>
          <BsFillArrowLeftSquareFill
            className='arrow'
            onClick={() => {
              if (
                event.id - 2 >= 0 &&
                (chosenMonth !== events[event.id - 2].month ||
                  chosenYear !== events[event.id - 2].year)
              ) {
                dispatch({ type: 'SET_EVENT', payload: events[event.id - 2] });
                dispatch({
                  type: 'SET_YEAR',
                  payload: events[event.id - 2].year
                });
                dispatch({
                  type: 'SET_PREV_CHOSEN_MONTH',
                  payload: chosenMonth
                });
                dispatch({
                  type: 'SET_MONTH',
                  payload: events[event.id - 2].month - 1
                });
                dispatch({ type: 'SET_LOUDER', payload: true });
              }
            }}
          />
          <BsFillArrowRightSquareFill
            className='arrow'
            onClick={() => {
              if (
                event.id < events.length &&
                (chosenMonth !== events[event.id].month ||
                  chosenYear !== events[event.id].year)
              ) {
                dispatch({ type: 'SET_EVENT', payload: events[event.id] });
                dispatch({
                  type: 'SET_YEAR',
                  payload: events[event.id].year
                });
                dispatch({
                  type: 'SET_PREV_CHOSEN_MONTH',
                  payload: chosenMonth
                });
                dispatch({
                  type: 'SET_MONTH',
                  payload: events[event.id].month - 1
                });
                dispatch({ type: 'SET_LOUDER', payload: true });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
