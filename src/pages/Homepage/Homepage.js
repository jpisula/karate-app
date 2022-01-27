import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
                  <span>Strona</span> <span>Sekcji</span>{' '}
                  <span>Katowice Ligota, </span> <span>Panewniki, </span>{' '}
                  <span>Podlesie </span> <span>i Gliwice</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className='groups'>
          <div className='container'>
            <h2 data-aos='zoom-in'>U nas znajdziesz treningi dla...</h2>
            <GroupsAd animation={'zoom-in'} />
          </div>
        </section>

        <section className='annoucements'>
          <h1 data-aos='flip-up'>ZAPISY</h1>
          <h2 className='phone' data-aos='flip-up'>
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
                <h1 data-aos='flip-up'>Skontaktuj się z nami!</h1>
                <ContactForm animation='fade-right' btnAnimation='zoom-in' />
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
        </section>

        <section className='instructor'>
          <div className='container'>
            <h2 data-aos='flip-up'>Instruktor i pomocnicy</h2>
            <div className='instructors-wrapper'>
              <InstructorCard animation={'zoom-in'} name={'Michał Bodziony'} />
              <InstructorCard animation={'zoom-in'} name={'Dawid Kłyż'} />
              <InstructorCard animation={'zoom-in'} name={'Tomasz Kos'} />
            </div>
          </div>
        </section>

        <section className='news-list'>
          <div className='container'>
            <h2 className='news-h2' data-aos='flip-up'>
              Aktualności
            </h2>
            <ArticlesList
              className='articles-list'
              numberOfItems={window.innerWidth > 1440 ? 6 : 4}
              animation='zoom-in'
            />
            <Button
              text='Więcej aktualności'
              onClick={() => navigate('/newslist', { replace: true })}
              animation={'zoom-in'}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
