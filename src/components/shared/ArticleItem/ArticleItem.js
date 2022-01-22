import articleItemImg from '../../../pages/ArticlePage/assets/images.jpeg';
import { BsArrowRight } from 'react-icons/bs';
import './ArticleItem.scss';

function ArticleItem({ article }) {
  return (
    <article className='article-item-container'>
      <img
        src={article.imageUrl}
        alt='article-item-photo'
        className='article-item-image'
      />
      <h2 className='article-item-title'>{article.title}</h2>
      <p
        className='article-item-desc'
        dangerouslySetInnerHTML={{ __html: article.text }}
      />
      <button type='button' className='article-item-button'>
        Czytaj dalej
      </button>
    </article>
  );
}

export default ArticleItem;
