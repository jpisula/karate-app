import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from './icons/PlusIcon';
import './Sections.scss';
import SectionTile from './SectionTile/SectionTile';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const Sections = () => {
  const [loader, setLoader] = useState(true);
  const [labelsData, setLabelsData] = useState({});

  useEffect(async () => {
    const labelsContent = await axios.get(`${API_URL}/sections/labels`);
    setLabelsData(labelsContent.data.data);
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='container'>
            <h1>Nasze Sekcje</h1>
            <div className='section-tiles'>
              {labelsData.map((el) => (
                <SectionTile place={el.label} id={el.id} key={el.id} />
              ))}

              <Link to='/admin/sekcje/dodaj'>
                <div className='add-section-tile'>
                  <h2>DODAJ NOWĄ SEKCJĘ</h2>
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

export default Sections;
