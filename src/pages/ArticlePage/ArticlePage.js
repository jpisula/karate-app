import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
// import { FaFacebookMessenger } from 'react-icons/fa';
import 'react-quill/dist/quill.core.css';
import { useParams } from 'react-router-dom';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import Loader from '../../components/shared/Loader/Loader';
import { API_UPLOADS_URL, API_URL } from '../../configs/api';
import './ArticlePage.scss';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArtcile] = useState([]);
  const [loader, setLoader] = useState(true);

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }

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

  const generateTags = (tags) => {
    let result = '';
    tags.map((el) => `#${el} `);
    return result;
  };

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
                      <FacebookShareButton
                        url={window.location.href}
                        hashtag={generateTags(article.tags)}
                        quote='Udostępnij artykuł przez facebooka!'
                      >
                        <BsFacebook className='media-icon' />
                      </FacebookShareButton>
                      <div onClick={copyTextToClipboard(window.location.href)}>
                        <FiLink className='media-icon' />
                      </div>

                      <WhatsappShareButton
                        url={window.location.href}
                        hashtag={generateTags(article.tags)}
                        quote='Udostępnij artykuł przez facebooka!'
                      >
                        <BsWhatsapp className='media-icon' />
                      </WhatsappShareButton>
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
