import { AiFillCaretDown } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import logo from '../assets/logo.png';

export const navConfig = {
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
          to: '/instructors'
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
