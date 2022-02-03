import { Fragment } from 'react';
import Collapsible from 'react-collapsible';
import { BsChevronDown } from 'react-icons/bs';
import { instructors } from '../../../configs/instructors';
import './Instructors.scss';

const Instructors = () => {
  const instructorsList = instructors;
  return (
    <div className='instructors-page'>
      <div className='container'>
        <h1>Nasi instruktorzy i pomocnicy</h1>
        <h2>Wybierz instruktora, o którym chcesz przeczytać: </h2>
        {instructorsList.map(({ id, title, degree, name, imageUrl, text }) => (
          <Fragment key={`instructor-collapse-${id}`}>
            <Collapsible
              trigger={
                <>
                  <BsChevronDown /> <h2>{`${title} ${name}, ${degree}`}</h2>
                </>
              }
              // open={group && scheduleGroup.category === group}
            >
              <div className='text'>{text}</div>
            </Collapsible>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
