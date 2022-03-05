import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../Sections/icons/PlusIcon';
import SectionTile from '../Sections/SectionTile/SectionTile';
import './InstructorsAndHelpers.scss';
import InstructorsAndHelpersTile from './InstructorsAndHelpersTile';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const InstructorsAndHelpers = () => {
  const [loader, setLoader] = useState(true);
  const [InstructorsAndHelpersData, setInstructorsAndHelpersData] = useState(
    []
  );

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/instructors`);
    setInstructorsAndHelpersData(data.data.data);
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='container'>
            <h1>Instruktorzy i pomocnicy</h1>
            <div className='section-tiles'>
              {InstructorsAndHelpersData.map((el) => (
                <InstructorsAndHelpersTile name={el.name} id={el.id} />
              ))}

              <Link to='/admin/instruktorzy-i-pomocnicy/dodaj'>
                <div className='add-section-tile'>
                  <h2>DODAJ NOWEGO INSTRUKTORA LUB POMOCNIKA</h2>
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

export default InstructorsAndHelpers;
