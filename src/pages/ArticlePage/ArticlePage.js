import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import 'react-quill/dist/quill.core.css';
import { useParams } from 'react-router-dom';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import Loader from '../../components/shared/Loader/Loader';
import { API_UPLOADS_URL, API_URL } from '../../configs/api';
import './ArticlePage.scss';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArtcile] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(true);
    const data = await axios.get(`${API_URL}/articles/${id}`);
    setArtcile(data.data.data);
    setLoader(false);
  }, []);

  useEffect(async () => {
    setLoader(true);
    const data = await axios.get(`${API_URL}/articles/${id}`);
    setArtcile(data.data.data);
    setLoader(false);
  }, [id]);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <section className='article-page'>
          <div className='article-page-grid-container'>
            <div className='container'>
              <article className='article-container'>
                <header>
                  <h1>{article.title}</h1>
                  <section className='date-and-share-container'>
                    <p className='article-date'>
                      <span className='padding-right'>
                        Kategoria: {article.categoryName}
                      </span>
                      |
                      <span className='padding-left'>
                        Dodano:{' '}
                        {new Date(
                          article.createdAt.slice(0, 10)
                        ).toLocaleDateString('pl')}
                      </span>
                    </p>
                    <div className='share-container'>
                      <BsFacebook className='media-icon' />
                      <FaFacebookMessenger className='media-icon' />
                      <BsWhatsapp className='media-icon' />
                    </div>
                  </section>
                  <img
                    src={`${API_UPLOADS_URL}/articles/${article.bigImgUrl}`}
                    alt={article.bigImgAlt}
                    className='article-image'
                  />
                </header>
                <main>
                  <div className='article-tags-list-container'>
                    <ul className='article-tags-list'>
                      {article.tags.map((el) => (
                        <li className='article-tag' key={el}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='article-category'></div>
                  <div className='article-text'>
                    <div
                      className='ql-editor'
                      dangerouslySetInnerHTML={{ __html: article.text }}
                    />
                  </div>
                </main>
              </article>
            </div>

            <ArticleListContainer currentArticleId={id} />
          </div>
        </section>
      )}
    </>
  );
};

export default ArticlePage;
