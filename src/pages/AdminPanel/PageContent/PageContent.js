import React from 'react';
import './PageContent.scss';
import Aside from './Aside/Aside';
import Main from './Main/Main';

const PageContent = () => {
  return (
    <div className='page-content'>
      <Aside />

      <Main />
    </div>
  );
};

export default PageContent;
