import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import { navConfig } from './configs/nav';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Homepage from './pages/Homepage/Homepage';
import InfoPageTemplate from './pages/info-pages/InfoPageTemplate/InfoPageTemplate';
import Instructors from './pages/info-pages/Instructors/Instructors';
import TrainingsSchedule from './pages/info-pages/TrainingsSchedule/TrainingsSchedule';
import KinderPage from './pages/KinderPage/KinderPage';
import NewsPage from './pages/NewsPage/NewsPage';
import SectionsPage from './pages/SectionsPage/SectionsPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header navConfig={navConfig} />
        <main className='page-content'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/sections' element={<SectionsPage />} />
            <Route path='/kinder' element={<KinderPage />} />
            <Route path='/article/:id' element={<ArticlePage />} />
            <Route path='/newslist' element={<NewsPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/schedule' element={<TrainingsSchedule />} />
            <Route path='/schedule/:group' element={<TrainingsSchedule />} />
            <Route
              path='/instructors'
              element={
                <InfoPageTemplate>
                  <Instructors />
                </InfoPageTemplate>
              }
            />
            <Route path='/*' element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
