import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './Article.scss';
import articleImg from './assets/images.jpeg';

function Article() {
  return (
    <>
      <article className='container'>
        <div className='article-container'>
          <h2 className='article-title'>Lorem ipsum</h2>
          <p className='article-date'>07.01.2022</p>
          <img src={articleImg} alt='article-photo' className='article-image' />
          <p className='article-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum viverra leo ut imperdiet. Nullam consequat a velit ac
            lobortis. Fusce sodales lectus dui, scelerisque interdum quam
            euismod ut. Aliquam vel ultrices purus. Nulla nunc ipsum, porttitor
            quis fermentum vel, ornare in erat. Duis dolor justo, laoreet id
            lacinia eu, feugiat ac orci. Nulla aliquam, orci ac mattis dapibus,
            enim sem condimentum ipsum, sit amet tincidunt lorem enim quis diam.
            Donec convallis ut dui ac blandit.
          </p>
        </div>
      </article>
      <article className='container'>
        <ArticlesList className='article-list-container'></ArticlesList>
      </article>
    </>
  );
}

export default Article;
