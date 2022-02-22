import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PlusIcon from '../Sections/icons/PlusIcon';
import EditIcon from './Icons/EditIcon';
import RemoveIcon from './Icons/RemoveIcon';
import './NewSection.scss';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const groupsData = {
  groups: [
    {
      id: 0,
      groupName: 'Dzieci',
      schedule: [
        {
          id: 0,
          day: 'Wtorek',
          hours: '17:30-18:30'
        }
      ]
    }
  ]
};

const NewSection = () => {
  const [grName, setGrName] = useState('');
  const [oldGrName, setOldGrName] = useState('');
  const [lodziomiodziochujamuja, setlodziomiodziochujamuja] = useState(false);
  const inputRef = useRef();

  const abcd = () => {
    inputRef.current.value = '';
    if (
      groupsData.groups.findIndex((el) => el.groupName === grName) !== -1 ||
      oldGrName === grName ||
      grName === ''
    ) {
      return;
    }
    groupsData.groups.push({
      id:
        groupsData.groups.length - 1 >= 0
          ? groupsData.groups[groupsData.groups.length - 1].id + 1
          : 0,
      groupName: `${grName}`,
      schedule: []
    });
    setOldGrName(grName);
  };

  return (
    <main>
      <div className='main-container'>
        <h2>
          <p>Nasze sekcje - KATOWICE LIGOTA</p>
          <Link to='/admin/sekcje'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
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
          {groupsData.groups.map((group) => (
            <Group
              groupName={group.groupName}
              schedule={group.schedule}
              groups={groupsData.groups}
              id={group.id}
              grName={grName}
              setGrName={setGrName}
              oldGrName={oldGrName}
              setOldGrName={setOldGrName}
              lodziomiodziochujamuja={lodziomiodziochujamuja}
              setlodziomiodziochujamuja={setlodziomiodziochujamuja}
            ></Group>
          ))}
          <div className='add-section-tile'>
            <h2>DODAJ NOWĄ GRUPĘ O NAZWIE: </h2>
            <input
              ref={inputRef}
              onChange={(event) => setGrName(event.target.value)}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  abcd();
                }
              }}
            ></input>
            <div onClick={() => abcd()}>
              <PlusIcon className='plus' />
            </div>
          </div>
        </div>

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/sekcje'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
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

const Group = ({
  groupName,
  schedule,
  groups,
  id,
  grName,
  oldGrName,
  setOldGrName,
  lodziomiodziochujamuja,
  setlodziomiodziochujamuja
}) => {
  const [isNewDayVisible, setIsNewDayVisible] = useState(false);

  return (
    <div className='group'>
      <h3 className='group-name'>{groupName}</h3>
      <div
        className='cross-container'
        onClick={() => {
          groups.splice(
            groups.findIndex((el) => el.id === id),
            1
          );
          setOldGrName(grName + '-deleted');
          setlodziomiodziochujamuja(!lodziomiodziochujamuja);
        }}
      >
        <IoMdClose />
      </div>
      <div className='days-container'>
        {schedule.map((el, index) => (
          <Day
            scheduleEl={el}
            schedule={schedule}
            id={schedule[index].id}
            setlodziomiodziochujamuja={setlodziomiodziochujamuja}
            lodziomiodziochujamuja={lodziomiodziochujamuja}
            setIsNewDayVisible={setIsNewDayVisible}
            isNewDayVisible={isNewDayVisible}
          />
        ))}
        {isNewDayVisible && (
          <NewDay
            schedule={schedule}
            setIsNewDayVisible={setIsNewDayVisible}
            defaultDay={''}
            defaultHours={''}
          />
        )}
        <div
          className='new-day-container'
          onClick={() => {
            setIsNewDayVisible(true);
          }}
        >
          <AddDay />
        </div>
      </div>
    </div>
  );
};

const Day = ({
  scheduleEl,
  schedule,
  lodziomiodziochujamuja,
  setlodziomiodziochujamuja,
  setIsNewDayVisible,
  id
}) => {
  const [oldDay, setOldDay] = useState('');
  const [oldHours, setOldHours] = useState('');
  const [isNewDayShown, setIsNewDayShown] = useState(false);

  return (
    <>
      {isNewDayShown && (
        <NewDay
          schedule={schedule}
          setIsNewDayVisible={setIsNewDayVisible}
          defaultDay={oldDay}
          defaultHours={oldHours}
          setIsNewDayVisible={setIsNewDayVisible}
          setIsNewDayShown={setIsNewDayShown}
          id={id}
        />
      )}
      {!isNewDayShown && (
        <div className='day'>
          <div className='day-info'>
            <div className='week-day'>{`Dzień: ${scheduleEl.day}`}</div>
            <div className='hours'>{`Godziny: ${scheduleEl.hours}`}</div>
          </div>
          <div className='buttons-container'>
            <div
              className='edit'
              onClick={() => {
                setIsNewDayShown(true);
                setOldDay(scheduleEl.day);
                setOldHours(scheduleEl.hours);
              }}
            >
              <p>Edytuj</p>
              <EditIcon className='day-icon' />
            </div>
            <div
              className='remove'
              onClick={() => {
                schedule.splice(
                  schedule.findIndex((el) => el.id === id),
                  1
                );
                setlodziomiodziochujamuja(!lodziomiodziochujamuja);
              }}
            >
              <p>Usuń</p>
              <RemoveIcon className='day-icon' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NewDay = ({
  schedule,
  setIsNewDayVisible,
  defaultDay,
  defaultHours,
  setIsNewDayShown,
  id
}) => {
  const dayRef = useRef();
  const hoursRef = useRef();

  const chuj1 = () => {
    setIsNewDayVisible(false);
    schedule.push({
      id: schedule.length > 0 ? schedule[schedule.length - 1].id + 1 : 0,
      day: dayRef.current.value,
      hours: hoursRef.current.value
    });
  };

  const chuj2 = () => {
    schedule[id].day = dayRef.current.value;
    schedule[id].hours = hoursRef.current.value;
    setIsNewDayShown(false);
  };

  return (
    <div className='day'>
      <div className='add-day-info day-info'>
        <div className='week-day-container'>
          <label className='new-week-day' htmlFor='week-day'>
            Dzień:{' '}
          </label>
          <input
            type='text'
            name='week-day'
            ref={dayRef}
            defaultValue={defaultDay}
          />
        </div>
        <div className='hours-container'>
          <label className='new-hours' htmlFor='hours'>
            Godziny:{' '}
          </label>
          <input
            type='text'
            name='hours'
            ref={hoursRef}
            defaultValue={defaultHours}
          />
        </div>
      </div>
      <button
        className='save-btn'
        onClick={() => {
          if (setIsNewDayShown !== undefined) {
            chuj2();
          } else {
            chuj1();
          }
        }}
      >
        Zapisz
      </button>
    </div>
  );
};
