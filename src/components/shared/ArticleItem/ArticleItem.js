import articleItemImg from '../../../pages/ArticlePage/assets/images.jpeg';
import { BsArrowRight } from 'react-icons/bs';
import './ArticleItem.scss';
import { Link } from 'react-router-dom';

function ArticleItem({ article, id }) {
  return (
    <article className='article-item-container'>
      <img
        src={article.imageUrl}
        alt='article-item-photo'
        className='article-item-image'
      />
      <h2 className='article-item-title'>
        <Link to={`/article/${id}`}>{article.title}</Link>
      </h2>
      <p className='article-item-desc'>{article.desc}</p>
      <Link to={`/article/${id}`}>
        <button type='button' className='article-item-button'>
          Czytaj dalej
        </button>
      </Link>
    </article>
  );
}

export default ArticleItem;
