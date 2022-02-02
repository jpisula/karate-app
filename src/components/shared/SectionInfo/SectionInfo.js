import ContactForm from '../ContactForm/ContactForm';
import './SectionInfo.scss';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import karateImg from '../../../assets/karate.jpeg';
import dojo from '../../../assets/treningi-sala.webp';
import { BsFillTelephoneFill } from 'react-icons/bs';

function SectionInfo({ section }) {
  return (
    <>
      <div className='container'>
        <div className='group-description'>{section.description}</div>
      </div>

      <section className='schedule-wrapper'>
        <ParallaxProvider>
          <ParallaxBanner
            className='schedule-parallax'
            layers={[
              {
                image: dojo,
                amount: 0.5
              }
            ]}
            style={{
              height: '100%',
              padding: ''
            }}
          >
            <div className='container'>
              <div className='schedule-info-wrapper'>
                <h2 className='schedule-title'>ZAJĘCIA</h2>
                <p className='location'>{section.address}</p>
                <table className='schedule'>
                  <thead>
                    <tr className='days-row'>
                      <th></th>
                      {section.days.map((day) => (
                        <th key={day}>{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.groups.map((group) => (
                      <tr key={group.name} className='group-row'>
                        <td className='group'>{group.name}</td>
                        {group.schedule.map((sched) => (
                          <td
                            key={`${sched.hours}-${sched.day}`}
                            className='hours'
                          >
                            {sched.hours}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* <tr className='group-row'>
                      <td className='group'>Dzieci</td>
                      <td className='hours'>17:30 - 18:30</td>
                      <td className='hours'>17:30 - 18:30</td>
                    </tr>
                    <tr className='group-row'>
                      <td className='group'>Młodzież i starsi</td>
                      <td className='hours'>18:30 - 20:30</td>
                      <td className='hours'>18:30 - 20:30</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </section>

      <div className='google-maps-localisation'>
        <div className='container'>{section.googleMaps}</div>
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
