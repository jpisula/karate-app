import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './ArticlePage.scss';
import examImg from './assets/exam.jpeg';
import { articles } from '../../database/articles/articles';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = id ? articles[id] : articles[0];
  return (
    <section className='article-page'>
      <div className='article-page-grid-container'>
        <div className='container'>
          <article className='article-container'>
            <header>
              <h1>{article.title}</h1>
              <section className='date-and-share-container'>
                <p className='article-date'>
                  dodano: {new Date(article.date).toDateString()}
                </p>
                <div className='share-container'>
                  <BsFacebook className='media-icon' />
                  <FaFacebookMessenger className='media-icon' />
                  <BsWhatsapp className='media-icon' />
                </div>
              </section>
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
        </div>

        <section className='article-list-container'>
          <header className='news-title-container'>
            <h2 className='news-h2'>Aktualności</h2>
          </header>
          <main>
            <ArticlesList className='article-list' numberOfItems={3} />
            <Button
              text='Więcej aktualności'
              onClick={() => navigate('/newslist', { replace: true })}
            />
          </main>
        </section>
      </div>
    </section>
  );
}

export default ArticlePage;
