import ContactForm from '../ContactForm/ContactForm';
import './SectionInfo.scss';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import karateImg from '../../../pages/Homepage/assets/karate.jpeg';
// import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { BsFillTelephoneFill } from 'react-icons/bs';

function SectionInfo() {
  return (
    <>
      <div className='container'>
        <p className='group-description'>
          Sekcja Katowice Ligota skierowana jest głównie dla dzieci oraz
          dorosłych. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque posuere, ante quis finibus efficitur, purus est porttitor
          justo, ut consequat erat eros ac velit. Fusce elementum pretium
          fringilla. Etiam accumsan accumsan condimentum. Cras tincidunt augue
          purus, sit amet facilisis leo placerat ac. Nam eleifend, est et
          lobortis elementum, nunc nisl.
        </p>
      </div>

      <div className='schedule-wrapper'>
        <div className='container'>
          <h2 className='schedule-title'>ZAJĘCIA</h2>
          <p className='location'>
            Gimnazjum nr 23 - ul. Zielonogórska 23, Katowice
          </p>
          <table className='schedule'>
            <thead>
              <tr className='days-row'>
                <th></th>
                <th>Wtorki</th>
                <th>Czwartki</th>
              </tr>
            </thead>
            <tbody>
              <tr className='group-row'>
                <td className='group'>Dzieci</td>
                <td className='hours'>17:30 - 18:30</td>
                <td className='hours'>17:30 - 18:30</td>
              </tr>
              <tr className='group-row'>
                <td className='group'>Młodzież i starsi</td>
                <td className='hours'>18:30 - 20:30</td>
                <td className='hours'>18:30 - 20:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='google-maps-localisation'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.2524319392696!2d18.67112752933099!3d50.29303558961911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471130ff1be1498f%3A0x34685a67d45e900c!2sSzko%C5%82a%20Podstawowa%20nr%2028!5e0!3m2!1spl!2spl!4v1642958476522!5m2!1spl!2spl'
          width='100%'
          height='100%'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>

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
              <h1 className='contact-title'>ZAPISY TRWAJĄ</h1>
              <h2 className='phone-nr'>
                <BsFillTelephoneFill />
                <div>000 - 000 - 000</div>
              </h2>
              <ContactForm />
            </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </section>
    </>
  );
}

export default SectionInfo;
