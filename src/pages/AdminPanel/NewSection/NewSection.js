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
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const NewSection = () => {
  const [grName, setGrName] = useState('');
  const [oldGrName, setOldGrName] = useState('');
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [currentSection, setCurrentSection] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [sectionGroupId, setSectionGroupId] = useState('');
  const [deletVar, setDeleteVar] = useState(false);
  const [areGroupsVisible, setAreGroupsVisible] = useState(false);

  useEffect(async () => {
    if (id) {
      const sectionsContent = await axios.get(`${API_URL}/sections/${id}`);
      setCurrentSection(sectionsContent.data.data);
    } else {
      setCurrentSection({});
    }

    setLoader(false);
  }, []);

  useEffect(async () => {
    if (id) {
      const sectionsContent = await axios.get(`${API_URL}/sections/${id}`);
      setCurrentSection(sectionsContent.data.data);
    } else {
      setCurrentSection({});
    }

    setLoader(false);
  }, [ReloadVar]);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/sectionsgroup/${id}`);
    setReloadVar(!ReloadVar);
    setOldGrName(grName + '-deleted');
  };

  // useEffect(, [deletVar]);

  const addGroup = async () => {
    inputRef.current.value = '';

    if (
      currentSection.groups.findIndex((el) => el.groupName === grName) !== -1 ||
      oldGrName === grName ||
      grName === ''
    ) {
      return;
    }
    await axios.post(`${API_URL}/sectionsgroup/add`, {
      sectionId: currentSection.id,
      groupName: `${grName}`
    });
    setOldGrName(grName);
    setReloadVar(!ReloadVar);
  };

  const handleRemoveClick = async () => {
    await axios.delete(`${API_URL}/sections/${id}`);
    setDeleted(true);
  };

  if (deleted) {
    window.location.href = `/admin/sekcje/`;
    return null;
  }

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='main-container'>
            <h2 className='header-container'>
              <p>Nasze sekcje - KATOWICE LIGOTA</p>
              <Link to='/admin/sekcje'>
                <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
              </Link>
            </h2>

            <Input
              label={'Nazwa selektora: '}
              className={''}
              id='label'
              value={currentSection?.label || ''}
            />

            <Input
              label={'Nazwa sekcji:'}
              className={''}
              value={currentSection?.name || ''}
              id='name'
            />

            <InputFile label={'Duze zdjęcie: '} className={''} id='bigImg' />
            <Input
              label={'alt do duzego zdjęcia: '}
              id='bigImgAlt'
              value={currentSection?.bigImgAlt || ''}
            />
            <InputFile label={'Małe zdjęcie: '} className={''} id='smallImg' />
            <Input
              label={'alt do małego zdjęcia: '}
              id='smallImgAlt'
              value={currentSection?.smallImgAlt || ''}
            />

            <InputTextArea
              label={'opis sekcji:'}
              value={currentSection?.description || ''}
              id='description'
            />

            <Input
              label={'Adres:'}
              className={'wide-input'}
              value={currentSection?.address || ''}
              id='address'
            />
            <Input
              label={'Link do Google Maps:'}
              className={'wide-input'}
              value={currentSection?.googleMapsLink || ''}
              id='googleMapsLink'
            />

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={async () => {
                    const name = document.getElementById('name');
                    const label = document.getElementById('label');
                    const bigImg = document.getElementById('bigimg');
                    const bigImgAlt = document.getElementById('bigImgAlt');
                    const smallImg = document.getElementById('smallImg');
                    const smallImgAlt = document.getElementById('smallImgAlt');
                    const description = document.getElementById('description');
                    const address = document.getElementById('address');
                    const googleMapsLink =
                      document.getElementById('googleMapsLink');

                    const section = await axios.post(`${API_URL}/sections`, {
                      name: name?.value,
                      label: label?.value,
                      bigImgUrl: bigImg?.value,
                      bigImgAlt: bigImgAlt?.value,
                      smallImgUrl: smallImg?.value,
                      smallImgAlt: smallImgAlt?.value,
                      description: description?.value,
                      googleMapsLink: googleMapsLink?.value,
                      address: address?.value
                    });
                    if (!id) {
                      window.location.href = `${window.location.href}/${section.data.data.id}`;
                    }
                  }}
                />
                <Link to='/admin/sekcje'>
                  <Button text={'POWRÓT (bez zapisu)'} />
                </Link>
              </div>
              <ModalPopup
                trigger={
                  id && (
                    <Button text={'USUŃ SEKCJĘ'} onclick={handleRemoveClick} />
                  )
                }
                text='Czy na pewno chcesz usunąć tę sekcję?'
                onYesClick={handleRemoveClick}
              />
            </div>

            {id && (
              <>
                <h4>Grafik zajęć:</h4>
                <div className='groups-container'>
                  {currentSection?.groups?.map((group) => (
                    <Group
                      groupName={group.groupName}
                      schedule={group.schedule}
                      groups={currentSection.groups}
                      groupId={group.id}
                      grName={grName}
                      setGrName={setGrName}
                      oldGrName={oldGrName}
                      setOldGrName={setOldGrName}
                      ReloadVar={ReloadVar}
                      setReloadVar={setReloadVar}
                      deletVar={deletVar}
                      setDeleteVar={setDeleteVar}
                      handleDelete={handleDelete}
                      id={id}
                      key={group.id}
                    ></Group>
                  ))}
                  <div className='add-section-tile'>
                    <h2>DODAJ NOWĄ GRUPĘ O NAZWIE: </h2>
                    <input
                      ref={inputRef}
                      onChange={(event) => setGrName(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                          addGroup();
                        }
                      }}
                    ></input>
                    <div onClick={() => addGroup()}>
                      <PlusIcon className='plus' />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      )}
    </>
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
  setReloadVar,
  groupId,
  sectionGroupId,
  deletVar,
  setDeleteVar,
  handleDelete
}) => {
  const [isNewDayVisible, setIsNewDayVisible] = useState(false);

  return (
    <div className='group'>
      <h3 className='group-name'>{groupName}</h3>
      <div
        className='cross-container'
        onClick={() => {
          handleDelete(groupId);
          setDeleteVar(!deletVar);
        }}
      >
        <IoMdClose />
      </div>
      <div className='days-container'>
        {schedule.map((el) => (
          <Day
            scheduleEl={el}
            schedule={schedule}
            setReloadVar={setReloadVar}
            ReloadVar={ReloadVar}
            setIsNewDayVisible={setIsNewDayVisible}
            isNewDayVisible={isNewDayVisible}
            dayId={el.id}
            groupId={groupId}
            id={id}
            sectionGroupId={sectionGroupId}
            key={el.id}
          />
        ))}
        {isNewDayVisible && (
          <NewDay
            schedule={schedule}
            setIsNewDayVisible={setIsNewDayVisible}
            defaultDay={''}
            defaultHours={''}
            groupId={groupId}
            id={id}
            sectionGroupId={sectionGroupId}
            setReloadVar={setReloadVar}
            ReloadVar={ReloadVar}
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
  groupId,
  id,
  dayId
}) => {
  const [oldDay, setOldDay] = useState('');
  const [oldHours, setOldHours] = useState('');
  const [isNewDayShown, setIsNewDayShown] = useState(false);
  const [ifEdit, setIfEdit] = useState(false);

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
          groupId={groupId}
          id={id}
          ReloadVar={ReloadVar}
          setReloadVar={setReloadVar}
          ifEdit={ifEdit}
          setIfEdit={setIfEdit}
          dayId={dayId}
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
              onClick={async () => {
                setIfEdit(true);
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
              onClick={async () => {
                await axios.delete(
                  `${API_URL}/sectionsgroup/schedule/${dayId}`
                );
                setReloadVar(!ReloadVar);
                console.log(`usunięto ${dayId} dzień`);
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
  groupId,
  id,
  ReloadVar,
  setReloadVar,
  ifEdit,
  setIfEdit,
  dayId
}) => {
  const dayRef = useRef();
  const hoursRef = useRef();

  const showNewDay = () => {
    setIsNewDayVisible(false);
  };

  const showDay = () => {
    // schedule[groupId].day = dayRef.current.value;
    // schedule[groupId].hours = hoursRef.current.value;
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
        onClick={async () => {
          if (ifEdit) {
            await axios.post(`${API_URL}/sectionsgroup/schedule/${dayId}`, {
              day: dayRef.current.value,
              hours: hoursRef.current.value
            });
            setIfEdit(false);
          } else {
            await axios.post(`${API_URL}/sectionsgroup/schedule/add`, {
              sectionId: id,
              sectionsGroupId: groupId,
              day: dayRef.current.value,
              hours: hoursRef.current.value
            });
          }

          setReloadVar(!ReloadVar);
          if (setIsNewDayShown !== undefined) {
            showDay();
          } else {
            showNewDay();
          }
        }}
      >
        Zapisz
      </button>
    </div>
  );
};
