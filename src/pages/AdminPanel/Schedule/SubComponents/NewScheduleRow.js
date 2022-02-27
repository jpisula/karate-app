import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import InputTextArea from '../../InputTextArea/InputTextArea';
import './NewScheduleRow.scss';

const NewScheduleRow = ({ isNewRow }) => {
  const { id, groupId } = useParams();

  const gropusData = {
    groups: [
      {
        id: 0,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa', 'sadasd', 'chsdaj2'],
        helpers: ['adsa', 'sadasd', 'chsdaj2']
      },
      {
        id: 1,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa', 'sadasd', 'chsdaj2'],
        helpers: ['adsa', 'sadasd', 'chsdaj2']
      },
      {
        id: 2,
        place: '21/32/2022',
        name: 'zawody',
        address: 'ajkdgadgaskdfgadas',
        day: 'asjdsad',
        instructors: ['adsa ', 'sadasd ', 'chsdaj2 '],
        helpers: ['adsa ', 'sadasd ', 'chsdaj2 ']
      }
    ]
  };

  const currentGroup = gropusData.groups.find((el) => el.id === parseInt(id));
  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowy wiersz</p>
          <Link to={`/admin/harmonogram/dodaj/${groupId}`}>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input
          label={'Nazwa:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.name}
        />
        <Input
          label={'Miejsce:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.place}
        />
        <Input
          label={'Dzień:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.day}
        />
        <Input
          label={'Adres:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.address}
        />
        <InputTextArea
          label={'Instruktorzy:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.instructors}
        />
        <InputTextArea
          label={'Pomocnicy:'}
          className={''}
          value={isNewRow ? '' : currentGroup?.helpers}
        />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to={`/admin/harmonogram/dodaj/${groupId}`}>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewScheduleRow;
