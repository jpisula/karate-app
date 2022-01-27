import './GroupsAd.scss';
import kidsKarateImg from './assets/kids-karate.jpeg';
import teenagersKarateImg from './assets/karate-teenagers.jpeg';
import adultsKarateImg from './assets/adults-karate.jpeg';
import familyKarateImg from './assets/family-karate.jpeg';

const GroupsAd = ({ animation }) => {
  return (
    <div className='groups-ad-list'>
      <GroupAdItem
        title='DZIECI'
        imgSrc={kidsKarateImg}
        XImgPosition={-26}
        animation={animation}
      />
      <GroupAdItem
        title='MŁODZIEŻY'
        imgSrc={teenagersKarateImg}
        XImgPosition={-3}
        animation={animation}
      />
      <GroupAdItem
        title='DOROSŁYCH'
        imgSrc={adultsKarateImg}
        XImgPosition={0}
        animation={animation}
      />
      <GroupAdItem
        title='RODZIN'
        imgSrc={familyKarateImg}
        XImgPosition={-50}
        animation={animation}
      />
    </div>
  );
};

const GroupAdItem = ({ title, imgSrc, XImgPosition, animation }) => {
  return (
    <div className='group-ad' data-aos={animation}>
      <img
        src={imgSrc}
        alt='karate kids photo'
        style={{ objectPosition: `0px ${XImgPosition}px` }}
      />
      <div className='vignette'>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default GroupsAd;
