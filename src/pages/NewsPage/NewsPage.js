import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './NewsPage.scss';

function NewsPage() {
  return (
    <div className='news-page-content'>
      <section className='news-list'>
        <div className='container'>
          <h2 className='news-h2'>Aktualności</h2>
          <ArticlesList
            className='articles-list'
            numberOfItems={window.innerWidth > 1440 ? 12 : 10}
          />
        </div>
      </section>
    </div>
  );
}

export default NewsPage;
