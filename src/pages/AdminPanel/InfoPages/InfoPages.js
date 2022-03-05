import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InfoPages.scss';
import InfoPageTile from './InfoPageTile';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const InfoPages = () => {
  const [loader, setLoader] = useState(true);
  const [infoPagesData, setInfoPagesData] = useState([]);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/infopages`);
    setInfoPagesData(data.data.data);
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='container'>
            <h1>Strony informacyjne</h1>
            <div className='section-tiles'>
              {infoPagesData.map((el) => (
                <InfoPageTile title={el.title} id={el.id} key={el.id} />
              ))}

              <Link to='/admin/strony-informacyjne/dodaj'>
                <div className='add-section-tile'>
                  <h2>DODAJ NOWĄ STRONĘ INFORMACYJNĄ</h2>
                  <PlusIcon className='plus' />
                </div>
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default InfoPages;
