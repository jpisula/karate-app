import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Calendar.scss';
import { VscNewFile } from 'react-icons/vsc';
import LeftArrow from '../PageContent/Main/ArrowsIcons/LeftArrow';
import RightArrow from '../PageContent/Main/ArrowsIcons/RightArrow';
import EventRow from './subCoponents/EventRow';

const Calendar = () => {
  const [lodziomiodziochujamuja, setLodziomiodziochujamuja] = useState(false);
  const eventsData = {
    events: [
      {
        id: 0,
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 1,
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 2,
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 3,
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      }
    ]
  };
  return (
    <main>
      <div className='admin-calendar-container'>
        <h2 className='header-container header-container-margin'>
          <p>Kalendarz</p>
          <Link to='/admin/aktualnosci'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>

        <section className='articles'>
          <div className='headers'>
            <h3>tytuł</h3>
            <h3>zdjęcie</h3>
            <h3>data rozpoczęcia</h3>
            <h3>data zakończenia</h3>
            <Link to='/admin/aktualnosci/nowy' className='new-article'>
              <VscNewFile />
              <p>Nowy Artykuł</p>
            </Link>
          </div>
          <div className='belt'></div>
          <div className='main-articles-container'>
            {eventsData.events.map((el) => (
              <EventRow event={el} />
            ))}
          </div>

          <div className='pagination-container'>
            <div className='pagination-content'>
              <LeftArrow className='pagination-arrow' />
              <div className='pagination'>
                <div className='pagination-tile pagination-active'>1</div>
                <div className='pagination-tile'>2</div>
                <div className='pagination-tile'>3</div>
                <div className='pagination-tile'>4</div>
                <div className='pagination-tile'>5</div>
                <div className='pagination-tile'>...</div>
                <div className='pagination-tile'>10</div>
              </div>
              <RightArrow className='pagination-arrow' />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Calendar;
