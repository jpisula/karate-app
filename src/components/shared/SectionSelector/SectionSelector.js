import { useContext } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import './SectionSelector.scss';

function SectionSelector() {
  const { dispatch } = useContext(SectionsContext);
  return (
    <div className='section-selector-button-container'>
      <div
        className='section-selector-button'
        onClick={() =>
          dispatch({ type: 'SET_SECTION_TO_DISPLAY', payload: 'LIGOTA' })
        }
      >
        Katowice Ligota
      </div>
      <div
        className='section-selector-button'
        onClick={() =>
          dispatch({ type: 'SET_SECTION_TO_DISPLAY', payload: 'PIOTROWICE' })
        }
      >
        Katowice Piotrowice
      </div>
      <div
        className='section-selector-button'
        onClick={() =>
          dispatch({ type: 'SET_SECTION_TO_DISPLAY', payload: 'GLIWICE' })
        }
      >
        Gliwice
      </div>
    </div>
  );
}

export default SectionSelector;
