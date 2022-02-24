import React, { useState } from 'react';
import { VscNewFile } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import LeftArrow from '../PageContent/Main/ArrowsIcons/LeftArrow';
import RightArrow from '../PageContent/Main/ArrowsIcons/RightArrow';
import ArticleRow from '../PageContent/Main/Article/Article';
import './NewGroup.scss';
import ScheduleRow from './SubComponents/ScheduleRow';

const NewGroup = () => {
  const [lodziomiodziochujamuja, setLodziomiodziochujamuja] = useState(false);
  const gropusData = {
    groups: [
      {
        id: 0,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa', 'sadasd', 'chsdaj2'],
        helpers: ['adsa', 'sadasd', 'chsdaj2']
      },
      {
        id: 1,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa', 'sadasd', 'chsdaj2'],
        helpers: ['adsa', 'sadasd', 'chsdaj2']
      },
      {
        id: 2,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa', 'sadasd', 'chsdaj2'],
        helpers: ['adsa', 'sadasd', 'chsdaj2']
      }
    ]
  };
  return (
    <main>
      <div className='news-container'>
        <h1>Harmonogram</h1>

        <section className='articles'>
          <div className='headers'>
            <h3>nazwa</h3>
            <h3>Miejsce</h3>
            <h3>Adres</h3>
            <h3>Dzień</h3>
            <h3>Instruktorzy</h3>
            <h3>Pomocnicy</h3>
            <Link to='/admin/harmonogram/dodaj/wiersz' className='new-article'>
              <VscNewFile />
              <p>Dodaj wiersz</p>
            </Link>
          </div>
          <div className='belt'></div>
          <div className='main-articles-container'>
            {gropusData.groups.map((el) => (
              <ScheduleRow group={el} />
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

          <div className='buttons'>
            <div className='green-btns'>
              <Link to='/admin/harmonogram'>
                <Button text={'POWRÓT'} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewGroup;
