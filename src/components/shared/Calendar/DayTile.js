import { useContext } from 'react';
import CalendarContext from './CalendarContext';
import './DayTile.scss';

const DayTile = ({
  dataDay,
  style,
  chosenMonth,
  chosenYear,
  events,
  className
}) => {
  let currentEvent;
  const { dispatch } = useContext(CalendarContext);
  for (const event of events) {
    if (event.year === chosenYear) {
      if (
        (event.monthEnd &&
          chosenMonth === event.month &&
          dataDay <= event.dayStart) ||
        (event.monthEnd &&
          chosenMonth === event.month - 1 &&
          dataDay >= event.dayEnd) ||
        (event.month - 1 === chosenMonth &&
          (event.dayStart === event.dayEnd
            ? event.dayStart === dataDay
            : event.dayStart <= dataDay && dataDay <= event.dayEnd))
      ) {
        currentEvent = event;
      }
    }
  }

  let cls = `day-tile ${
    currentEvent ? `event-type event-type-${currentEvent.category}` : className
  }`;

  let currentDate = new Date();
  const eventDate = currentEvent
    ? new Date(
        `${currentEvent.year} / ${currentEvent.month} / ${currentEvent.dayEnd}`
      )
    : null;
  if (currentEvent) {
    cls += currentDate > eventDate ? ' past-event' : '';
  }

  return (
    <div
      data-day={dataDay}
      className={cls}
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
