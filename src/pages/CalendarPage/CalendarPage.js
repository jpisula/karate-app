import Calendar from '../../components/shared/Calendar/Calendar';
import { CalendarProvider } from '../../components/shared/Calendar/CalendarContext';
import EventInfo from '../../components/shared/Calendar/EventInfo';
import './CalendarPage.scss';

function CalendarPage() {
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
        </div>

        <section className='calendar'>
          <Calendar />
        </section>

        <section className='event-info'>
          <EventInfo />
        </section>

        <div className='calendar-info'>
          <ol className='calendar-info-list'>
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
          </ol>
        </div>
      </article>
    </CalendarProvider>
  );
}

export default CalendarPage;
