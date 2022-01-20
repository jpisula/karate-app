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
      <div className='google-maps-localisation'>
        {/* <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82049.00784139201!2d21.915878193645028!3d50.010764891975676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb0487a9e705%3A0x45889be6cac7200a!2sRevolutionary%20Act%20Monument!5e0!3m2!1sen!2spl!4v1642455110754!5m2!1sen!2spl'
          width='300'
          height='100'
          style='border:0;'
          allowfullscreen
          loading='lazy'
        ></iframe> */}
      </div>
      <h2 className='enrolments'>zapisy</h2>
      <p className='phone-nr'>nr tel.: 000 000 000</p>
      <ContactForm></ContactForm>
    </article>
  );
}

export default SectionInfo;
