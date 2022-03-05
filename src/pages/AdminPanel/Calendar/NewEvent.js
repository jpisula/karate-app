import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import Tag from '../NewArticle/Tag';
import './NewEvent.scss';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const NewEvent = () => {
  const [tags, setTags] = useState([]);
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();
  const [newEvent, setNewEvent] = useState([]);
  const [loader, setLoader] = useState(true);
  const [eventCategories, setEventCategories] = useState([]);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/calendar/${id}`);
    setNewEvent(data.data.data);

    const categories = await axios.get(`${API_URL}/eventcategories`);
    setEventCategories(categories.data.data);
    setLoader(false);
  }, []);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
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
              value={newEvent?.title}
              id='title'
            />
            <Input
              label={'Adres:'}
              className={''}
              value={newEvent?.address}
              id='address'
            />
            <Input
              label={'Data rozpoczęcia:'}
              className={''}
              value={newEvent?.startDate.slice(0, 10)}
              id='startDate'
            />
            <Input
              label={'Data zakończenia:'}
              className={''}
              value={newEvent?.endDate.slice(0, 10)}
              id='endDate'
            />
            <Input
              label={'Opis wydarzenia:'}
              className={''}
              value={newEvent?.description}
              id='description'
            />

            <form className='input-container'>
              <label htmlFor='sort'>wybierz kategorie wydarzenia: </label>
              <select
                name='sorting'
                className='select'
                id='category'
                defaultValue={newEvent.eventCategoryId}
              >
                {eventCategories.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </form>

            <InputFile label={'Zdjęcie:'} className={''} id='img' />
            <Input
              label={'alt do zdjęcia:'}
              className={''}
              value={newEvent?.imgAlt}
              id='imgAlt'
            />

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={async () => {
                    const title = document.getElementById('title');
                    const address = document.getElementById('address');
                    const startDate = document.getElementById('startDate');
                    const endDate = document.getElementById('endDate');
                    const img = document.getElementById('img');
                    const imgAlt = document.getElementById('imgAlt');
                    const category = document.getElementById('category');
                    const description = document.getElementById('description');

                    if (id) {
                      await axios.post(`${API_URL}/calendar/${id}`, {
                        title: title?.value,
                        address: address?.value,
                        startDate: startDate?.value,
                        endDate: endDate?.value,
                        imgUrl: img?.value,
                        imgAlt: imgAlt?.value,
                        eventCategoryId: category?.value,
                        description: description?.value
                      });
                    } else {
                      await axios.post(`${API_URL}/calendar`, {
                        title: title?.value,
                        address: address?.value,
                        startDate: startDate?.value,
                        endDate: endDate?.value,
                        imgUrl: img?.value,
                        imgAlt: imgAlt?.value,
                        eventCategoryId: category?.value,
                        description: description?.value
                      });
                    }

                    window.location.href = '/admin/kalendarz';
                  }}
                />
                <Link to='/admin/kalendarz'>
                  <Button text={'POWRÓT (bez zapisu)'} />
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default NewEvent;
