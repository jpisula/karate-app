import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import './ScheduleRow.scss';

const ScheduleRow = ({ group }) => {
  const { name, place, address, day, instructors, helpers } = group;
  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='date'>{place}</div>
      <div className='date'>{address}</div>
      <div className='date'>{day}</div>
      <div className='date'>{instructors}</div>
      <div className='date'>{helpers}</div>
      <div className='edit-or-remove'>
        <div>
          <p>edytuj</p>
          <BiEdit />
        </div>
        <div>
          <p>usuń</p>
          <CgFileRemove />
        </div>
      </div>
    </div>
  );
};

export default ScheduleRow;
