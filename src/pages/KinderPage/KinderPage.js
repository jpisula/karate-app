import Sections from '../../components/shared/Sections/Sections';
import SectionSelector from '../../components/shared/SectionSelector/SectionSelector';
import { SectionsProvider } from '../../context/sections/SectionsContext';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import './KinderPage.scss';

function KinderPage() {
  return (
    <SectionsProvider>
      <article className='sections-page-content'>
        <div className='sections-page-grid-container'>
          <div className='sections-content'>
            <div className='container'>
              <header>
                <h1 className='title'>Nasze sekcje</h1>
              </header>
            </div>

            <SectionSelector />

            <section>
              <Sections />
            </section>
          </div>
          <ArticleListContainer />
        </div>
      </article>
    </SectionsProvider>
  );
}

export default KinderPage;
