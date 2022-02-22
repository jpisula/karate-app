import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PlusIcon from '../Sections/icons/PlusIcon';
import EditIcon from './Icons/EditIcon';
import RemoveIcon from './Icons/RemoveIcon';
import './NewSection.scss';

const groupsData = {
  groups: [
    {
      id: 0,
      groupName: 'Dzieci',
      schedule: [
        {
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

  // useEffect(() => {
  //   console.log('first');
  // }, [grName]);

  const abcd = () => {
    console.log(
      'aaaaa',
      groupsData.groups.findIndex((el) => el.groupName === grName) !== -1
    );
    if (
      groupsData.groups.findIndex((el) => el.groupName === grName) !== -1 ||
      oldGrName === grName ||
      grName === ''
    ) {
      return;
    }
    console.log('bbbb');
    groupsData.groups.push({
      id:
        groupsData.groups.length - 1 >= 0
          ? groupsData.groups[groupsData.groups.length - 1].id + 1
          : 1,
      groupName: `${grName}`,
      schedule: []
    });
    setOldGrName(grName);

    console.log(groupsData.groups, lodziomiodziochujamuja);
  };

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
          {/* {console.log('abchuj', groupsData)} */}
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
            <input onChange={(event) => setGrName(event.target.value)}></input>
            <div onClick={() => abcd()}>
              <PlusIcon className='plus' />
            </div>
          </div>
          {/* <Group groupName={'Dzieci'}>
            <Day />
            <Day />
            <Day />
          </Group>
          <Group groupName={'Młodziez'}></Group>
          <Group groupName={'Dorośli'}></Group> */}
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

const Group = ({
  groupName,
  schedule,
  groups,
  id,
  grName,
  setGrName,
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
        className='x'
        onClick={() => {
          console.log(
            'usunieto o indexie: ',
            groups.findIndex((el) => el.id === id)
          );
          groups.splice(
            groups.findIndex((el) => el.id === id),
            1
          );
          console.log('after', groups);
          console.log(oldGrName, grName);
          setOldGrName(grName);
          setlodziomiodziochujamuja(!lodziomiodziochujamuja);
        }}
      >
        X
      </div>
      <div className='days-container'>
        {schedule.map((el) => (
          <Day scheduleEl={el} />
        ))}
        {isNewDayVisible && (
          <NewDay schedule={schedule} setIsNewDayVisible={setIsNewDayVisible} />
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
  lodziomiodziochujamuja,
  setlodziomiodziochujamuja
}) => {
  return (
    <div className='day'>
      <div className='day-info'>
        <div className='week-day'>{`Dzien: ${scheduleEl.day}`}</div>
        <div className='hours'>{`Dzien: ${scheduleEl.hours}`}</div>
      </div>
      <div className='buttons-container'>
        <div className='edit'>
          <p>Edytuj</p>
          <EditIcon className='day-icon' />
        </div>
        <div
          className='remove'
          onClick={(event) => {
            console.log('chuj');
          }}
        >
          <p>Usuń</p>
          <RemoveIcon className='day-icon' />
        </div>
      </div>
    </div>
  );
};

const NewDay = ({ schedule, setIsNewDayVisible }) => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentHours, setCurrentHours] = useState('');

  return (
    <div className='day'>
      <div className='add-day-info day-info'>
        <div className='week-day-container'>
          <label className='new-week-day' htmlFor='week-day'>
            Dzien:{' '}
          </label>
          <input
            type='text'
            name='week-day'
            onChange={(event) => setCurrentDay(event.currentTarget.value)}
          ></input>
        </div>
        <div className='hours-container'>
          <label className='new-hours' htmlFor='hours'>
            Godziny:{' '}
          </label>
          <input
            type='text'
            name='hours'
            onChange={(event) => setCurrentHours(event.currentTarget.value)}
          ></input>
        </div>
      </div>
      <button
        className='save-btn'
        onClick={() => {
          setIsNewDayVisible(false);
          schedule.push({
            day: currentDay,
            hours: currentHours
          });
        }}
      >
        Zapisz
      </button>
    </div>
  );
};
