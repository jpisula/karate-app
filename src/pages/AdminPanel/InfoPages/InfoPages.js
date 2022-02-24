import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InfoPages.scss';

const InfoPages = () => {
  return (
    <main>
      <div className='container'>
        <h1>Strony informacyjne</h1>
        <div className='section-tiles'>
          <SectionTile place={'STOPNIE W KARATE'} />
          <SectionTile place={'SŁOWNIK POJĘĆ'} />
          <SectionTile place={'KARATE A PREAWO'} />
          <SectionTile place={'PRZYSIĘGA DOJO'} />

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
