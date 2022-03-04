import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import './Preschoolers.scss';
import axios from 'axios';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const Preschoolers = () => {
  const [preschoolersData, setPreschoolersData] = useState({});
  const [louder, setLouder] = useState(true);

  useEffect(async () => {
    const data = await axios.get(`${API_URL}/preschooler`);
    setPreschoolersData(data.data.data[0]);
    setLouder(false);
  });

  return (
    <>
      {louder && <Loader />}
      {!louder && (
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

            <InputFile
              label={'Pierwsze zdjęcie: '}
              className={''}
              id='firstImg'
            />
            <Input
              label={'alt do pierwszego zdjęcia:'}
              className={''}
              value={preschoolersData.firstImgAlt}
              id='firsImgAlt'
            />

            <InputFile
              label={'Drugie zdjęcie: '}
              className={''}
              id='secondImg'
            />
            <Input
              label={'alt do drugiego zdjęcia:'}
              className={''}
              value={preschoolersData.secondImgAlt}
              id='secondImgAlt'
            />

            <InputFile
              label={'Trzecie zdjęcie: '}
              className={''}
              id='thirdImg'
            />
            <Input
              label={'alt do trzeciego zdjęcia:'}
              className={''}
              value={preschoolersData.thirdImgAlt}
              id='thirdImgAlt'
            />

            <InputTextArea
              label={'Treść: '}
              className={''}
              value={preschoolersData.content}
              id='content'
            />

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={async () => {
                    const title = document.getElementById('title');
                    const content = document.getElementById('content');
                    const firstImg = document.getElementById('firstImg');
                    const firsImgAlt = document.getElementById('firsImgAlt');
                    const secondImg = document.getElementById('secondImg');
                    const secondImgAlt =
                      document.getElementById('secondImgAlt');
                    const thirdImg = document.getElementById('thirdImg');
                    const thirdImgAlt = document.getElementById('thirdImgAlt');
                    console.log({
                      title: title?.value,
                      description: content?.value,
                      firstImgUrl: firstImg?.value,
                      firstImgAlt: firsImgAlt?.value,
                      secondImgUrl: secondImg?.value,
                      secondImgAlt: secondImgAlt?.value,
                      thirdImgUrl: thirdImg?.value,
                      thirdImgAlt: thirdImgAlt?.value
                    });
                    await axios.post(
                      `${API_URL}/preschooler/${preschoolersData.id}`,
                      {
                        title: title?.value,
                        description: content?.value,
                        firstImgUrl: firstImg?.value,
                        firstImgAlt: firsImgAlt?.value,
                        secondImgUrl: secondImg?.value,
                        secondImgAlt: secondImgAlt?.value,
                        thirdImgUrl: thirdImg?.value,
                        thirdImgAlt: thirdImgAlt?.value
                      }
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Preschoolers;
