import { useParams } from 'react-router-dom';
import { infoPages } from '../../../configs/infoPages';
import './InfoGeneral.scss';

const InfoGeneral = () => {
  const { type } = useParams();
  const page = infoPages.find((el) => el.id === type);

  if (!page) {
    return <h1>Nie znaleziono strony</h1>;
  }

  return (
    <div className='info-general'>
      <div className='container'>
        <h1>{page.title}</h1>
        <div className='text'>{page.page}</div>
      </div>
    </div>
  );
};

export default InfoGeneral;
