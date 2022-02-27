import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from './icons/PlusIcon';
import './Sections.scss';
import SectionTile from './SectionTile/SectionTile';

const Sections = () => {
  const sectionsData = {
    sections: [
      {
        id: 0,
        place: 'dad'
      },
      {
        id: 1,
        place: 'KATOWICE LIGOTA'
      },
      {
        id: 2,
        place: 'KATOWICE LIGOTA'
      },
      {
        id: 3,
        place: 'KATOWICE LIGOTA'
      }
    ]
  };

  return (
    <main>
      <div className='container'>
        <h1>Nasze Sekcje</h1>
        <div className='section-tiles'>
          {sectionsData.sections.map((el) => (
            <SectionTile place={el.place} id={el.id} />
          ))}

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
