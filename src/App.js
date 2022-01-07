import './App.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import NavButton from './components/Navigation/NavButton/NavButton';

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
    <NavButton sideMenu={true} title={`Informacje`} icon={<AiFillCaretDown />}>
      <NavButton title={'Nasze sekcje'} />
      <NavButton title={'Kalendarz'} />
    </NavButton>

    <NavButton title={'Nasze sekcje'} />
    <NavButton title={'Kalendarz'} />
  </>
);

export default App;
