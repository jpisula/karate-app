import { useParams } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import './InfoGeneral.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../../components/shared/Loader/Loader';
import 'react-quill/dist/quill.core.css';

const API_URL = 'http://localhost:49153/api/v1';

const InfoGeneral = () => {
  const { id } = useParams();

  const [page, setPage] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/infopages/${id}`);
    setPage(data.data.data);
    setLoader(false);
  }, []);

  if (!page) {
    return <NotFound />;
  }

  if (!page) {
    return <h1>Nie znaleziono strony</h1>;
  }

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div className='info-general'>
          <div className='container'>
            <h1>{page.title}</h1>
            <div
              className='text ql-editor'
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InfoGeneral;
