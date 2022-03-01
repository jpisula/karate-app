import React from 'react';
import { CgFileRemove } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import InputTextArea from '../InputTextArea/InputTextArea';
import ModalPopup from '../ModalPopup/ModalPopup';
import './NewPerson.scss';

const NewPerson = () => {
  const { id } = useParams();
  const instructorsAndHelpersData = {
    people: [
      {
        id: 0,
        name: 'bodziony',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 1,
        name: 'lol',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 2,
        name: 'hgsaudh',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      },
      {
        id: 3,
        name: 'hmm',
        content: 'dsjkgfsfjdglsfhfghbchdvjf'
      }
    ]
  };

  const currentPerson = instructorsAndHelpersData.people.find(
    (el) => el.id === parseInt(id)
  );

  const handleRemoveClick = () => {
    console.log(`Usunięto ${id} osobę`);
  };

  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowy Instruktor lub pomocnik</p>
          <Link to='/admin/instruktorzy-i-pomocnicy'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>

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
              onclick={() => {
                const content = document.getElementById('content');

                console.log(id, {
                  content: content?.value
                });
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
  );
};

export default NewPerson;
