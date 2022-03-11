import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import { getNavConfig } from './configs/nav';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Homepage from './pages/Homepage/Homepage';
import InfoGeneral from './pages/info-pages/InfoGeneral/InfoGeneral';
import InfoPageTemplate from './pages/info-pages/InfoPageTemplate/InfoPageTemplate';
import Instructors from './pages/info-pages/Instructors/Instructors';
import TrainingsSchedule from './pages/info-pages/TrainingsSchedule/TrainingsSchedule';
import KinderPage from './pages/KinderPage/KinderPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NotFound from './pages/NotFound/NotFound';
import SectionsPage from './pages/SectionsPage/SectionsPage';
import { useState, useEffect } from 'react';
import Loader from './components/shared/Loader/Loader';

const App = () => {
  const [loader, setLoader] = useState(true);
  const [navConfig, setNavConfig] = useState({});

  useEffect(async () => {
    setNavConfig(await getNavConfig());
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Router>
          <ScrollToTop>
            <Header navConfig={navConfig} />
            <main className='page-content'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/nasze-sekcje' element={<SectionsPage />} />
                <Route
                  path='/zajecia-karate-dla-przedszkolakow-katowice'
                  element={<KinderPage />}
                />
                <Route
                  path='/aktualnosci/:category/:slug/:id'
                  element={<ArticlePage />}
                />
                <Route path='/wszystkie-aktualnosci' element={<NewsPage />} />
                <Route path='/kalendarz' element={<CalendarPage />} />
                <Route
                  path='/harmonogram-zajec'
                  element={<TrainingsSchedule />}
                />
                <Route
                  path='/harmonogram-zajec/:group'
                  element={<TrainingsSchedule />}
                />
                <Route
                  path='/instruktorzy'
                  element={
                    <InfoPageTemplate>
                      <Instructors />
                    </InfoPageTemplate>
                  }
                />
                <Route
                  path='/instruktorzy/:id'
                  element={
                    <InfoPageTemplate>
                      <Instructors />
                    </InfoPageTemplate>
                  }
                />
                <Route
                  path='/info/:id'
                  element={
                    <InfoPageTemplate>
                      <InfoGeneral />
                    </InfoPageTemplate>
                  }
                />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </ScrollToTop>
        </Router>
      )}
    </>
  );
};

export default App;
