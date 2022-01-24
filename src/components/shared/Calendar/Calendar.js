import { useEffect, useState } from 'react';
import './Calendar.scss';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const weekDaysNames = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];

const start = 5;

const generateWeekDays = () => {
  let weekDays = [];
  for (let i = 0; i < weekDaysNames.length; i++) {
    weekDays.push(<div className='week-day'>{weekDaysNames[i]}</div>);
  }
  return weekDays;
};

const generateDayTiles = (numberOfTiles) => {
  let dayTiles = [];
  for (let i = 1; i <= numberOfTiles; i++) {
    dayTiles.push(<div className='day-tile'>{i}</div>);
  }
  return dayTiles;
};

function Calendar() {
  const [month, changeMonth] = useState(0);
  const [year, changeYear] = useState(2022);
  let nrOfFebDays = 28;
  useEffect(() => {
    nrOfFebDays = year % 4 === 0 && year % 100 !== 0 ? 29 : 28;
  }, [year]);

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

  return (
    <div className='calendar-container'>
      <div className='top'>
        <IoMdArrowDropleft
          className='arrow-left'
          onClick={() => {
            if (month > 0) {
              changeMonth(month - 1);
            }
          }}
        />
        <p className='month-and-year'>{`${months[month].name} ${year}`}</p>
        <IoMdArrowDropright
          className='arrow-right'
          onClick={() => {
            if (month < 11) {
              changeMonth(month + 1);
            }
          }}
        />
      </div>
      <div className='week-days'>{generateWeekDays()}</div>
      <div className='month-days' style={{ gridColumnStart: `${start}` }}>
        {generateDayTiles(months[month].nrOfDays)}
      </div>
    </div>
  );
}

export default Calendar;
