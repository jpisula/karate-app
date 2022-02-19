import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from './icons/PlusIcon';
import './Sections.scss';
import SectionTile from './SectionTile/SectionTile';

const Sections = () => {
  return (
    <main>
      <div className='container'>
        <h1>Nasze Sekcje</h1>
        <div className='section-tiles'>
          <SectionTile place={'KATOWICE LIGOTA'} />
          <SectionTile place={'KATOWICE LIGOTA'} />
          <SectionTile place={'KATOWICE LIGOTA'} />
          <SectionTile place={'KATOWICE LIGOTA'} />

          <Link to='/admin/sekcje/dodaj'>
            <div className='add-section-tile'>
              <h2>DODAJ NOWĄ SEKCJĘ</h2>
              <PlusIcon className='plus' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Sections;
