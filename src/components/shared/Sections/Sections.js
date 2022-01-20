import { useContext } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import SectionInfo from '../SectionInfo/SectionInfo';
import GroupPhoto from './assets/landing.jpeg';
import './Sections.scss';

function Sections() {
  const { sectionToDisplay } = useContext(SectionsContext);
  console.log(sectionToDisplay);

  return (
    <section className='container sections-container'>
      <h1 className='place'>Katowice Ligota</h1>
      <img src={GroupPhoto} alt='gropu-photo' className='group-photo' />
      <div className='sections-info-container'>
        <SectionInfo></SectionInfo>
      </div>
    </section>
  );
}

export default Sections;
