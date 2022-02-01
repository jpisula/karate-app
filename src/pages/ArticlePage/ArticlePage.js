import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import { articles } from '../../configs/articles';
import './ArticlePage.scss';

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
                  dodano: {new Date(article.date).toLocaleDateString('pl')}
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
              <div className='article-text'>{article.text}</div>
            </main>
          </article>
        </div>

        <ArticleListContainer currentArticleId={id} />
      </div>
    </section>
  );
}

export default ArticlePage;
