import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import events from '../../../configs/events.js';
import { ImCross } from 'react-icons/im';

const EventInfo = () => {
  const { event, dispatch, chosenMonth, chosenYear, currentEvents } =
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

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  if (!isEmpty(event)) {
    return (
      <div className='edges'>
        <div
          className='event-container'
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className='vignette'>
            <h2 className='title'>{title}</h2>
            <p className='address'>{`${address}, ${city}`}</p>
            <p className='date'>
              {`${
                dayStart === dayEnd
                  ? setDate(dayStart)
                  : `${setDate(dayStart)} - ${setDate(dayEnd)}`
              }.${setDate(month)}.${year}`}
            </p>
            <p className='description'>{description}</p>
            <div className='arrows-container'>
              <BsFillArrowLeftSquareFill
                className='arrow'
                onClick={() => {
                  const eventIndex = events.indexOf(event);
                  if (
                    eventIndex > 0 &&
                    (chosenMonth !== events[eventIndex - 1].month ||
                      chosenYear !== events[eventIndex - 1].year)
                  ) {
                    dispatch({
                      type: 'SET_EVENT',
                      payload: events[eventIndex - 1]
                    });
                    dispatch({
                      type: 'SET_YEAR',
                      payload: events[eventIndex - 1].year
                    });
                    dispatch({
                      type: 'SET_PREV_CHOSEN_MONTH',
                      payload: chosenMonth
                    });
                    dispatch({
                      type: 'SET_MONTH',
                      payload: events[eventIndex - 1].month - 1
                    });
                    dispatch({ type: 'SET_LOUDER', payload: true });
                  }
                }}
              />
              <BsFillArrowRightSquareFill
                className='arrow'
                onClick={() => {
                  const eventIndex = events.indexOf(event);
                  if (
                    eventIndex + 1 < events.length &&
                    (chosenMonth !== events[eventIndex + 1].month ||
                      chosenYear !== events[eventIndex + 1].year)
                  ) {
                    dispatch({
                      type: 'SET_EVENT',
                      payload: events[eventIndex + 1]
                    });
                    dispatch({
                      type: 'SET_YEAR',
                      payload: events[eventIndex + 1].year
                    });
                    dispatch({
                      type: 'SET_PREV_CHOSEN_MONTH',
                      payload: chosenMonth
                    });
                    dispatch({
                      type: 'SET_MONTH',
                      payload: events[eventIndex + 1].month - 1
                    });
                    dispatch({ type: 'SET_LOUDER', payload: true });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default EventInfo;
