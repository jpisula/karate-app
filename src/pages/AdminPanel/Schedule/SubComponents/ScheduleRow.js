import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import ModalPopup from '../../ModalPopup/ModalPopup';
import './ScheduleRow.scss';

const ScheduleRow = ({ group, groupId }) => {
  const { name, place, address, day, instructors, helpers, id } = group;

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} wiersz`);
  };
  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='date'>{place}</div>
      <div className='date'>{address}</div>
      <div className='date'>{day}</div>
      <div className='date'>{instructors}</div>
      <div className='date'>{helpers}</div>
      <div className='edit-or-remove'>
        <Link to={`/admin/harmonogram/dodaj/wiersz/${groupId}/${id}`}>
          <div>
            <p>edytuj</p>
            <BiEdit />
          </div>
        </Link>
        {id !== undefined && (
          <ModalPopup
            trigger={
              <div>
                <p>usuń</p>
                <CgFileRemove />
              </div>
            }
            text='Czy na pewno chcesz usunąć ten wiersz?'
            onYesClick={handleRemoveClick}
          />
        )}
      </div>
    </div>
  );
};

export default ScheduleRow;
