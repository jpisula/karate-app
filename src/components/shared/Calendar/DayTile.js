import { useContext } from 'react';
import CalendarContext from './CalendarContext';

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

  const currentDate = new Date();
  const eventDate = currentEvent
    ? new Date(
        `${currentEvent.year}/${currentEvent.month}/${currentEvent.dayEnd}`
      )
    : null;
  const classNames = currentEvent
    ? eventDate < currentDate
      ? 'event-type past-event'
      : `event-type event-type-${currentEvent.category}`
    : className;

  return (
    <div
      data-day={dataDay}
      className={`day-tile ${classNames}`}
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
