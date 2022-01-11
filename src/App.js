import './App.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import NavButton from './components/Navigation/NavButton/NavButton';
import NavDropdownButton from './components/Navigation/NavDropdownButton/NavDropdownButton';
// import ArticlePage from './pages/ArticlePage/ArticlePage';

function App() {
  return (
    <>
      <Navbar>{navbarElements}</Navbar>
      <main>
        <Homepage />
      </main>
    </>
  );
}

const navbarElements = (
  <>
    <NavDropdownButton title={`Informacje`} icon={<AiFillCaretDown />}>
      <NavButton title={'Nasze sekcje'} />
      <NavButton title={'Kalendarz'} />
    </NavDropdownButton>

    <NavButton title={'Nasze sekcje'} />
    <NavButton title={'Kalendarz'} />
  </>
);

export default App;
