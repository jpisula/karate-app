import './YearCalendar.scss';
import { useState } from 'react';
import events from '../../../database/events';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';
import { useEffect } from 'react/cjs/react.development';

const YearCalendar = () => {
  const weekDaysNames = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];

  const [startDay, setStartDay] = useState(6);
  const [startYearDay, setStartYearDay] = useState(6);
  const [currentYear, setCurrentYear] = useState(2022);

  const isYearCommon = (y) => {
    if (y % 4 === 0 && y % 100 !== 0) {
      return true;
    }
    return false;
  };

  let nrOfFebDays = isYearCommon(currentYear) ? 29 : 28;

  const months = [
    { name: 'STYCZEŃ', nrOfDays: 31 },
    { name: 'LUTY', nrOfDays: nrOfFebDays },
    { name: 'MARZEC', nrOfDays: 31 },
    { name: 'KWIECIEŃ', nrOfDays: 30 },
    { name: 'MAJ', nrOfDays: 31 },
    { name: 'CZERWIEC', nrOfDays: 30 },
    { name: 'LIPIEC', nrOfDays: 31 },
    { name: 'SIERPIEŃ', nrOfDays: 31 },
    { name: 'WRZESIEŃ', nrOfDays: 30 },
    { name: 'PADZIERNIK', nrOfDays: 31 },
    { name: 'LISTOPAD', nrOfDays: 30 },
    { name: 'GRUDZIEŃ', nrOfDays: 31 }
  ];

  const nrOfYearDays = (y) => {
    if (isYearCommon(y)) {
      return 366;
    } else {
      return 365;
    }
  };

  const generateDayTiles = (numberOfTiles, startDay, currentEvents, month) => {
    let dayTiles = [];
    for (let i = 1; i <= numberOfTiles; i++) {
      let day = (
        <div
          className='day-tile'
          style={{ gridColumnStart: `${((startDay + i - 1) % 7) + 1}` }}
        >
          {i}
        </div>
      );

      // for (const event of currentEvents[month]) {
      //   if (
      //     event.dayStart === event.dayEnd
      //       ? event.dayStart === i
      //       : event.dayStart <= i && i <= event.dayEnd
      //   ) {
      //     day = (
      //       <div
      //         className={`day-tile event event-${event.type}`}
      //         style={{ gridColumnStart: `${startDay}` }}
      //       >
      //         {i}
      //       </div>
      //     );
      //   }
      //  }
      dayTiles.push(day);
    }
    // setStartDay(((startDay + months[month].nrOfDays) % 7) + 1);
    return dayTiles;
  };

  const generateMonthTiles = (y) => {
    let monthTiles = [];
    let currentEvents = Array.apply(null, Array(12)).map(() => []);
    // setStartDay(startYearDay);

    for (const event of events) {
      if (event.year === currentYear) {
        console.log(event);
        currentEvents[event.month - 1].push(event);
      }
    }

    for (let i = 0; i < 12; i++) {
      monthTiles.push(
        <div className='month-container'>
          <div className='month-name'>{months[i].name}</div>
          <div className='day-tiles-container'>
            {generateDayTiles(months[i].nrOfDays, startDay, currentEvents, i)}
          </div>
        </div>
      );
      // setStartDay(((startDay + months[i].nrOfDays) % 7) + 1);
    }
    return monthTiles;
  };

  const generateWeekDays = () => {
    let weekDays = [];
    for (let i = 0; i < weekDaysNames.length; i++) {
      weekDays.push(<div className='week-day'>{weekDaysNames[i]}</div>);
    }
    return weekDays;
  };

  return (
    <main className='calendar-container'>
      <div className='year-arrows-container'>
        <div className='arrow-left'>
          <BsFillArrowLeftCircleFill
            onClick={() => {
              setCurrentYear(currentYear - 1);
              setStartYearDay(
                ((startYearDay - nrOfYearDays(currentYear)) % 7) + 1
              );
            }}
          />
        </div>
        <div className='year'>{currentYear}</div>
        <div className='arrow-right'>
          <BsFillArrowRightCircleFill
            onClick={() => {
              setStartYearDay(
                ((startYearDay + nrOfYearDays(currentYear)) % 7) + 1
              );
              setCurrentYear(currentYear + 1);
            }}
          />
        </div>
      </div>
      <div className='months-container'>{generateMonthTiles(currentYear)}</div>
    </main>
  );
};

export default YearCalendar;
