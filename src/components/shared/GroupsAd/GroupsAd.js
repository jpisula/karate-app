import './GroupsAd.scss';
import kidsKarateImg from './assets/kids-karate.jpeg';
import teenagersKarateImg from './assets/karate-teenagers.jpeg';
import adultsKarateImg from './assets/adults-karate.jpeg';
import familyKarateImg from './assets/family-karate.jpeg';

const GroupsAd = () => {
  return (
    <div className='groups-ad-list'>
      <GroupAdItem
        title='DLA DZIECI'
        imgSrc={kidsKarateImg}
        XImgPosition={-26}
      />
      <GroupAdItem
        title='DLA MŁODZIEŻY'
        imgSrc={teenagersKarateImg}
        XImgPosition={-3}
      />
      <GroupAdItem
        title='DLA DOROSŁYCH'
        imgSrc={adultsKarateImg}
        XImgPosition={0}
      />
      <GroupAdItem
        title='DLA RODZIN'
        imgSrc={familyKarateImg}
        XImgPosition={-50}
      />
    </div>
  );
};

const GroupAdItem = ({ title, imgSrc, XImgPosition }) => {
  return (
    <div className='group-ad'>
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
