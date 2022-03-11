import { AiFillCaretDown } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';
import logo from '../assets/logo.png';
import axios from 'axios';

const API_URL = 'http://localhost:49153/api/v1';

export const getNavConfig = async () => {
  const data = await axios.get(`${API_URL}/infopages`);
  const infoPages = data.data.data;

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
        to: '/nasze-sekcje'
      },
      {
        title: 'Przedszkolaki',
        to: '/zajecia-karate-dla-przedszkolakow-katowice'
      },
      {
        title: 'Informacje',
        to: '/',
        icon: <AiFillCaretDown />,
        subItems: [
          {
            title: 'Aktualności',
            to: '/wszystkie-aktualnosci'
          },
          {
            title: 'Harmonogram zajęć',
            to: '/harmonogram-zajec'
          },
          {
            title: 'Nasi instruktorzy',
            to: '/instruktorzy'
          },
          {
            title: 'Galerie',
            to: '/galerie'
          }
        ]
      },
      {
        title: 'Kalendarz',
        to: '/kalendarz'
      }
    ]
  };

  infoPages.map((element) =>
    navConfig.items
      .find((el) => el.title === 'Informacje')
      .subItems.push({ title: element.title, to: `/info/${element.id}` })
  );

  return navConfig;
};
