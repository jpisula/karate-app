import { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import './Calendar.scss';
import CalendarView from './CalendarView';
import DayTile from './DayTile.js';
import {
  isYearCommon,
  countDays,
  months,
  nrOfFebDays,
  nrOfAllDays
} from './helpers.js';
import events from '../../../database/events.js';

function Calendar() {
  let nrOfFebDays = 28;
  let nrOfAllDays = 0;
  let prevChosenMonthTemp = 0;

  const weekDaysNames = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];

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

  for (let i = 0; i < 12; i++) {
    nrOfAllDays += months[i].nrOfDays;
  }

  const [startDay, changeStartDay] = useState(6);
  const [isYearSwitcherOpen, setYearSwitcher] = useState(false);
  const [isMonthSwitcherOpen, setMonthSwitcher] = useState(false);
  const [chosenYear, setChosenYear] = useState(2022);
  const [prevChosenYear, setPrevChosenYear] = useState(2022);
  const [prevChosenMonth, setPrevChosenMonth] = useState(0);
  const [chosenMonth, setChosenMonth] = useState(0);
  const [calendarTitle, setCalendartitle] = useState(`STYCZEŃ 2022`);
  const [louderForOthers, setlouderForOthers] = useState(false);
  const [daysToMove, setDaysToMove] = useState(0);

  useEffect(() => {
    setCalendartitle(`${months[chosenMonth].name} ${chosenYear}`);
    setYearSwitcher(false);
    nrOfFebDays = chosenYear % 4 === 0 && chosenYear % 100 !== 0 ? 29 : 28;
  }, [chosenYear]);

  // useEffect(() => {
  //   loudEvents();
  // }, [chosenMonth]);

  useEffect(() => {
    if (louderForOthers === true) {
      setDaysToMove(
        countDays(
          prevChosenMonth,
          prevChosenYear,
          chosenMonth,
          chosenYear,
          months,
          nrOfAllDays
        )
      );
      setlouderForOthers(false);
    }
  }, [louderForOthers]);

  useEffect(() => {
    const daysToMoveMod7 = (startDay + (daysToMove % 7)) % 7;
    const newStartDayFuture = daysToMoveMod7 <= 0 ? 7 : daysToMoveMod7;
    const newStartDayPast =
      daysToMoveMod7 <= 0 ? daysToMoveMod7 + 7 : daysToMoveMod7;
    changeStartDay(daysToMove > 0 ? newStartDayFuture : newStartDayPast);
  }, [daysToMove]);

  // const loudEvents = () => {

  // };

  // const deleteEvents = () => {

  // };

  const handleDateSwitcherClick = () => {
    if (isMonthSwitcherOpen) {
      setMonthSwitcher(!isMonthSwitcherOpen);
    } else {
      setYearSwitcher(!isYearSwitcherOpen);
    }
  };

  const handleArrowClick = (side) => {
    // deleteEvents();
    if (side === 'LEFT') {
      let prevStart;
      if (chosenMonth > 0 && !isYearSwitcherOpen) {
        prevStart = startDay - ((months[chosenMonth - 1].nrOfDays % 7) % 7);
        setPrevChosenMonth(chosenMonth);
        setChosenMonth(chosenMonth - 1);
      } else if (!isYearSwitcherOpen) {
        setPrevChosenYear(chosenYear);
        setChosenYear(chosenYear - 1);
        prevStart =
          startDay -
          ((months[chosenMonth - 1 < 0 ? 11 : chosenMonth - 1].nrOfDays % 7) %
            7);
        setChosenMonth(11);
      }
      changeStartDay(prevStart <= 0 ? prevStart + 7 : prevStart);
    } else if (side === 'RIGHT') {
      setPrevChosenMonth(chosenMonth);
      changeStartDay(((startDay + months[chosenMonth].nrOfDays - 1) % 7) + 1);

      if (chosenMonth < 11 && !isYearSwitcherOpen) {
        setChosenMonth(chosenMonth + 1);
      } else if (!isYearSwitcherOpen) {
        setChosenYear(chosenYear + 1);
        setChosenMonth(0);
      }
    }
  };

  const generateWeekDays = () => {
    let weekDays = [];
    for (let i = 0; i < weekDaysNames.length; i++) {
      weekDays.push(<div className='week-day'>{weekDaysNames[i]}</div>);
    }
    return weekDays;
  };

  const generateDayTiles = (numberOfTiles, startDay) => {
    let dayTiles = [];
    for (let i = 0; i < numberOfTiles; i++) {
      dayTiles.push(
        <DayTile
          dataDay={i + 1}
          style={{ gridColumnStart: `${((startDay + i - 1) % 7) + 1}` }}
          chosenMonth={chosenMonth}
          chosenYear={chosenYear}
          events={events}
        />
        // <div
        //   data-day={i + 1}
        //   className='day-tile'
        //   style={{ gridColumnStart: `${((startDay + i - 1) % 7) + 1}` }}
        // >
        //   {`${i + 1}`}
        // </div>
      );
    }
    return dayTiles;
  };

  const generateYearsListItems = () => {
    let yearsListItems = [];
    for (let i = 2012; i < 2050; i++) {
      yearsListItems.push(
        <li
          className='year-item'
          onClick={(event) => {
            setPrevChosenYear(chosenYear);
            setChosenYear(Number.parseInt(event.target.innerText));
            setMonthSwitcher(!isMonthSwitcherOpen);
            setYearSwitcher(false);
          }}
        >
          {i}
        </li>
      );
    }
    return yearsListItems;
  };

  const handleMonthChooseClick = (e) => {
    setMonthSwitcher(!isMonthSwitcherOpen);
    setYearSwitcher(false);
    setPrevChosenMonth(chosenMonth);
    const currentMonth = months.findIndex(
      (el) => el.name === e.target.innerText
    );
    setChosenMonth(currentMonth);

    setlouderForOthers(true);
  };

  const generateMonthListItems = () => {
    let monthListItems = [];
    for (let i = 0; i < 11; i++) {
      monthListItems.push(
        <li className='month-item' onClick={handleMonthChooseClick}>
          {months[i].name}
        </li>
      );
    }
    return monthListItems;
  };

  return (
    <CalendarView
      calendarTitle={calendarTitle}
      chosenMonth={chosenMonth}
      generateMonthListItems={generateMonthListItems}
      generateWeekDays={generateWeekDays}
      generateYearsListItems={generateYearsListItems}
      handleArrowClick={handleArrowClick}
      isMonthSwitcherOpen={isMonthSwitcherOpen}
      isYearSwitcherOpen={isYearSwitcherOpen}
      months={months}
      startDay={startDay}
      generateDayTiles={generateDayTiles}
      handleDateSwitcherClick={handleDateSwitcherClick}
      chosenYear={chosenYear}
    />
  );
}

export default Calendar;
