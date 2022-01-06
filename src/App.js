import './App.scss';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
    </>
  );
}

export default App;
