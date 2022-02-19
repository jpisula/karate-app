import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PlusIcon from '../Sections/icons/PlusIcon';
import EditIcon from './Icons/EditIcon';
import RemoveIcon from './Icons/RemoveIcon';
import './NewSection.scss';

const NewSection = () => {
  return (
    <main>
      <div className='main-container'>
        <h2>
          <p>Nasze sekcje - KATOWICE LIGOTA</p>
          <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
        </h2>

        <Input label={'ID sekcji:'} className={''} />
        <Input label={'Nazwa sekcji:'} className={''} />

        <div className='section-info'>
          <p className='info'>Zdjęcie:</p>
          <label htmlFor='file-input' className='file-input-container'>
            <input type='file' name='file-input' />
          </label>
        </div>

        <div className='section-info'>
          <p className='info'>Opis sekcji:</p>
          <textarea type='text' />
        </div>

        <Input label={'Adres:'} className={'wide-input'} />
        <Input label={'Link do Google Maps:'} className={'wide-input'} />

        <h4>Grafik zajęć:</h4>

        <div className='groups-container'>
          <Group groupName={'Dzieci'}>
            <Day />
            <Day />
            <Day />
          </Group>
          <Group groupName={'Młodziez'}></Group>
          <Group groupName={'Dorośli'}></Group>
        </div>

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Button text={'POWRÓT (bez zapisu)'} />
          </div>
          <Button text={'USUŃ SEKCJĘ'} />
        </div>
      </div>
    </main>
  );
};

export default NewSection;

const AddDay = () => {
  return (
    <div className='day new-day'>
      <h5>Dodaj nowy dzień</h5>
      <PlusIcon className='new-day-icon' />
    </div>
  );
};

const Group = ({ groupName }) => {
  const [days, setDays] = useState([]);
  const [isLastNewDay, setIsLastNewDay] = useState(false);

  return (
    <div className='group'>
      <h3 className='group-name'>{groupName}</h3>
      <div className='days-container'>
        {days}
        <div
          className='new-day-container'
          onClick={(event) => {
            console.log(days);
            console.log(days[days.length - 1]);
            setDays((oldDays) =>
              isLastNewDay ? [...oldDays] : [...oldDays, <NewDay days={days} />]
            );
            setIsLastNewDay(true);
          }}
        >
          <AddDay />
        </div>
      </div>
    </div>
  );
};

const Day = (day, hours) => {
  return (
    <div className='day'>
      <div className='day-info'>
        <div className='week-day'>{`Dzien: ${day}`}</div>
        <div className='hours'>{`Dzien: ${hours}`}</div>
      </div>
      <div className='buttons-container'>
        <div className='edit'>
          <p>Edytuj</p>
          <EditIcon className='day-icon' />
        </div>
        <div className='remove'>
          <p>Usuń</p>
          <RemoveIcon className='day-icon' />
        </div>
      </div>
    </div>
  );
};

const NewDay = ({ days }) => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentHours, setCurrentHours] = useState('');
  const [addEl, setAddEl] = useState('lol');

  return (
    <div className='day'>
      <div className='day-info'>
        <label htmlFor='week-day'>Dzien: </label>
        <input
          type='text'
          name='week-day'
          onChange={(event) => setCurrentDay(event.currentTarget.value)}
        ></input>
        <label htmlFor='hours'>Godziny: </label>
        <input
          type='text'
          name='hours'
          onChange={(event) => setCurrentHours(event.currentTarget.value)}
        ></input>
      </div>
      <button
        onClick={() => {
          days.slice(days.length - 1, 1);
          days.push(<Day day={currentDay} hours={currentHours} />);
          console.log(days);
        }}
      >
        Wyślij
      </button>
    </div>
  );
};
