import { useNavigate } from 'react-router-dom';
import ArticlesList from '../ArticlesList/ArticlesList';
import Button from '../Button/Button';
import './ArticleListContainer.scss';

function ArticleListContainer() {
  const navigate = useNavigate();
  return (
    <section className='article-list-container'>
      <header className='news-title-container'>
        <h2 className='news-h2'>Aktualności</h2>
      </header>
      <main>
        <ArticlesList
          className='article-list'
          numberOfItems={
            window.innerWidth >= 768 && window.innerWidth < 1440 ? 4 : 3
          }
        />
        <Button
          text='Więcej aktualności'
          onClick={() => navigate('/newslist', { replace: true })}
        />
      </main>
    </section>
  );
}

export default ArticleListContainer;
