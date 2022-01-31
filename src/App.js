// import { useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import logo from './assets/logo.png';
import ScrollToTop from './components/ScrollToTop';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Homepage from './pages/Homepage/Homepage';
import TrainingsSchedule from './pages/info-pages/TrainingsSchedule/TrainingsSchedule';
import NewsPage from './pages/NewsPage/NewsPage';
import SectionsPage from './pages/SectionsPage/SectionsPage';
import KinderPage from './pages/KinderPage/KinderPage';

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
            <Route path='/*' element={<Homepage />} />
          </Routes>
        </main>
        <Footer footerConfig={footerConfig} />
      </ScrollToTop>
    </Router>
  );
}

const footerConfig = {
  logo: {
    src: logo,
    title: '',
    titleHTML: (
      <>
        <span className='special-text'>oyama-</span>karate
        <span className='special-text'>.</span>eu
      </>
    )
  }
};

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
      title: 'Przedszkolaki',
      to: '/kinder'
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

export default App;
