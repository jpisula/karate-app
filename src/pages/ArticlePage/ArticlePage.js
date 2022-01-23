import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './ArticlePage.scss';
import examImg from './assets/exam.jpeg';
import { articles } from '../../database/articles/articles';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { id } = useParams();
  const article = id ? articles[id] : articles[0];
  return (
    <section className='article-page'>
      <div className='container'>
        <div className='article-page-grid-container'>
          <article className='article-container'>
            <header>
              <h2 className='article-title'>{article.title}</h2>
              <div className='date-and-share-container'>
                <p className='article-date'>
                  dodano: {new Date(article.date).toDateString()}
                </p>
                <div className='share-container'>
                  <BsFacebook className='media-icon' />
                  <FaFacebookMessenger className='media-icon' />
                  <BsWhatsapp className='media-icon' />
                </div>
              </div>
              <img
                src={article.imageUrl}
                alt='article-photo'
                className='article-image'
              />
            </header>
            <main>
              <p
                className='article-text'
                dangerouslySetInnerHTML={{ __html: article.text }}
              />
            </main>
          </article>

          <section className='article-list-container'>
            <header className='news-title-container'>
              <p className='news-title'>Aktualności</p>
            </header>
            <main>
              <ArticlesList
                className='article-list-container'
                numberOfItems={4}
              />
              <div className='more-news-button-container'>
                <button className='more-news-button'>Więcej aktualności</button>
              </div>
            </main>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
