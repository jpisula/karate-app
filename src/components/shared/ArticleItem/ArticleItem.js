import { Link } from 'react-router-dom';
import { API_UPLOADS_URL } from '../../../configs/api';
import './ArticleItem.scss';

function ArticleItem({ article }) {
  if (!article) {
    return null;
  }
  return (
    <article className='article-item-container'>
      <Link
        to={`/aktualnosci/${article.categoryName}/${article.slug}/${article.id}`}
      >
        <img
          src={`${API_UPLOADS_URL}/articles/${article.smallImgUrl}`}
          alt={article.smallImgAlt}
          className='article-item-image'
        />
      </Link>
      <h2 className='article-item-title'>
        <Link
          to={`/aktualnosci/${article.categoryName}/${article.slug}/${article.id}`}
        >
          {article.title}
        </Link>
      </h2>
      <p className='article-item-desc'>{article.shortenDesc}</p>
      <Link
        to={`/aktualnosci/${article.categoryName}/${article.slug}/${article.id}`}
      >
        <button type='button' className='article-item-button'>
          Czytaj dalej
        </button>
      </Link>
    </article>
  );
}

export default ArticleItem;
