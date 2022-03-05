import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Calendar.scss';
import { VscNewFile } from 'react-icons/vsc';
import LeftArrow from '../PageContent/Main/ArrowsIcons/LeftArrow';
import RightArrow from '../PageContent/Main/ArrowsIcons/RightArrow';
import EventRow from './subCoponents/EventRow';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const Calendar = () => {
  const [ReloadVar, setReloadVar] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [eventCategories, setEventCategories] = useState([]);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/calendar`);
    setEventsData(data.data.data);

    const categories = await axios.get(`${API_URL}/eventcategories`);
    setEventCategories(categories.data.data);
    setLoader(false);
    console.log(data.data.data);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='admin-calendar-container'>
            <h2 className='header-container header-container-margin'>
              <p>Kalendarz</p>
              <Link to='/admin/aktualnosci'>
                <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
              </Link>
            </h2>

            <form className='inputs-container'>
              <div className='input-container'>
                <label htmlFor='title'>wyszukaj po tytule: </label>
                <input type='text' name='title' placeholder='podaj tytuł' />
              </div>

              <div className='input-container'>
                <label htmlFor='sort'>sortuj po: </label>
                <select name='sorting' className='select'>
                  {eventCategories.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <section className='articles'>
              <div className='headers'>
                <h3>tytuł</h3>
                <h3>zdjęcie</h3>
                <h3>data rozpoczęcia</h3>
                <h3>data zakończenia</h3>
                <Link
                  to='/admin/kalendarz/nowe-wydarzenie'
                  className='new-article'
                >
                  <VscNewFile />
                  <p>Nowe wydarzenie</p>
                </Link>
              </div>
              <div className='belt'></div>
              <div className='main-articles-container'>
                {eventsData.map((el) => (
                  <EventRow event={el} key={el.id} />
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
      )}
    </>
  );
};

export default Calendar;
