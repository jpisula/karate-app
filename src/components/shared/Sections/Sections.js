import { useContext } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import SectionInfo from '../SectionInfo/SectionInfo';
import GroupPhoto from '../../../assets/landing.jpg';
import './Sections.scss';
import { sections } from '../../../configs/sections';

function Sections() {
  const { sectionToDisplay } = useContext(SectionsContext);
  const section = sections.find((el) => el.id === sectionToDisplay.id);

  return (
    <section className='container sections-container'>
      <div className='container'>
        <h1 className='place'>{sectionToDisplay.title}</h1>
        <img src={section.imageUrl} alt='gropu-photo' className='group-photo' />
      </div>

      <article className='sections-info-container'>
        <SectionInfo section={section}></SectionInfo>
      </article>
    </section>
  );
}

export default Sections;
