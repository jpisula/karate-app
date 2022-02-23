import React from 'react';
import './EventRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';

const EventRow = ({ event }) => {
  const {
    name,
    description,
    startDate,
    endDate,
    imgUrl,
    shortenDesc,
    eventCategory
  } = event;
  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='img'>{imgUrl}</div>
      <div className='date'>{startDate}</div>
      <div className='date'>{endDate}</div>
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

export default EventRow;
