import { AiFillCaretDown } from 'react-icons/ai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navigation/Navbar/Navbar';
import NavButton from './components/Navigation/NavButton/NavButton';
import NavDropdownButton from './components/Navigation/NavDropdownButton/NavDropdownButton';
import ScrollToTop from './components/ScrollToTop';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Homepage from './pages/Homepage/Homepage';
import TrainingsSchedule from './pages/info-pages/TrainingsSchedule/TrainingsSchedule';
import NewsPage from './pages/NewsPage/NewsPage';
import SectionsPage from './pages/SectionsPage/SectionsPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar>{navbarElements}</Navbar>
        <main className='page-content'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/sections' element={<SectionsPage />} />
            <Route path='/article/:id' element={<ArticlePage />} />
            <Route path='/newslist' element={<NewsPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/schedule' element={<TrainingsSchedule />} />
            <Route path='/*' element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

const navbarElements = (
  <>
    <NavButton linkTo={'sections'} title={'Nasze sekcje'} />
    <NavDropdownButton title={`Informacje`} icon={<AiFillCaretDown />}>
      <div className='column'>
        <NavButton linkTo={'newslist'} title={'Aktualności'} />
        <NavButton linkTo={'schedule'} title={'Harmonogram zajęć'} />
        <NavButton title={'Nasi instruktorzy'} />
        <NavButton title={'O OYAMA Karate'} />
      </div>
      <div className='column'>
        <NavButton title={'Stopnie karate'} />
        <NavButton title={'Przysięga dojo'} />
        <NavButton title={'Etykieta dojo'} />
        <NavButton title={'Słownik pojęć'} />
      </div>
      <div className='column'>
        <NavButton title={'Galerie'} />
        <NavButton title={'Klub GOLIAT'} />
        <NavButton title={'Karate a prawo'} />
        <NavButton title={'Dla sponsora'} />
      </div>
    </NavDropdownButton>

    <NavButton linkTo={'calendar'} title={'Kalendarz'} />
  </>
);

export default App;
