import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import ModalPopup from '../ModalPopup/ModalPopup';
import './NewInfoPage.scss';

const NewInfoPage = () => {
  const { id } = useParams();

  const InfoPagesData = {
    infoPages: [
      {
        id: 0,
        title: 'STOPNIE W KARATE',
        content: 'HBQFEHWUVFUQHEVFHQEVFQGHVFFQVQJHFKVQWEHQVJEFQHKVFEBAD'
      },
      {
        id: 1,
        title: 'SŁOWNIK POJĘĆ',
        content: 'HBQFEHWUVFUQHEVFHQEVFQGHVFFQVQJHFKVQWEHQVJEFQHKVFEBAD'
      },
      {
        id: 2,
        title: 'KARATE A PREAWO',
        content: 'HBQFEHWUVFUQHEVFHQEVFQGHVFFQVQJHFKVQWEHQVJEFQHKVFEBAD'
      },
      {
        id: 3,
        title: 'PRZYSIĘGA DOJO',
        content: 'HBQFEHWUVFUQHEVFHQEVFQGHVFFQVQJHFKVQWEHQVJEFQHKVFEBAD'
      }
    ]
  };

  const currentInfoPage = InfoPagesData.infoPages.find(
    (el) => el.id === parseInt(id)
  );

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} stronę informacyją`);
  };

  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowa strona informacyjna</p>
          <Link to='/admin/strony-informacyjne'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input label={'Tytuł:'} className={''} value={currentInfoPage?.title} />
        <InputTextArea
          label={'Tekst:'}
          className={''}
          value={currentInfoPage?.content}
        />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/strony-informacyjne'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
          {id && (
            <ModalPopup
              trigger={
                <div>
                  <Button className='b' text={'USUŃ STRONĘ'} />
                </div>
              }
              text='Czy na pewno chcesz usunąć tę stronę informacyją?'
              onYesClick={handleRemoveClick}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default NewInfoPage;
