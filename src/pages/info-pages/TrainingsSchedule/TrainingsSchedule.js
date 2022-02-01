import './TrainingsSchedule.scss';
import Collapsible from 'react-collapsible';
import { trainingsSchedule } from '../../../configs/trainings-schedule';
import { BsChevronDown } from 'react-icons/bs';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './SuperResponsiveTableStyle.css';
import ArticlesList from '../../../components/shared/ArticlesList/ArticlesList';
import Button from '../../../components/shared/Button/Button';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TrainingsSchedule = () => {
  const navigate = useNavigate();
  const { group } = useParams();

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

  const generateCollapsibleElements = () => {
    const schedule = [];
    for (const scheduleGroup of trainingsSchedule) {
      schedule.push(
        <Fragment key={`schedule-collapse-${scheduleGroup.id}`}>
          <Collapsible
            trigger={[<h3>{scheduleGroup.name}</h3>, <BsChevronDown />]}
            open={group && scheduleGroup.category === group}
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
    for (const section of scheduleGroup.sections) {
      const {
        id,
        place,
        address,
        schedule,
        instructor,
        instructorEmail,
        instructorPhone,
        instructorHelpers
      } = section;

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
              {schedule.map((date) => {
                return (
                  <p>
                    {date.days} - {date.hours}
                  </p>
                );
              })}
            </Td>
            <Td>
              <p>{instructor}</p>
              <p>{instructorEmail}</p>
              <p>tel. {instructorPhone}</p>
            </Td>
            <Td>
              {instructorHelpers.length > 0 ? (
                instructorHelpers.map((helper) => {
                  return <p>{helper}</p>;
                })
              ) : (
                <p>-</p>
              )}
            </Td>
          </Tr>
        </Fragment>
      );
    }
    return rows;
  };

  return (
    <section className='trainings-schedule'>
      <section className='container'>
        <header>
          <h1>Harmonogram Zajęć</h1>
        </header>
        <main>
          <div className='container'>
            <h2>Wybierz grupę wiekową, która Cię interesuje: </h2>
            <section className='schedule'>
              {generateCollapsibleElements()}
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
            onClick={() => navigate('/newslist', { replace: true })}
          />
        </div>
      </section>
    </section>
  );
};

export default TrainingsSchedule;
