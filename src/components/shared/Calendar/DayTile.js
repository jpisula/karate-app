import { useContext, useEffect, useState } from 'react';
import CalendarContext from './CalendarContext';

const DayTile = ({ dataDay, style, chosenMonth, chosenYear, events }) => {
  let currentEvent;
  const { dispatch } = useContext(CalendarContext);
  for (const event of events) {
    if (
      event.year === chosenYear &&
      event.month - 1 === chosenMonth &&
      (event.dayStart === event.dayEnd
        ? event.dayStart === dataDay
        : event.dayStart <= dataDay && dataDay <= event.dayEnd)
    ) {
      currentEvent = event;
    }
  }

  return (
    <div
      data-day={dataDay}
      className={`day-tile ${
        currentEvent ? `event-type event-type-${currentEvent.category}` : ''
      }`}
      style={style}
      onClick={() => {
        if (currentEvent) {
          dispatch({ type: 'SET_EVENT', payload: currentEvent });
        }
      }}
    >
      {`${dataDay}`}
    </div>
  );
};

export default DayTile;
