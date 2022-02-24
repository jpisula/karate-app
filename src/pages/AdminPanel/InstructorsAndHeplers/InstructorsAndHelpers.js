import React from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InstructorsAndHelpers.scss';

const InstructorsAndHelpers = () => {
  return (
    <main>
      <div className='container'>
        <h1>Instruktorzy i pomocnicy</h1>
        <div className='section-tiles'>
          <SectionTile place={'BODZIONY'} />
          <SectionTile place={'KLYZ'} />
          <SectionTile place={'LOL'} />

          <Link to='/admin/instruktorzy-i-pomocnicy/dodaj'>
            <div className='add-section-tile'>
              <h2>DODAJ NOWEGO INSTRUKTORA LUB POMOCNIKA</h2>
              <PlusIcon className='plus' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InstructorsAndHelpers;
