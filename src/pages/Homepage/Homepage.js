import { BsFillTelephoneFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import Button from '../../components/shared/Button/Button';
import ContactForm from '../../components/shared/ContactForm/ContactForm';
import GroupsAd from '../../components/shared/GroupsAd/GroupsAd';
import InstructorCard from '../../components/shared/InstructorCard/InstructorCard';
import karateImg from './assets/karate.jpeg';
import landingPhoto from './assets/landing.jpeg';
import './Homepage.scss';

function Homepage() {
  const navigate = useNavigate();

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
              <div className='container'>
                <h1>
                  Strona sekcji Katowice Ligota, Panewniki, Podlesie i Gliwice
                </h1>
              </div>
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
            <ArticlesList
              className='articles-list'
              numberOfItems={window.innerWidth > 1440 ? 6 : 4}
            />
            <Button
              text='Więcej aktualności'
              onClick={() => navigate('/newslist', { replace: true })}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
