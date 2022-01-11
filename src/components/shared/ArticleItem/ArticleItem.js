import articleItemImg from '../../../pages/Article/assets/images.jpeg';
import { BsArrowRight } from 'react-icons/bs';
import './ArticleItem.scss';

function ArticleItem() {
  return (
    <article className='article-item-container'>
      <img
        src={articleItemImg}
        alt='article-item-photo'
        className='article-item-image'
      />
      <div className='article-item-and-date'>
        <h2 className='article-item-title'>Lorem ipsum</h2>
        <p className='article-item-date'>07.01.2022</p>
      </div>
      <BsArrowRight className='article-item-arrow' />
    </article>
  );
}

export default ArticleItem;
