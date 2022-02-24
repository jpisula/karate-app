import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import InputTextArea from '../../InputTextArea/InputTextArea';
import './NewScheduleRow.scss';

const NewScheduleRow = () => {
  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowy wiersz</p>
          <Link to='/admin/harmonogram/dodaj'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input label={'Nazwa:'} className={''} />
        <Input label={'Miejsce:'} className={''} />
        <Input label={'Dzień:'} className={''} />
        <Input label={'Adres:'} className={''} />
        <InputTextArea label={'Instruktorzy:'} className={''} />
        <InputTextArea label={'Pomocnicy:'} className={''} />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/harmonogram/dodaj'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewScheduleRow;
