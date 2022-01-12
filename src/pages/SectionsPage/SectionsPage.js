import Sections from '../../components/shared/Sections/Sections';
import SectionSelector from '../../components/shared/SectionSelector/SectionSelector';
import './SectionsPage.scss';

function SectionsPage() {
  return (
    <article className='container'>
      <SectionSelector></SectionSelector>
      <Sections></Sections>
    </article>
  );
}

export default SectionsPage;
