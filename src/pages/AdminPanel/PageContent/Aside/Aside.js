import React from 'react';
import './Aside.scss';
import {
  BiBarChartSquare,
  BiNews,
  BiQuestionMark,
  BiCalendarAlt
} from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';

const Aside = () => {
  return (
    <aside>
      <div className='container'>
        <div className='logo'></div>
        <div className='admin-panel'>
          <h2>PANEL ADMINISTRACYJNY</h2>
          <div className='belt'></div>
          <div className='dashboard aside-btn'>
            <BiBarChartSquare className='aside-btn-icon' />
            Dashboard
          </div>
          <div className='news aside-btn'>
            <BiNews className='aside-btn-icon' />
            Aktualności
          </div>
          <div className='sections aside-btn'>
            <BiQuestionMark className='aside-btn-icon' />
            Nasze sekcje
          </div>
          <div className='preschoolers aside-btn'>
            <BiQuestionMark className='aside-btn-icon' />
            Przedszkolaki
          </div>
          <div className='calendar aside-btn'>
            <BiCalendarAlt className='aside-btn-icon' />
            Kalendarz
          </div>
          <div className='info-pages aside-btn'>
            <HiOutlineNewspaper className='aside-btn-icon' />
            Strony Informacyjne
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
