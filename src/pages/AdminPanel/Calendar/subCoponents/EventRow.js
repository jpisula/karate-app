import React, { useEffect, useState } from 'react';
import './EventRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import ModalPopup from '../../ModalPopup/ModalPopup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const EventRow = ({ event }) => {
  const {
    id,
    title,
    description,
    startDate,
    endDate,
    imgUrl,
    shortenDesc,
    eventCategory
  } = event;
  const [deleted, setDeleted] = useState(false);

  const handleRemoveClick = async () => {
    console.log(`Usunięto ${id} wydarzenie`);
    await axios.delete(`${API_URL}/calendar/${id}`);

    setDeleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <div className='article'>
      <div className='title'>{title}</div>
      <div className='img'>
        <a href={`${API_URL}/uploads/photos/calendar`}> LINK</a>
      </div>
      <div className='date'>{startDate.slice(0, 10)}</div>
      <div className='date'>{endDate.slice(0, 10)}</div>
      <div className='edit-or-remove'>
        <Link to={`/admin/kalendarz/nowe-wydarzenie/${id}`}>
          <div>
            <p>edytuj</p>
            <BiEdit />
          </div>
        </Link>
        <ModalPopup
          trigger={
            <div className='hover'>
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
