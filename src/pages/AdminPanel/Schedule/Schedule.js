import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './Schedule.scss';
import ScheduleTile from './ScheduleTile';

const Schedule = () => {
  const scheduleData = {
    schedule: [
      {
        id: 0,
        title: 'DZIECI'
      },
      {
        id: 1,
        title: 'DZIECI SZKOLNE'
      },
      {
        id: 2,
        title: 'MŁODZIEZ'
      }
    ]
  };

  return (
    <main>
      <div className='container'>
        <h1>Harmonogram</h1>
        <div className='section-tiles'>
          {scheduleData.schedule.map((el) => (
            <ScheduleTile title={el.title} id={el.id} />
          ))}

          <div className='add-group-tile'>
            <h2>DODAJ NOWĄ GRUPĘ O NAZWIE:</h2>
            <input />
            <Link to='/admin/harmonogram/dodaj'>
              <PlusIcon className='plus' />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
