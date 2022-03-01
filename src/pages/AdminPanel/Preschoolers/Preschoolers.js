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

        <Input
          label={'Tytuł'}
          className={''}
          value={preschoolersData.title}
          id='title'
        />

        <InputFile label={'Pierwsze zdjęcie: '} className={''} id='firstImg' />
        <Input
          label={'alt do pierwszego zdjęcia:'}
          className={''}
          value={preschoolersData.images[0].alt}
          id='firsImgAlt'
        />

        <InputFile label={'Drugie zdjęcie: '} className={''} id='secondImg' />
        <Input
          label={'alt do drugiego zdjęcia:'}
          className={''}
          value={preschoolersData.images[1].alt}
          id='secondImgAlt'
        />

        <InputFile label={'Trzecie zdjęcie: '} className={''} id='thirdImg' />
        <Input
          label={'alt do trzeciego zdjęcia:'}
          className={''}
          value={preschoolersData.images[2].alt}
          id='thirdImgAlt'
        />

        <InputTextArea
          label={'Treść: '}
          className={''}
          value={preschoolersData.desription}
          id='content'
        />

        <div className='buttons'>
          <div className='green-btns'>
            <Button
              text={'ZAPISZ ZMIANY'}
              onclick={() => {
                const title = document.getElementById('title');
                const content = document.getElementById('content');
                const firstImg = document.getElementById('firstImg');
                const firsImgAlt = document.getElementById('firsImgAlt');
                const secondImg = document.getElementById('secondImg');
                const secondImgAlt = document.getElementById('secondImgAlt');
                const thirdImg = document.getElementById('thirdImg');
                const thirdImgAlt = document.getElementById('thirdImgAlt');

                console.log({
                  title: title?.value,
                  description: content?.value,
                  firstImg: firstImg?.value,
                  firsImgAlt: firsImgAlt?.value,
                  secondImg: secondImg?.value,
                  secondImgAlt: secondImgAlt?.value,
                  thirdImg: thirdImg?.value,
                  thirdImgAlt: thirdImgAlt?.value
                });
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preschoolers;
