import React from 'react';
import './EventRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import ModalPopup from '../../ModalPopup/ModalPopup';
import { Link } from 'react-router-dom';

const EventRow = ({ event }) => {
  const {
    id,
    name,
    description,
    startDate,
    endDate,
    imgUrl,
    shortenDesc,
    eventCategory
  } = event;

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} wydarzenie`);
  };

  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='img'>{imgUrl}</div>
      <div className='date'>{startDate}</div>
      <div className='date'>{endDate}</div>
      <div className='edit-or-remove'>
        <Link to={`/admin/kalendarz/nowe-wydarzenie/${id}`}>
          <div>
            <p>edytuj</p>
            <BiEdit />
          </div>
        </Link>
        <ModalPopup
          trigger={
            <div>
              <p>usuń</p>
              <CgFileRemove />
            </div>
          }
          text='Czy na pewno chcesz usunąć to wydarzenie?'
          onYesClick={handleRemoveClick}
        />
      </div>
    </div>
  );
};

export default EventRow;
