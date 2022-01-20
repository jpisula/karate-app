import './Homepage.scss';
import landingPhoto from './assets/landing.jpeg';
import instructorPhoto from './assets/instruktor.jpeg';
import ArticlesList from '../../components/shared/ArticlesList/ArticlesList';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';

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

        <section className='news-list'>
          <div className='container'>
            <h2>Aktualności</h2>
            <ArticlesList />
          </div>
        </section>

        <section className='instructor'>
          <div className='container'>
            <h2>Instruktor</h2>
            <div className='instructor-card'>
              <div className='image-wrapper'>
                <img
                  src={instructorPhoto}
                  alt='Instructor image'
                  className='instructor-image'
                />
              </div>
              <h3>Michał Bodziony</h3>
              <p>
                Jako instruktor wychowałem wielu utytułowanych zawodników, w tym
                Wicemistrza Europy, wielokrotnych Wicemistrzów i Mistrzów
                Polski...
              </p>
              <Link className='instructor-link' to='/'>
                Czytaj dalej
              </Link>
            </div>
          </div>
        </section>

        <section className='annoucements'>
          <h1>ZAPISY</h1>
          <h2 className='phone'>
            <BsFillTelephoneFill />
            <div>000 - 000 - 000</div>
          </h2>
        </section>

        <div className='container'>Hello World</div>
        <div className='random' style={{ minHeight: 1000 }}>
          a
        </div>
      </div>
    </>
  );
}

export default Homepage;
