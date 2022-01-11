import articleItemImg from '../../../pages/Article/assets/images.jpeg';
import './ArticleItem.scss';

function ArticleItem() {
  return (
    <section className='article-item-container'>
      <img
        src={articleItemImg}
        alt='article-item-photo'
        className='article-item-image'
      />
      <div className='article-item-and-date'>
        <h2 className='article-item-title'>Lorem ipsum</h2>
        <p className='article-item-date'>07.01.2022</p>
      </div>
      <div className='strzala'></div>
    </section>
  );
}

export default ArticleItem;
