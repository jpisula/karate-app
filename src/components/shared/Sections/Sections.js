import SectionInfo from '../SectionInfo/SectionInfo';
import GroupPhoto from './assets/landing.jpeg';
import './Sections.scss';

function Sections() {
  return (
    <section className='container sections-container'>
      <h1 className='place'>Katowice Ligota</h1>
      <img src={GroupPhoto} alt='gropu-photo' className='group-photo' />
      <div className='sections-info-container'>
        <SectionInfo></SectionInfo>
        <SectionInfo></SectionInfo>
        <SectionInfo></SectionInfo>
      </div>
    </section>
  );
}

export default Sections;
