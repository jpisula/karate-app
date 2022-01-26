// import { useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ChildrenColumn from './components/Navigation/ChildrenColumn/ChildrenColumn';
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
import logo from './components/Navigation/NavLogo/logo.png';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header navConfig={navConfig} />
        {/* <Navbar>{navbarElements}</Navbar> */}
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

const navConfig = {
  styles: {
    bgColor: '',
    secondBgColor: '',
    mainTextColor: '',
    secondColorText: '',
    hoverColor: '',
    secondHoverColor: ''
  },
  logo: {
    src: logo,
    title: '',
    titleHTML: (
      <>
        <span className='special-text'>oyama-</span>karate
        <span className='special-text'>.</span>eu
      </>
    )
  },
  widthToShowItems: 768,
  hamburgerIcon: <TiThMenuOutline />,
  closeIcon: <VscChromeClose />,
  items: [
    {
      title: 'Nasze sekcje',
      to: '/sections'
    },
    {
      title: 'Informacje',
      to: '/',
      icon: <AiFillCaretDown />,
      subItems: [
        {
          title: 'Aktualności',
          to: '/newslist'
        },
        {
          title: 'Harmonogram zajęć',
          to: '/schedule'
        },
        {
          title: 'Nasi instruktorzy',
          to: '/'
        },
        {
          title: 'O OYAMA Karate',
          to: '/'
        },
        {
          title: 'Stopnie karate',
          to: '/'
        },
        {
          title: 'Przysięga dojo',
          to: '/'
        },
        {
          title: 'Etykieta dojo',
          to: '/'
        },
        {
          title: 'Słownik pojęć',
          to: '/'
        },
        {
          title: 'Galerie',
          to: '/'
        },
        {
          title: 'Klub GOLIAT',
          to: '/'
        },
        {
          title: 'Karate a prawo',
          to: '/'
        },
        {
          title: 'Dla sponsora',
          to: '/'
        }
      ]
    },
    {
      title: 'Kalendarz',
      to: '/calendar'
    }
  ]
};

const navbarElements = (
  <>
    <NavButton linkTo={'sections'} title={'Nasze sekcje'} />
    <NavDropdownButton title={`Informacje`} icon={<AiFillCaretDown />}>
      <ChildrenColumn>
        <NavButton linkTo={'newslist'} title={'Aktualności'} />
        <NavButton linkTo={'schedule'} title={'Harmonogram zajęć'} />
        <NavButton title={'Nasi instruktorzy'} />
        <NavButton title={'O OYAMA Karate'} />
      </ChildrenColumn>
      <ChildrenColumn>
        <NavButton title={'Stopnie karate'} />
        <NavButton title={'Przysięga dojo'} />
        <NavButton title={'Etykieta dojo'} />
        <NavButton title={'Słownik pojęć'} />
      </ChildrenColumn>
      <ChildrenColumn>
        <NavButton title={'Galerie'} />
        <NavButton title={'Klub GOLIAT'} />
        <NavButton title={'Karate a prawo'} />
        <NavButton title={'Dla sponsora'} />
      </ChildrenColumn>
    </NavDropdownButton>

    <NavButton linkTo={'calendar'} title={'Kalendarz'} />
  </>
);

export default App;
