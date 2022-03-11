import './TrainingsSchedule.scss';
import Collapsible from 'react-collapsible';
import { BsChevronDown } from 'react-icons/bs';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './SuperResponsiveTableStyle.css';
import ArticlesList from '../../../components/shared/ArticlesList/ArticlesList';
import Button from '../../../components/shared/Button/Button';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_UPLOADS_URL, API_URL } from '../../../configs/api';
import Loader from '../../../components/shared/Loader/Loader';

const TrainingsSchedule = () => {
  const navigate = useNavigate();
  const { group } = useParams();
  const [trainingsSchedule, setTrainingsSchedule] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(true);
    const data = await axios.get(`${API_URL}/schedule`);
    console.log(data.data.data);
    setTrainingsSchedule(data.data.data.schedules);
    setLoader(false);
  }, []);

  const [numOfArticleItems, setNumOfArticleItems] = useState(
    window.innerWidth > 1440 ? 6 : 4
  );
  //resize handling useEffect
  useEffect(() => {
    const handleResize = () => {
      setNumOfArticleItems(window.innerWidth > 1440 ? 6 : 4);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateCollapsibleElements = (trainingsSchedule) => {
    const schedule = [];
    for (const scheduleGroup of trainingsSchedule) {
      schedule.push(
        <Fragment key={`schedule-collapse-${scheduleGroup.id}`}>
          <Collapsible
            trigger={[<h3>{scheduleGroup.name}</h3>, <BsChevronDown />]}
            open={group && scheduleGroup.name === group} //category
          >
            <div className='table-wrapper'>
              <Table>
                <Thead>
                  <Tr>
                    <Th>
                      <p>Miejsce</p>
                    </Th>
                    <Th>
                      <p>Adres</p>
                    </Th>
                    <Th>
                      <p>Dzień i Godzina</p>
                    </Th>
                    <Th>
                      <p>Instruktor</p>
                    </Th>
                    <Th>
                      <p>Pomocnicy</p>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>{generateScheduleTableRows(scheduleGroup)}</Tbody>
              </Table>
            </div>
          </Collapsible>
        </Fragment>
      );
    }
    return schedule;
  };

  const generateScheduleTableRows = (scheduleGroup) => {
    const rows = [];
    for (const section of scheduleGroup.rows) {
      const { id, place, address, schedule, instructor, helpers } = section;

      rows.push(
        <Fragment key={`schedule-${id}-${place.replace(/ /g, '')}`}>
          <Tr>
            <Td>
              <p>{place}</p>
            </Td>
            <Td>
              <p>{address}</p>
            </Td>
            <Td>
              <div dangerouslySetInnerHTML={{ __html: schedule }} />
            </Td>
            <Td>
              <div dangerouslySetInnerHTML={{ __html: instructor }} />
            </Td>
            <Td>
              <div
                dangerouslySetInnerHTML={{
                  __html: helpers === '' ? '-' : helpers
                }}
              />
            </Td>
          </Tr>
        </Fragment>
      );
    }
    return rows;
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <section className='trainings-schedule'>
          <section className='container'>
            <header>
              <h1>Harmonogram Zajęć</h1>
            </header>
            <main>
              <div className='container'>
                <h2>Wybierz grupę wiekową, która Cię interesuje: </h2>
                <section className='schedule'>
                  {generateCollapsibleElements(trainingsSchedule)}
                </section>
              </div>
            </main>
          </section>

          <section className='news-list'>
            <div className='container'>
              <h2 className='news-h2'>Aktualności</h2>
              <ArticlesList
                className='articles-list'
                numberOfItems={numOfArticleItems}
                // animation=''
              />
              <Button
                text='Więcej aktualności'
                onClick={() =>
                  navigate('/wszystkie-aktualnosci', { replace: true })
                }
              />
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default TrainingsSchedule;
