import './Homepage.scss';
import landingPhoto from './assets/landing.jpeg';
import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import { BsFillTelephoneFill } from 'react-icons/bs';
import ContactForm from '../../components/shared/ContactForm/ContactForm';
import GroupsAd from '../../components/shared/GroupsAd/GroupsAd';
import Button from '../../components/shared/Button/Button';
import karateImg from './assets/karate.jpeg';
import InstructorCard from '../../components/shared/InstructorCard/InstructorCard';

function Homepage() {
  return (
    <>
      <div className='homepage-content'>
        <section className='landing'>
          <img
            className='landing-image'
            src={landingPhoto}
            alt='landing-photo'
          />
          <div className='welcome-card-wrapper'>
            <div className='welcome-card'>
              <h1>
                Strona sekcji Katowice Ligota, Panewniki, Podlesie i Gliwice
              </h1>
            </div>
          </div>
        </section>

        <section className='groups'>
          <div className='container'>
            <h2>U nas znajdziesz treningi dla...</h2>
            <GroupsAd />
          </div>
        </section>

        <section className='annoucements'>
          <h1>ZAPISY</h1>
          <h2 className='phone'>
            <BsFillTelephoneFill />
            <div>000 - 000 - 000</div>
          </h2>
        </section>

        <section className='contact'>
          <div
            className='parallax'
            style={{ backgroundImage: `url(${karateImg})` }}
          >
            <div className='vignette'>
              <h1>Skontaktuj się z nami!</h1>
            </div>
          </div>
          <ContactForm />
        </section>

        <section className='instructor'>
          <div className='container'>
            <h2>Instruktor</h2>
            <InstructorCard />
          </div>
        </section>

        <section className='news-list'>
          <div className='container'>
            <h2 className='news-h2'>Aktualności</h2>
            <ArticlesList className='articles-list' numberOfItems={4} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
