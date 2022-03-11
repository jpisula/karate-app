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
        (event.month < event.monthEnd &&
          chosenMonth + 1 < event.monthEnd &&
          chosenMonth + 1 > event.month &&
          event.year === chosenYear) ||
        (event.month < event.monthEnd &&
          chosenMonth + 1 === event.month &&
          dataDay + 1 >= event.dayStart &&
          event.year === chosenYear) ||
        (event.month < event.monthEnd &&
          chosenMonth + 1 === event.monthEnd &&
          dataDay + 1 <= event.dayEnd &&
          event.year === chosenYear) ||
        (event.month === event.monthEnd &&
          event.month === chosenMonth + 1 &&
          event.year === chosenYear &&
          (event.dayStart === event.dayEnd
            ? event.dayStart === dataDay + 1
            : event.dayStart <= dataDay + 1 && dataDay + 1 <= event.dayEnd))
      ) {
        currentEvent = event;
      }
    }
  }

  let cls = `day-tile ${
    currentEvent
      ? `event-type event-type-${currentEvent.categoryName}`
      : className
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
