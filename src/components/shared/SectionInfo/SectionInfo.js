import ContactForm from '../ContactForm/ContactForm';
import './SectionInfo.scss';

function SectionInfo() {
  return (
    <article className='section-info-container'>
      <h2 className='group-name'>Lorem Ipsum</h2>
      <p className='group-description'>
        Aliquam erat volutpat. Nunc id sem enim. In at lacus et velit sodales
        ullamcorper. Nulla rhoncus ac nisl in vulputate. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Curabitur facilisis odio in justo
        venenatis, vitae pulvinar justo volutpat.
      </p>
      <p className='hours'>
        godziny: <br />
        <br /> wt.: 17.00 - 18.00 <br /> czw.: 18.00 - 19.00
      </p>
      <p className='location'>
        Aliquam erat volutpat. <br /> Nunc id sem enim.
      </p>
      <div className='goglemapa'></div>
      <h2 className='enrolments'>zapisy</h2>
      <p className='phone-nr'>nr tel.: 000 000 000</p>
      <ContactForm></ContactForm>
    </article>
  );
}

export default SectionInfo;
