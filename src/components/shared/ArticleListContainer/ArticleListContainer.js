import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticlesList from '../ArticlesList/ArticlesList';
import Button from '../Button/Button';
import './ArticleListContainer.scss';
import axios from 'axios';

const API_URL = 'http://localhost:49153/api/v1';

function ArticleListContainer({ currentArticleId }) {
  const navigate = useNavigate();
  const [numOfItems, setNumOfItems] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1440 ? 4 : 3
  );
  //resize handling useEffect
  useEffect(() => {
    const handleResize = () => {
      setNumOfItems(
        window.innerWidth >= 768 && window.innerWidth < 1440 ? 4 : 3
      );
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='article-list-container'>
      <header className='news-title-container'>
        <h2 className='news-h2'>Aktualności</h2>
      </header>
      <main>
        <ArticlesList
          className='article-list'
          numberOfItems={numOfItems}
          currentArticleId={currentArticleId}
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
