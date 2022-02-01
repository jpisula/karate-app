import { useContext } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import './SectionSelector.scss';

const places = [
  {
    id: 'LIGOTA',
    title: 'Katowice Ligota'
  },
  {
    id: 'PIOTROWICE',
    title: 'Katowice Piotrowice'
  },
  {
    id: 'PODLESIE',
    title: 'Katowice Podlesie'
  },
  {
    id: 'GLIWICE',
    title: 'Gliwice'
  }
];

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
        {places[i].id}
      </div>
    );
  }

  return selectorItems;
};

function SectionSelector() {
  const { sectionToDisplay, dispatch } = useContext(SectionsContext);

  return (
    <div className='section-selector-button-container'>
      {
        <div className='container'>
          {generateSelectorItems(sectionToDisplay, dispatch)}
        </div>
      }
    </div>
  );
}

export default SectionSelector;
