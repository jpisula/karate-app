import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import Sections from '../../components/shared/Sections/Sections';
import SectionSelector from '../../components/shared/SectionSelector/SectionSelector';
import { SectionsProvider } from '../../context/sections/SectionsContext';
import './SectionsPage.scss';

function SectionsPage() {
  return (
    <SectionsProvider>
      <article className='container'>
        <div className='sections-page-grid-container'>
          <div className='article-content'>
            <SectionSelector></SectionSelector>
            <Sections></Sections>
          </div>
          <ArticlesList className='article-list-container' />
        </div>
      </article>
    </SectionsProvider>
  );
}

export default SectionsPage;
