import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AdminPanel.scss';
import Calendar from './Calendar/Calendar';
import NewEvent from './Calendar/NewEvent';
import InfoPages from './InfoPages/InfoPages';
import NewInfoPage from './InfoPages/NewInfoPage';
import InstructorsAndHelpers from './InstructorsAndHeplers/InstructorsAndHelpers';
import NewPerson from './InstructorsAndHeplers/NewPerson';
import NewArticle from './NewArticle/NewArticle';
import NewSection from './NewSection/NewSection';
import Articles from './PageContent/Main/Articles';
import Preschoolers from './Preschoolers/Preschoolers';
import NewGroup from './Schedule/NewGroup';
import Schedule from './Schedule/Schedule';
import NewScheduleRow from './Schedule/SubComponents/NewScheduleRow';
import Sections from './Sections/Sections';
import MasterTemplate from './templates/MasterTemplate';

const AdminPanel = () => {
  return (
    <>
      <MasterTemplate>
        <Routes>
          <Route path='/admin' element={<Articles />} />
          <Route path='/admin/aktualnosci' element={<Articles />} />
          <Route path='/admin/sekcje' element={<Sections />} />
          <Route path='/admin/sekcje/dodaj' element={<NewSection />} />
          <Route path='/admin/sekcje/dodaj/:id' element={<NewSection />} />
          <Route path='/admin/aktualnosci/nowy' element={<NewArticle />} />
          <Route path='/admin/aktualnosci/nowy/:id' element={<NewArticle />} />
          <Route path='/admin/przedszkolaki' element={<Preschoolers />} />
          <Route path='/admin/kalendarz' element={<Calendar />} />
          <Route path='/admin/strony-informacyjne' element={<InfoPages />} />
          <Route
            path='/admin/strony-informacyjne/dodaj'
            element={<NewInfoPage />}
          />
          <Route
            path='/admin/strony-informacyjne/dodaj/:id'
            element={<NewInfoPage />}
          />
          <Route
            path='/admin/kalendarz/nowe-wydarzenie'
            element={<NewEvent />}
          />
          <Route
            path='/admin/kalendarz/nowe-wydarzenie/:id'
            element={<NewEvent />}
          />
          <Route path='/admin/harmonogram' element={<Schedule />} />
          <Route path='/admin/harmonogram/dodaj' element={<NewGroup />} />
          <Route
            path='/admin/harmonogram/dodaj/wiersz'
            element={<NewScheduleRow />}
          />
          <Route
            path='/admin/instruktorzy-i-pomocnicy'
            element={<InstructorsAndHelpers />}
          />
          <Route
            path='/admin/instruktorzy-i-pomocnicy/dodaj'
            element={<NewPerson />}
          />
          <Route
            path='/admin/instruktorzy-i-pomocnicy/dodaj/:id'
            element={<NewPerson />}
          />
        </Routes>
        {/* <NewSection /> */}
      </MasterTemplate>
    </>
  );
};

export default AdminPanel;
