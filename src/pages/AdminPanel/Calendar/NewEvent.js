import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import Tag from '../NewArticle/Tag';
import './NewEvent.scss';

const NewEvent = () => {
  const [tags, setTags] = useState([]);
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();

  const eventsData = {
    events: [
      {
        id: 0,
        address: 'kidew',
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        imgAlt: 'kju',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 1,
        address: 'kidew',
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        imgAlt: 'kju',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 2,
        address: 'kidew',
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        imgAlt: 'kju',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      },
      {
        id: 3,
        address: 'kidew',
        name: 'zawody',
        description: 'lololsldosldsld',
        startDate: '20/02/2022',
        endDate: '23/02/2022',
        imgUrl: 'losldsjds',
        imgAlt: 'kju',
        shortenDesc: 'lolols',
        eventCategory: 'tournament'
      }
    ]
  };

  const currentEvent = eventsData.events.find((el) => el.id === parseInt(id));

  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowe wydarzenie</p>
          <Link to='/admin/kalendarz'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input
          label={'Tytuł:'}
          className={''}
          value={currentEvent?.name}
          id='title'
        />
        <Input
          label={'Adres:'}
          className={''}
          value={currentEvent?.address}
          id='address'
        />
        <Input
          label={'Data rozpoczęcia:'}
          className={''}
          value={currentEvent?.startDate}
          id='startDate'
        />
        <Input
          label={'Data zakończenia:'}
          className={''}
          value={currentEvent?.endDate}
          id='endDate'
        />
        <Input
          label={'Opis wydarzenia:'}
          className={''}
          value={currentEvent?.description}
          id='description'
        />

        <form className='input-container'>
          <label htmlFor='sort'>wybierz kategorie wydarzenia: </label>
          <select name='sorting' className='select' id='category'>
            <option value='lol'>lol</option>
            <option value='kol'>kol</option>
            <option value='koll'>lol</option>
          </select>
        </form>

        <InputFile label={'Zdjęcie:'} className={''} id='img' />
        <Input
          label={'alt do zdjęcia:'}
          className={''}
          value={currentEvent?.imgAlt}
          id='imgAlt'
        />

        <div className='buttons'>
          <div className='green-btns'>
            <Button
              text={'ZAPISZ ZMIANY'}
              onclick={() => {
                const title = document.getElementById('title');
                const address = document.getElementById('address');
                const startDate = document.getElementById('startDate');
                const endDate = document.getElementById('endDate');
                const img = document.getElementById('img');
                const imgAlt = document.getElementById('imgAlt');
                const category = document.getElementById('category');

                console.log(id, {
                  title: title?.value,
                  address: address?.value,
                  startDate: startDate?.value,
                  endDate: endDate?.value,
                  img: img?.value,
                  imgAlt: imgAlt?.value,
                  category: category?.value
                });
              }}
            />
            <Link to='/admin/kalendarz'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewEvent;
