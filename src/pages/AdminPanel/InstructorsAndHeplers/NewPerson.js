import React, { useEffect, useState } from 'react';
import { CgFileRemove } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import InputTextArea from '../InputTextArea/InputTextArea';
import ModalPopup from '../ModalPopup/ModalPopup';
import './NewPerson.scss';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Input from '../Input/Input';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const NewPerson = () => {
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);
  const [loader, setLoader] = useState(true);

  const [currentPerson, setCurrentPerson] = useState({});

  useEffect(async () => {
    if (id) {
      const data = await axios.get(`${API_URL}/instructors/${id}`);
      setCurrentPerson(data.data.data);
    }
    setLoader(false);
  }, []);

  const handleRemoveClick = async () => {
    console.log(`Usunięto ${id} osobę`);
    await axios.delete(`${API_URL}/instructors/${id}`);
    window.location.href = '/admin/instruktorzy-i-pomocnicy';
    setDeleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='new-article-container'>
            <h2 className='header-container header-container-margin'>
              <p>Nowy Instruktor lub pomocnik</p>
              <Link to='/admin/instruktorzy-i-pomocnicy'>
                <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
              </Link>
            </h2>

            <Input label={'Nazwa: '} value={currentPerson?.name} id='name' />
            <Input
              label={'Stopień: '}
              value={currentPerson?.degree}
              id='degree'
            />

            <InputTextArea
              label={'Opis:'}
              className={''}
              value={currentPerson?.description}
              id='description'
            />

            <InputTextArea
              label={'Zawartość:'}
              className={''}
              value={currentPerson?.content}
              id='content'
            />

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={async () => {
                    const content = document.getElementById('content');
                    const name = document.getElementById('name');
                    const description = document.getElementById('description');
                    const degree = document.getElementById('degree');

                    if (id) {
                      await axios.post(`${API_URL}/instructors/${id}`, {
                        content: content?.value,
                        name: name?.value,
                        description: description?.value,
                        degree: degree?.value
                      });
                    } else {
                      await axios.post(`${API_URL}/instructors`, {
                        content: content?.value,
                        name: name?.value,
                        description: description?.value,
                        degree: degree?.value
                      });
                    }

                    window.location.href = '/admin/instruktorzy-i-pomocnicy';
                  }}
                />
                <Link to='/admin/instruktorzy-i-pomocnicy'>
                  <Button text={'POWRÓT (bez zapisu)'} />
                </Link>
              </div>
              {id && (
                <ModalPopup
                  trigger={
                    <div>
                      <Button text={'USUŃ OSOBĘ'} />
                    </div>
                  }
                  text='Czy na pewno chcesz usunąć tę osobę?'
                  onYesClick={handleRemoveClick}
                />
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default NewPerson;
