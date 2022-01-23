import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import './ArticlePage.scss';
import examImg from './assets/exam.jpeg';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';

function ArticlePage() {
  return (
    <>
      <div className='container'>
        <div className='article-page-grid-container'>
          <article className='article-container'>
            <h2 className='article-title'>Letnie sesje egzaminacyjne</h2>
            <div className='date-and-share-container'>
              <p className='article-date'>dodano: 07.01.2022</p>
              <div className='share-container'>
                <BsFacebook className='media-icon' />
                <FaFacebookMessenger className='media-icon' />
                <BsWhatsapp className='media-icon' />
                {/* <img src={fbImg} alt='facebook-icon-link' className='media-icon' />
            <img
              src={msgImg}
              alt='messenger-icon-link'
              className='media-icon'
            />
            <img
              src={whatsappImg}
              alt='whatsapp-icon-link'
              className='media-icon'
            /> */}
              </div>
            </div>
            <img src={examImg} alt='article-photo' className='article-image' />
            <p className='article-text'>
              AKTUALIZACJA <br />
              WSZYSTKIE EGZAMINY SEKCJI: LIGOTA, PODLESIE, PANEWNIKI I GLIWICE
              ZOSTAJĄ PRZENIESIONE NA STYCZEŃ 2022. ZA UTRUDNIENIA PRZEPRASZAMY.
              <br />
              <br />
              Egzaminy sesji odbędą się w następujących terminach:
              <br />
              18.01.2022 r. (wtorek) odbędzie się sesja egzaminacyjna na kolejne
              stopnie kyu.
              <br />
              Miejsce egzaminu-> Katowice , SP.35 , ul.Zielonogórska 23
              <br />
              godz. 17:45 - wszystkie stopnie do 5kyu Do tego egzaminu
              przystępują następujące sekcje z Katowic (MDK Podlesie, SP 35, SP
              67) Należy być min 10 min wcześniej.
              <br />
              14.01.2022 (piątek) odbędzie się sesja egzaminacyjna na kolejne
              stopnie kyu.
              <br />
              Miejsce egzaminu-> Gliwice , sala gimn. SP nr.28 Ul M.Srzody 4
              <br />
              godz. 18.00 do 5 kyu włącznie (maksymalnie na pomarańczowy pas)
              <br />
              (Ćwiczący w Gliwicach)
              <br />
              <br />
              (NALEŻY BYĆ 15 MIN WCZEŚNIEJ)
              <br />
              <br />
              <br />
              Do egzaminu mogą przystąpić tylko osoby posiadające opłaconą
              bieżącą składkę klubową za ostatnie 2 miesiące, co potwierdza
              wymaganą przepisami obecność zdającego na zajęciach.
              <br />
              Wszystkich formalności należy dokonać najpóźniej do 13 grudnia.
              <br />
              W przypadku pytań prosimy pytać instruktorów sekcji.
              <br />
            </p>
          </article>

          <div className='article-list-container'>
            <div className='news-title-container'>
              <p className='news-title'>Aktualności</p>
            </div>

            <ArticlesList
              className='article-list-container'
              numberOfItems={4}
            />

            <div className='more-news-button-container'>
              <button className='more-news-button'>Więcej aktualności</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
