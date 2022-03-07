import { Link } from 'react-router-dom';
import './ArticleItem.scss';

function ArticleItem({ article, id }) {
  if (!article) {
    return null;
  }
  return (
    <article className='article-item-container'>
      <Link to={`/article/${id}`}>
        <img
          src={article.bigImgUrl}
          alt='Article image'
          className='article-item-image'
        />
      </Link>
      <h2 className='article-item-title'>
        <Link to={`/article/${id}`}>{article.title}</Link>
      </h2>
      <p className='article-item-desc'>{article.shortenDesc}</p>
      <Link to={`/article/${id}`}>
        <button type='button' className='article-item-button'>
          Czytaj dalej
        </button>
      </Link>
    </article>
  );
}

export default ArticleItem;
