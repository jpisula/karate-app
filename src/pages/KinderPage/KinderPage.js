import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import { SectionsProvider } from '../../context/sections/SectionsContext';
import './KinderPage.scss';
import axios from 'axios';
import { API_UPLOADS_URL, API_URL } from '../../configs/api';
import Loader from '../../components/shared/Loader/Loader';
import 'react-quill/dist/quill.core.css';

const KinderPage = () => {
  const imagesRef = useRef();
  const [kinderData, setKinderData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(true);
    const data = await axios.get(`${API_URL}/preschooler`);
    setKinderData(data.data.data);
    setLoader(false);
  }, []);

  let images = [];

  if (!loader) {
    const {
      firstImgUrl,
      firstImgAlt,
      secondImgUrl,
      secondImgAlt,
      thirdImgUrl,
      thirdImgAlt
    } = kinderData;

    images = [
      {
        url: firstImgUrl,
        alt: firstImgAlt
      },
      {
        url: secondImgUrl,
        alt: secondImgAlt
      },
      {
        url: thirdImgUrl,
        alt: thirdImgAlt
      }
    ];
  }

  useEffect(() => {
    console.log(images);
    if (!loader) {
      let imgIndex = 0;
      const intervalId = setInterval(() => {
        imgIndex = imgIndex + 1 === images.length ? 0 : imgIndex + 1;
        const prevImgIndex = imgIndex === 0 ? images.length - 1 : imgIndex - 1;
        imagesRef.current.children[prevImgIndex].classList.add('hidden');
        imagesRef.current.children[imgIndex].classList.remove('hidden');
      }, 4000);
      return () => clearInterval(intervalId);
    }
  }, [loader]);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <SectionsProvider>
          <article className='kinder-page-content'>
            <div className='kinder-page-grid-container'>
              <div className='kinder-content'>
                <div className='container'>
                  <header>
                    <h1 className='title'>{kinderData.title}</h1>
                  </header>
                  <main>
                    <section ref={imagesRef} className='images-wrapper'>
                      {images.map((img, index) => (
                        <img
                          key={index}
                          className={index !== 0 ? 'hidden' : ''}
                          src={`${API_UPLOADS_URL}/preschooler/${img.url}`}
                          alt={img.alt}
                        />
                      ))}
                    </section>
                    <section
                      className='text ql-editor'
                      dangerouslySetInnerHTML={{ __html: kinderData.content }}
                    ></section>
                    <section className='ad'>
                      <Link to='/schedule/kinder'>
                        Sprawdź nasz harmonogram zajęć dla przedszkolaków
                      </Link>
                    </section>
                  </main>
                </div>
              </div>
              <ArticleListContainer />
            </div>
          </article>
        </SectionsProvider>
      )}
    </>
  );
};

export default KinderPage;
