import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AdminPanel.scss';
import Calendar from './Calendar/Calendar';
import NewArticle from './NewArticle/NewArticle';
import NewSection from './NewSection/NewSection';
import Main from './PageContent/Main/Main';
import Preschoolers from './Preschoolers/Preschoolers';
import Sections from './Sections/Sections';
import MasterTemplate from './templates/MasterTemplate';

const AdminPanel = () => {
  return (
    <>
      <MasterTemplate>
        <Routes>
          <Route path='/admin' element={<Main />} />
          <Route path='/admin/aktualnosci' element={<Main />} />
          <Route path='/admin/sekcje' element={<Sections />} />
          <Route path='/admin/sekcje/dodaj' element={<NewSection />} />
          <Route path='/admin/aktualnosci/nowy' element={<NewArticle />} />
          <Route path='/admin/przedszkolaki' element={<Preschoolers />} />
          <Route path='/admin/kalendarz' element={<Calendar />} />
        </Routes>
        {/* <NewSection /> */}
      </MasterTemplate>
    </>
  );
};

export default AdminPanel;
