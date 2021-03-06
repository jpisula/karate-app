import { useEffect, useState } from 'react';
import Calendar from '../../components/shared/Calendar/Calendar';
import { CalendarProvider } from '../../components/shared/Calendar/CalendarContext';
import ColorsDescription from '../../components/shared/Calendar/ColorsDescription';
import EventInfo from '../../components/shared/Calendar/EventInfo';
import YearCalendar from '../../components/shared/YearCalendar/YearCalendar';
import './CalendarPage.scss';

function CalendarPage() {
  const [isCalendarDisplayed, setIsCalendarDisplayed] = useState(false);
  const [isYearCalendarDisplayed, setIsYearCalendarDisplayed] = useState(false);

  const setCalendarToDisplay = (width) => {
    if (width >= 1024) {
      setIsYearCalendarDisplayed(true);
      setIsCalendarDisplayed(false);
    } else {
      setIsYearCalendarDisplayed(false);
      setIsCalendarDisplayed(true);
    }
  };

  useEffect(() => {
    setCalendarToDisplay(window.innerWidth);

    const hadleResize = () => {
      setCalendarToDisplay(window.innerWidth);
    };

    window.addEventListener('resize', hadleResize);

    return () => window.removeEventListener('resize', hadleResize);
  }, []);

  return (
    <CalendarProvider>
      <article className='container'>
        <h1 className='calendar-title'>Kalendarz 2021</h1>
        <div className='calendar-description'>
          KALENDARZ IMPREZ KLUBOWYCH ORAZ OYAMA PFK W II POŁOWIE 2021 ROKU{' '}
          <br /> (stan na 26.08.2021.) <br /> <br />
          <span>
            Zawody Klubowe organizowane przez ŚKK "GOLIAT" zostaną uzupełnione w
            najbliższym czasie.
          </span>
          <p className='event-click-instruction'>
            Kliknij w kalendarzu na wydarzenie, aby dowiedzieć się o nim więcej!
          </p>
        </div>

        {isCalendarDisplayed && (
          <>
            <section className='calendar'>
              <Calendar />
            </section>
            <section className='event-info'>
              <EventInfo />
            </section>
          </>
        )}

        {isYearCalendarDisplayed && <YearCalendar />}

        {/* <p className='event-switcher-instuction'>
          Uzywaj strzałek, aby przeglądać kolejne wydarzenia!
        </p> */}

        <ColorsDescription width={window.innerWidth} />

        <div className='calendar-info'>
          <ul className='calendar-info-list'>
            <li className='calendar-info-list-item'>
              Organizatorzy ww. imprez zastrzegają sobie prawo do dokonania
              zmian organizacyjno-programowych, będących następstwem
              ewentualnych zarządzeń władz centralnych lub lokalnych,
              wynikających np. z epidemii COVID-19.
            </li>
            <li className='calendar-info-list-item'>
              Kalendarz nie zawiera zawodów organizowanych przez federacje
              karate współpracujące z OYAMA PFK,
            </li>
          </ul>
        </div>
      </article>
    </CalendarProvider>
  );
}

export default CalendarPage;
