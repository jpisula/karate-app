import React from 'react';
import Nav from '../Nav/Nav';
import Aside from '../PageContent/Aside/Aside';
import './MasterTemplate.scss';

const MasterTemplate = ({ children }) => {
  return (
    <>
      <Nav />
      <div className='page-content'>
        <Aside />

        {children}
      </div>
    </>
  );
};

export default MasterTemplate;
