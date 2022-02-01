import './TrainingsSchedule.scss';
import Collapsible from 'react-collapsible';
import ArticleListContainer from '../../../components/shared/ArticleListContainer/ArticleListContainer';
import { trainingsSchedule } from '../../../configs/trainings-schedule';
import { BsChevronDown } from 'react-icons/bs';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './SuperResponsiveTableStyle.css';

const TrainingsSchedule = () => {
  const generateCollapsibleElements = () => {
    const schedule = [];
    for (const scheduleGroup of trainingsSchedule) {
      schedule.push(
        <Collapsible
          trigger={[<h3>{scheduleGroup.name}</h3>, <BsChevronDown />]}
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
      );
    }
    return schedule;
  };

  const generateScheduleTableRows = (scheduleGroup) => {
    const rows = [];
    for (const section of scheduleGroup.sections) {
      const {
        place,
        address,
        schedule,
        instructor,
        instructorEmail,
        instructorPhone,
        instructorHelpers
      } = section;

      rows.push(
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
      );
    }
    return rows;
  };

  return (
    <section className='trainings-schedule'>
      <div className='grid-container'>
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
        <ArticleListContainer />
      </div>
    </section>
  );
};

export default TrainingsSchedule;
