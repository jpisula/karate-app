import ArticlePage from '../../../pages/ArticlePage/ArticlePage';
import ArticleItem from '../ArticleItem/ArticleItem';
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

function ArticlesList() {
  return (
    <div className='article-list-container'>
      <p className='news-title'>Aktualności</p>
      <div className='articles-container'>
        <Link to={'/article/'}>
          <ArticleItem></ArticleItem>
        </Link>
        <Link to={'/article/'}>
          <ArticleItem></ArticleItem>
        </Link>
        <Link to={'/article/'}>
          <ArticleItem></ArticleItem>
        </Link>
      </div>
      <div className='more-news-button-container'>
        <button className='more-news-button'>Więcej aktualności</button>
      </div>
    </div>
  );
}

export default ArticlesList;
