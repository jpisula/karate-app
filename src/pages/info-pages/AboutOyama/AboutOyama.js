import { aboutOyama } from '../../../configs/aboutOyama';
import './AboutOyama.scss';

const AboutOyama = () => {
  return (
    <div className='about-oyama'>
      <div className='container'>
        <h1>O Oyama Karate</h1>
        <div className='text'>{aboutOyama}</div>
      </div>
    </div>
  );
};

export default AboutOyama;
