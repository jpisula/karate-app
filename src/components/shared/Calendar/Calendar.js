import { useEffect, useRef, useState } from 'react';
import './Calendar.scss';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

function Calendar() {
  let nrOfFebDays = 28;

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

  let nrOfAllDays = 0;
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

  useEffect(() => {}, []);

  // useEffect(() => {
  //   forceUpdate();
  // }, [setChosenMonth]);

  // useEffect(() => {
  //   forceUpdate();
  // }, [setChosenYear]);

  useEffect(() => {
    setCalendartitle(`${months[chosenMonth].name} ${chosenYear}`);
  }, [chosenYear]);

  useEffect(() => {
    setCalendartitle(`${months[chosenMonth].name} ${chosenYear}`);
  }, [chosenMonth]);

  useEffect(() => {
    setYearSwitcher(false);
    nrOfFebDays = chosenYear % 4 === 0 && chosenYear % 100 !== 0 ? 29 : 28;
  }, [chosenYear]);

  const weekDaysNames = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];

  const handleArrowClick = (side) => {
    if (side === 'LEFT') {
      let prevStart;
      if (chosenMonth > 0 && !isYearSwitcherOpen) {
        prevStart = startDay - ((months[chosenMonth - 1].nrOfDays % 7) % 7);
        setPrevChosenMonth(chosenMonth);
        setChosenMonth(chosenMonth - 1);
        // console.log(prevChosenMonth, prevChosenYear, chosenMonth, chosenYear);
      } else if (!isYearSwitcherOpen) {
        setPrevChosenYear(chosenYear);
        setChosenYear(chosenYear - 1);
        prevStart =
          startDay -
          ((months[chosenMonth - 1 < 0 ? 11 : chosenMonth - 1].nrOfDays % 7) %
            7);
        setChosenMonth(11);
        // console.log(prevChosenMonth, prevChosenYear, chosenMonth, chosenYear);
      }
      changeStartDay(prevStart <= 0 ? prevStart + 7 : prevStart);
    } else if (side === 'RIGHT') {
      setPrevChosenMonth(chosenMonth);
      changeStartDay(((startDay + months[chosenMonth].nrOfDays - 1) % 7) + 1);

      if (chosenMonth < 11 && !isYearSwitcherOpen) {
        setChosenMonth(chosenMonth + 1);
        // console.log(prevChosenMonth, prevChosenYear, chosenMonth, chosenYear);
      } else if (!isYearSwitcherOpen) {
        setChosenYear(chosenYear + 1);
        setChosenMonth(0);
        // console.log(prevChosenMonth, prevChosenYear, chosenMonth, chosenYear);
      }
    }
  };

  const isYearCommon = (y) => {
    if (y % 4 === 0 && y % 100 !== 0) {
      return true;
    }
    return false;
  };

  const generateWeekDays = () => {
    let weekDays = [];
    for (let i = 0; i < weekDaysNames.length; i++) {
      weekDays.push(<div className='week-day'>{weekDaysNames[i]}</div>);
    }
    return weekDays;
  };

  const countDays = (month1, year1, momnth2, year2) => {
    let days = 0;
    let commonYears = 0;
    console.log(month1, year1, momnth2, year2);

    if (year1 === year2) {
      for (let i = month1 + 1; i < momnth2; i++) {
        days += months[i].nrOfDays;
      }
      return days;
    } else {
      if (isYearCommon(year1)) {
        days++;
      }
      if (isYearCommon(year2)) {
        days++;
      }

      if (year1 > year2) {
        for (let i = month1; i < 12; i++) {
          days += months[i].nrOfDays;
        }
        for (let i = 0; i < momnth2; i++) {
          days += months[i].nrOfDays;
        }
      } else {
        for (let i = month1 + 1; i < momnth2; i++) {
          days += months[i].nrOfDays;
        }
      }

      for (let i = year1 + 1; i < year2; i++) {
        if (isYearCommon(i)) {
          commonYears++;
        }
        days +=
          commonYears * (nrOfAllDays + 1) + nrOfAllDays * (year2 - year1 - 1);
      }
    }
    return days;
  };

  const generateDayTiles = (numberOfTiles, startDay) => {
    let dayTiles = [];
    for (let i = 0; i < numberOfTiles; i++) {
      dayTiles.push(
        <div
          className='day-tile'
          style={{ gridColumnStart: `${((startDay + i - 1) % 7) + 1}` }}
        >
          {i + 1}
        </div>
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
            setMonthSwitcher(!isMonthSwitcherOpen);
            setChosenYear(event.target.innerText);
          }}
        >
          {i}
        </li>
      );
    }
    return yearsListItems;
  };

  const generateMonthListItems = () => {
    let monthListItems = [];
    for (let i = 0; i < 11; i++) {
      monthListItems.push(
        <li
          className='month-item'
          onClick={(event) => {
            setPrevChosenMonth(chosenMonth);
            setChosenMonth(
              months.findIndex((el) => el.name === event.target.innerText)
            );
            setMonthSwitcher(!isMonthSwitcherOpen);
            setYearSwitcher(false);
            let daysToMove = countDays(
              prevChosenMonth,
              prevChosenYear,
              chosenMonth,
              chosenYear
            );
            startDay = (startDay + (daysToMove % 7)) % 7;
            console.log(daysToMove);
          }}
        >
          {months[i].name}
        </li>
      );
    }
    return monthListItems;
  };

  return (
    <section className='calendar-container'>
      <header className='top'>
        <IoMdArrowDropleft
          className='arrow-left'
          onClick={() => handleArrowClick('LEFT')}
        />
        <p
          className='month-and-year'
          onClick={() => {
            if (isMonthSwitcherOpen) {
              setMonthSwitcher(!isMonthSwitcherOpen);
            } else {
              setYearSwitcher(!isYearSwitcherOpen);
            }
          }}
        >
          {calendarTitle}
        </p>
        <IoMdArrowDropright
          className='arrow-right'
          onClick={() => handleArrowClick('RIGHT')}
        />
      </header>
      <main className='calendar-content'>
        {isYearSwitcherOpen && (
          <div className='year-switcher'>
            <div className='year-list-wrapper'>
              <ul className='year-list'>{generateYearsListItems()}</ul>
            </div>
          </div>
        )}
        {isMonthSwitcherOpen && (
          <div className='month-switcher'>
            <div className='month-list-wrapper'>
              <ul className='month-list'>{generateMonthListItems()}</ul>
            </div>
          </div>
        )}
        <div className='week-days'>{generateWeekDays()}</div>
        <div className='month-days'>
          {generateDayTiles(months[chosenMonth].nrOfDays, startDay)}
        </div>
      </main>
    </section>
  );
}

export default Calendar;
