import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PlusIcon from '../Sections/icons/PlusIcon';
import EditIcon from './Icons/EditIcon';
import RemoveIcon from './Icons/RemoveIcon';
import './NewSection.scss';
import { IoMdClose } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import ModalPopup from '../ModalPopup/ModalPopup';

const groupsData = [
  {
    sectionId: 0,
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
  },

  {
    sectionId: 2,
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
  },
  {
    sectionId: 3,
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
  }
];

const sectionsData = {
  sections: [
    {
      id: 0,
      place: 'dad',
      name: 'sdfrfe',
      imgUrl: 'wrerwer',
      description: 'fsfsdfsdfsfd',
      address: 'efdffffffff',
      googleMapsLink: 'nedhywgewt'
    },
    {
      id: 1,
      place: 'KATOWICE LIGOTA',
      name: 'sdfrfe',
      imgUrl: 'wrerwer',
      description: 'fsfsdfsdfsfd',
      address: 'efdffffffff',
      googleMapsLink: 'nedhywgewt'
    },
    {
      id: 2,
      place: 'KATOWICE LIGOTA',
      name: 'sdfrfe',
      imgUrl: 'wrerwer',
      description: 'fsfsdfsdfsfd',
      address: 'efdffffffff',
      googleMapsLink: 'nedhywgewt'
    },
    {
      id: 3,
      place: 'KATOWICE LIGOTA',
      name: 'sdfrfe',
      imgUrl: 'wrerwer',
      description: 'fsfsdfsdfsfd',
      address: 'efdffffffff',
      googleMapsLink: 'nedhywgewt'
    }
  ]
};

const NewSection = () => {
  const [grName, setGrName] = useState('');
  const [oldGrName, setOldGrName] = useState('');
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();

  const currentSection = groupsData.find((el) => {
    return el.sectionId === parseInt(id);
  });
  console.log(currentSection);

  const abcd = () => {
    inputRef.current.value = '';

    if (
      currentSection.groups.findIndex((el) => el.groupName === grName) !== -1 ||
      oldGrName === grName ||
      grName === ''
    ) {
      return;
    }
    currentSection.groups.push({
      id:
        currentSection.groups.length - 1 >= 0
          ? currentSection.groups[currentSection.groups.length - 1].id + 1
          : 0,
      groupName: `${grName}`,
      schedule: []
    });
    setOldGrName(grName);
  };

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} sekcję`);
  };

  return (
    <main>
      <div className='main-container'>
        <h2 className='header-container'>
          <p>Nasze sekcje - KATOWICE LIGOTA</p>
          <Link to='/admin/sekcje'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>

        <Input
          label={'Nazwa sekcji:'}
          className={''}
          value={
            sectionsData.sections.find((el) => el.id === parseInt(id))?.name ||
            ''
          }
        />

        <InputFile label={'Zdjęcie: '} className={''} />

        <InputTextArea
          label={'opis sekcji:'}
          value={
            sectionsData.sections.find((el) => el.id === parseInt(id))
              ?.description || ''
          }
        />

        <Input
          label={'Adres:'}
          className={'wide-input'}
          value={
            sectionsData.sections.find((el) => el.id === parseInt(id))
              ?.address || ''
          }
        />
        <Input
          label={'Link do Google Maps:'}
          className={'wide-input'}
          value={
            sectionsData.sections.find((el) => el.id === parseInt(id))
              ?.googleMapsLink || ''
          }
        />

        <h4>Grafik zajęć:</h4>

        <div className='groups-container'>
          {currentSection?.groups.map((group) => (
            <Group
              groupName={group.groupName}
              schedule={group.schedule}
              groups={groupsData.groups}
              id={group.id}
              grName={grName}
              setGrName={setGrName}
              oldGrName={oldGrName}
              setOldGrName={setOldGrName}
              ReloadVar={ReloadVar}
              setReloadVar={setReloadVar}
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
          <ModalPopup
            trigger={
              id && <Button text={'USUŃ SEKCJĘ'} onclick={handleRemoveClick} />
            }
            text='Czy na pewno chcesz usunąć tę sekcję?'
            onYesClick={handleRemoveClick}
          />
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
  ReloadVar,
  setReloadVar
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
          setReloadVar(!ReloadVar);
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
            setReloadVar={setReloadVar}
            ReloadVar={ReloadVar}
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
  ReloadVar,
  setReloadVar,
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
                setReloadVar(!ReloadVar);
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

  const schowNewDay = () => {
    setIsNewDayVisible(false);
    schedule.push({
      id: schedule.length > 0 ? schedule[schedule.length - 1].id + 1 : 0,
      day: dayRef.current.value,
      hours: hoursRef.current.value
    });
  };

  const schowDay = () => {
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
            schowDay();
          } else {
            schowNewDay();
          }
        }}
      >
        Zapisz
      </button>
    </div>
  );
};
