import { useContext, useEffect, useState } from 'react';
import { sectionPlaces } from '../../../configs/sections-places';
import SectionsContext from '../../../context/sections/SectionsContext';
import './SectionSelector.scss';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://localhost:49153/api/v1';

const SectionSelector = () => {
  const { sectionToDisplay, dispatch } = useContext(SectionsContext);
  const [places, setPlaces] = useState([]);
  const [louder, setlouder] = useState(true);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/sections/labels`);
    setPlaces(data.data.data);
    dispatch({ type: 'SET_SECTION_TO_DISPLAY', payload: data.data.data[0] });
    setlouder(false);
  }, []);

  const generateSelectorItems = (sectionToDisplay, dispatch) => {
    let selectorItems = [];

    for (let i = 0; i < places.length; i++) {
      selectorItems.push(
        <div
          key={places[i].id}
          className={`section-selector-button ${
            sectionToDisplay.id === places[i].id && 'active'
          }`}
          onClick={() =>
            dispatch({ type: 'SET_SECTION_TO_DISPLAY', payload: places[i] })
          }
        >
          {places[i].label}
        </div>
      );
    }

    return selectorItems;
  };

  return (
    <>
      {louder && <Loader />}
      {!louder && (
        <div className='section-selector-button-container'>
          {
            <div className='container'>
              {generateSelectorItems(sectionToDisplay, dispatch)}
            </div>
          }
        </div>
      )}
    </>
  );
};

export default SectionSelector;
