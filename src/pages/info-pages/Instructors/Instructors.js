import { Fragment, useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { BsChevronDown } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import './Instructors.scss';
import axios from 'axios';
import 'react-quill/dist/quill.core.css';

const API_URL = 'http://localhost:49153/api/v1';

const Instructors = () => {
  const params = useParams();
  const instructorId = params.id;
  const [instructors, setInstructors] = useState([]);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/instructors`);
    setInstructors(data.data.data);
  }, []);

  return (
    <div className='instructors-page'>
      <div className='container'>
        <h1>Nasi instruktorzy i pomocnicy</h1>
        <h2>Wybierz instruktora, o którym chcesz przeczytać: </h2>
        {instructors.map((el) => (
          <Fragment key={`instructor-collapse-${el.id}`}>
            <Collapsible
              trigger={
                <>
                  <BsChevronDown /> <h2>{` ${el.name}, ${el.degree}`}</h2>
                </>
              }
              open={instructorId && instructorId == el.id}
            >
              <div
                className='text ql-editor'
                dangerouslySetInnerHTML={{ __html: el.content }}
              ></div>
            </Collapsible>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
