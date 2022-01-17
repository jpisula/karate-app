import './App.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import NavButton from './components/Navigation/NavButton/NavButton';
import NavDropdownButton from './components/Navigation/NavDropdownButton/NavDropdownButton';
import SectionsPage from './pages/SectionsPage/SectionsPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

function App() {
  return (
    <Router>
      <Navbar>{navbarElements}</Navbar>
      <main className='page-content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/sections' element={<SectionsPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/*' element={<Homepage />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </main>
    </Router>
  );
}

const navbarElements = (
  <>
    <NavButton linkTo={'sections'} title={'Nasze sekcje'} />
    <NavDropdownButton title={`Informacje`} icon={<AiFillCaretDown />}>
      <div className='column'>
        <NavButton title={'Aktualności'} />
        <NavButton title={'Harmonogram zajęć'} />
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
