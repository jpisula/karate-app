import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import './Preschoolers.scss';

const Preschoolers = () => {
  return (
    <main>
      <div className='preschoolers-container'>
        <h2 className='header-container header-container-margin'>
          <p>Przedszkolaki</p>
        </h2>

        <Input label={'Tytuł'} className={''} />

        <InputFile label={'Pierwsze zdjęcie: '} className={''} />
        <Input label={'alt do pierwszego zdjęcia:'} className={''} />

        <InputFile label={'Drugie zdjęcie: '} className={''} />
        <Input label={'alt do drugiego zdjęcia:'} className={''} />

        <InputFile label={'Trzecie zdjęcie: '} className={''} />
        <Input label={'alt do trzeciego zdjęcia:'} className={''} />

        <InputTextArea label={'Treść: '} className={''} />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preschoolers;
