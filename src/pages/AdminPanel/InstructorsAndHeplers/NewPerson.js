import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import InputTextArea from '../InputTextArea/InputTextArea';
import './NewPerson.scss';

const NewPerson = () => {
  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowy Instruktor lub pomocnik</p>
          <Link to='/admin/instruktorzy-i-pomocnicy'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>

        <InputTextArea label={'Zawartość:'} className={''} />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/instruktorzy-i-pomocnicy'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewPerson;
