import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './Schedule.scss';

const Schedule = () => {
  return (
    <main>
      <div className='container'>
        <h1>Harmonogram</h1>
        <div className='section-tiles'>
          <SectionTile place={'DZIECI'} />
          <SectionTile place={'DZIECI SZKOLNE'} />
          <SectionTile place={'MŁODZIEZ'} />

          <Link to='/admin/harmonogram/dodaj'>
            <div className='add-section-tile'>
              <h2>DODAJ NOWĄ GRUPĘ</h2>
              <PlusIcon className='plus' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
