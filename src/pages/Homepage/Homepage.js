import './Homepage.scss';
import landingPhoto from './assets/landing.jpeg';
import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

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
          <ParallaxProvider>
            <ParallaxBanner
              className='contact-parallax'
              layers={[
                {
                  image: karateImg,
                  amount: 0.5
                }
              ]}
              style={{
                height: '100%',
                padding: ''
              }}
            >
              <div className='contact-container'>
                <h1>Skontaktuj się z nami!</h1>
                <ContactForm />
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
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
            <Button text='Więcej aktualności' onClick={() => {}} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
