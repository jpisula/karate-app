import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './EventInfo.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import events from '../../../configs/events.js';

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
    console.log(event);
    return (
      <div className='edges'>
        <div
          className='event-container'
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className='vignette'>
            {/* <img src={temporaryImg} alt='current event image' /> */}
            <h2 className='title'>{title}</h2>
            <p className='address'>{`${address}, ${city}`}</p>
            <p className='date'>{`${
              dayStart === dayEnd
                ? setDate(dayStart)
                : `${setDate(dayStart)} - ${setDate(dayEnd)}`
            }.${setDate(month)}.${year}`}</p>
            <h2 className='description-title'>Opis wydarzenia: </h2>
            <p className='description'>{description}</p>
            <div className='arrows-container'>
              <BsFillArrowLeftSquareFill
                className='arrow'
                onClick={() => {
                  const eventIndex = currentEvents;
                  if (
                    event.id - 2 >= 0 &&
                    (chosenMonth !== events[event.id - 2].month ||
                      chosenYear !== events[event.id - 2].year)
                  ) {
                    dispatch({
                      type: 'SET_EVENT',
                      payload: events[event.id - 2]
                    });
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
      </div>
    );
  } else {
    return <></>;
  }
};

export default EventInfo;
