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

const navBtnWidth = '120px';

const navbarElements = (
  <>
    <NavDropdownButton
      width={navBtnWidth}
      title={`Informacje`}
      icon={<AiFillCaretDown />}
    >
      <NavButton width={navBtnWidth} title={'Nasze sekcje'} />
      <NavButton width={navBtnWidth} title={'Kalendarz'} />
    </NavDropdownButton>

    <NavButton width={navBtnWidth} title={'Nasze sekcje'} />
    <NavButton width={navBtnWidth} title={'Kalendarz'} />
  </>
);

export default App;
