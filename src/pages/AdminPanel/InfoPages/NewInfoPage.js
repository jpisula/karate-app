import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import ModalPopup from '../ModalPopup/ModalPopup';
import './NewInfoPage.scss';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const NewInfoPage = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [currentInfoPage, setCurrentInfoPage] = useState([]);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/infopages/${id}`);
    setCurrentInfoPage(data.data.data);
    setLoader(false);
  }, []);

  const handleRemoveClick = async () => {
    await axios.delete(`${API_URL}/infopages/${id}`);
    window.location.href = '/admin/strony-informacyjne';
    console.log(`Usunięto ${id} stronę informacyją`);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main>
          <div className='new-article-container'>
            <h2 className='header-container header-container-margin'>
              <p>Nowa strona informacyjna</p>
              <Link to='/admin/strony-informacyjne'>
                <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
              </Link>
            </h2>
            <Input
              label={'Tytuł:'}
              className={''}
              value={currentInfoPage?.title}
              id='title'
            />
            <InputTextArea
              label={'Tekst:'}
              className={''}
              value={currentInfoPage?.content}
              id='content'
            />

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={async () => {
                    const title = document.getElementById('title');
                    const content = document.getElementById('content');

                    if (id) {
                      await axios.post(`${API_URL}/infopages/${id}`, {
                        title: title?.value,
                        content: content?.value
                      });
                    } else {
                      await axios.post(`${API_URL}/infopages/`, {
                        title: title?.value,
                        content: content?.value
                      });
                    }

                    window.location.href = '/admin/strony-informacyjne';
                  }}
                />
                <Link to='/admin/strony-informacyjne'>
                  <Button text={'POWRÓT (bez zapisu)'} />
                </Link>
              </div>
              {id && (
                <ModalPopup
                  trigger={
                    <div>
                      <Button text={'USUŃ STRONĘ'} />
                    </div>
                  }
                  text='Czy na pewno chcesz usunąć tę stronę informacyją?'
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

export default NewInfoPage;
