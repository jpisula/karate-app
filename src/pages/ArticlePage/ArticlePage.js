import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './ArticlePage.scss';
import examImg from './assets/exam.jpeg';
import { articles } from '../../database/articles/articles';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';

function ArticlePage() {
  const { id } = useParams();
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

        <ArticleListContainer />
      </div>
    </section>
  );
}

export default ArticlePage;
