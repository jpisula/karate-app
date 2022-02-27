import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import './Preschoolers.scss';

const Preschoolers = () => {
  const preschoolersData = {
    title: 'vrvfev',
    images: [
      {
        path: 'rffrf',
        alt: 'lol'
      },
      {
        path: 'rffrf',
        alt: 'lol'
      },
      {
        path: 'rffrf',
        alt: 'lol'
      }
    ],
    desription: 'hbhWVFHGVDFVAGHEF'
  };

  return (
    <main>
      <div className='preschoolers-container'>
        <h2 className='header-container header-container-margin'>
          <p>Przedszkolaki</p>
        </h2>

        <Input label={'Tytuł'} className={''} value={preschoolersData.title} />

        <InputFile label={'Pierwsze zdjęcie: '} className={''} />
        <Input
          label={'alt do pierwszego zdjęcia:'}
          className={''}
          value={preschoolersData.images[0].alt}
        />

        <InputFile label={'Drugie zdjęcie: '} className={''} />
        <Input
          label={'alt do drugiego zdjęcia:'}
          className={''}
          value={preschoolersData.images[1].alt}
        />

        <InputFile label={'Trzecie zdjęcie: '} className={''} />
        <Input
          label={'alt do trzeciego zdjęcia:'}
          className={''}
          value={preschoolersData.images[2].alt}
        />

        <InputTextArea
          label={'Treść: '}
          className={''}
          value={preschoolersData.desription}
        />

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
