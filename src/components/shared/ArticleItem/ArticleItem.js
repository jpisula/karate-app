import articleItemImg from '../../../pages/ArticlePage/assets/images.jpeg';
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
      <h2 className='article-item-title'>
        Harmonogram rozpoczęcia Treningów Karate w Sezonie 2020-2021
      </h2>
      <p className='article-item-desc'>
        Harmonogram dotyczy sekcji Karate Katowice Podlesie, Katowice Ligota ,
        Katowice Panewniki oraz Gliwice Centrum zarówno dla dzieci młodzieży
        oraz dorosłych.
      </p>
      <div className='article-item-button-container'>
        <button type='button' className='article-item-button'>
          Czytaj więcej
        </button>
      </div>
    </article>
  );
}

export default ArticleItem;
