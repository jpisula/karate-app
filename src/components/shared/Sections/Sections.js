import { useContext, useEffect, useState } from 'react';
import SectionsContext from '../../../context/sections/SectionsContext';
import SectionInfo from '../SectionInfo/SectionInfo';
import GroupPhoto from '../../../assets/landing.jpg';
import './Sections.scss';
import axios from 'axios';
import Loader from '../../shared/Loader/Loader';
import { API_UPLOADS_URL, API_URL } from '../../../configs/api';

const Sections = () => {
  const { sectionToDisplay } = useContext(SectionsContext);
  // const [sections, setSections] = useState([]);
  const [section, setSection] = useState({});
  const [loader, setLoader] = useState(true);

  console.log(sectionToDisplay);

  useEffect(async () => {
    setLoader(true);
    const data = await axios.get(`${API_URL}/sections/${sectionToDisplay.id}`);
    setSection(data.data.data);
    setLoader(false);
  }, [sectionToDisplay.id]);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <section className='container sections-container'>
          <div className='container'>
            <h1 className='place'>{sectionToDisplay.name}</h1>
            <img
              src={`${API_UPLOADS_URL}/sections/${section.bigImgUrl}`}
              alt={section.bigImgAlt}
              className='group-photo'
            />
          </div>

          <article className='sections-info-container'>
            <SectionInfo section={section}></SectionInfo>
          </article>
        </section>
      )}
    </>
  );
};

export default Sections;
