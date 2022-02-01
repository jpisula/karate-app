import './GroupsAd.scss';
import kidsKarateImg from './assets/kids-karate.jpeg';
import teenagersKarateImg from './assets/karate-teenagers.jpeg';
import adultsKarateImg from './assets/adults-karate.jpeg';
import familyKarateImg from './assets/family-karate.jpeg';
import { Link } from 'react-router-dom';

const GroupsAd = ({ animation }) => {
  return (
    <div className='groups-ad-list'>
      <GroupAdItem
        title='DZIECI'
        imgSrc={kidsKarateImg}
        XImgPosition={-26}
        animation={animation}
        to='/schedule/kinder'
      />
      <GroupAdItem
        title='MŁODZIEŻY'
        imgSrc={teenagersKarateImg}
        XImgPosition={-3}
        animation={animation}
        to='/schedule/children'
      />
      <GroupAdItem
        title='DOROSŁYCH'
        imgSrc={adultsKarateImg}
        XImgPosition={0}
        animation={animation}
        to='/schedule/adults'
      />
      <GroupAdItem
        title='RODZIN'
        imgSrc={familyKarateImg}
        XImgPosition={-50}
        animation={animation}
        to='/schedule/adults'
      />
    </div>
  );
};

const GroupAdItem = ({ title, imgSrc, XImgPosition, animation, to }) => {
  return (
    <div className='group-ad' data-aos={animation}>
      <Link to={to}>
        <img
          src={imgSrc}
          alt='karate kids photo'
          style={{ objectPosition: `0px ${XImgPosition}px` }}
        />
        <div className='vignette'>
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default GroupsAd;
