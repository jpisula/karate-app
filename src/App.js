import './App.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import NavButton from './components/Navigation/NavButton/NavButton';
import NavDropdownButton from './components/Navigation/NavDropdownButton/NavDropdownButton';
import SectionsPage from './pages/SectionsPage/SectionsPage';
// import ArticlePage from './pages/ArticlePage/ArticlePage';

function App() {
  return (
    <>
      <Navbar>{navbarElements}</Navbar>
      <main>
        <SectionsPage />
      </main>
    </>
  );
}

const navbarElements = (
  <>
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

    <NavButton title={'Nasze sekcje'} />
    <NavButton title={'Kalendarz'} />
  </>
);

export default App;
