import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InfoPages.scss';
import InfoPageTile from './InfoPageTile';

const InfoPages = () => {
  const InfoPagesData = {
    infoPages: [
      {
        id: 0,
        title: 'STOPNIE W KARATE'
      },
      {
        id: 1,
        title: 'SŁOWNIK POJĘĆ'
      },
      {
        id: 2,
        title: 'KARATE A PREAWO'
      },
      {
        id: 3,
        title: 'PRZYSIĘGA DOJO'
      }
    ]
  };

  return (
    <main>
      <div className='container'>
        <h1>Strony informacyjne</h1>
        <div className='section-tiles'>
          {InfoPagesData.infoPages.map((el) => (
            <InfoPageTile title={el.title} id={el.id} />
          ))}

          <Link to='/admin/strony-informacyjne/dodaj'>
            <div className='add-section-tile'>
              <h2>DODAJ NOWĄ STRONĘ INFORMACYJNĄ</h2>
              <PlusIcon className='plus' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InfoPages;
