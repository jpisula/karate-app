import { useContext } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import SectionInfo from '../SectionInfo/SectionInfo';
import GroupPhoto from '../../../assets/landing.jpeg';
import './Sections.scss';

function Sections() {
  const { sectionToDisplay } = useContext(SectionsContext);

  return (
    <section className='container sections-container'>
      <div className='container'>
        <h1 className='place'>{sectionToDisplay.title}</h1>
        <img src={GroupPhoto} alt='gropu-photo' className='group-photo' />
      </div>

      <article className='sections-info-container'>
        <SectionInfo></SectionInfo>
      </article>
    </section>
  );
}

export default Sections;
