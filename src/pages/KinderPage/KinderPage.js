import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArticleListContainer from '../../components/shared/ArticleListContainer/ArticleListContainer';
import { kinderConfig } from '../../configs/kinder';
import { SectionsProvider } from '../../context/sections/SectionsContext';
import './KinderPage.scss';

const KinderPage = () => {
  const { images, text } = kinderConfig;
  const imagesRef = useRef();

  useEffect(() => {
    let imgIndex = 0;
    const intervalId = setInterval(() => {
      imgIndex = imgIndex + 1 === images.length ? 0 : imgIndex + 1;
      const prevImgIndex = imgIndex === 0 ? images.length - 1 : imgIndex - 1;
      imagesRef.current.children[prevImgIndex].classList.add('hidden');
      imagesRef.current.children[imgIndex].classList.remove('hidden');
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SectionsProvider>
      <article className='kinder-page-content'>
        <div className='kinder-page-grid-container'>
          <div className='kinder-content'>
            <div className='container'>
              <header>
                <h1 className='title'>
                  Zapraszamy na treningi naszych grup przedszkolnych
                </h1>
              </header>
              <main>
                <section ref={imagesRef} className='images-wrapper'>
                  {images.map((imgSrc, index) => (
                    <img
                      key={index}
                      className={index !== 0 ? 'hidden' : ''}
                      src={imgSrc}
                      alt='kids karate photo'
                    />
                  ))}
                </section>
                <section className='text'>{text}</section>
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
  );
};

export default KinderPage;
