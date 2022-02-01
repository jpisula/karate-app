import './TrainingsSchedule.scss';
import Collapsible from 'react-collapsible';
import ArticleListContainer from '../../../components/shared/ArticleListContainer/ArticleListContainer';
import { trainingsSchedule } from '../../../configs/trainings-schedule';
import { BsChevronDown } from 'react-icons/bs';

const TrainingsSchedule = () => {
  const generateCollapsibleElements = () => {
    const schedule = [];
    for (const scheduleGroup of trainingsSchedule) {
      schedule.push(
        <Collapsible
          trigger={[<h3>{scheduleGroup.name}</h3>, <BsChevronDown />]}
        >
          <p>World</p>
        </Collapsible>
      );
    }
    return schedule;
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
