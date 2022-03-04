import React, { useEffect, useRef, useState } from 'react';
import './NewArticle.scss';
import Input from '../Input/Input.js';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import Button from '../Button/Button';
import { Link, useParams } from 'react-router-dom';
import Tag from './Tag';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loader from '../Loader/Loader';

const API_URL = 'http://api.gancle-studio.pl/api/v1';

const NewArticle = () => {
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  const { id } = useParams();
  const [categories, setcategories] = useState([]);
  const [article, setArticle] = useState({});
  const [louder, setLouder] = useState(true);
  const [tags, setTags] = useState([]);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(false);

  useEffect(async () => {
    const categoriesResult = await axios.get(`${API_URL}/categories`);
    setcategories(categoriesResult.data.data);

    if (id) {
      const articleResult = await axios.get(`${API_URL}/articles/${id}`);
      articleResult.data.data.map(
        (el) => (el.tags = ['karate', 'ligota', 'egzaminy'])
      );
      setArticle({ ...articleResult.data.data[0] });
      setTags(
        articleResult.data.data[0].tags.map((el, index) => {
          return {
            id: index,
            name: el
          };
        })
      );
    } else {
      setTags([]);
    }
    setLouder(false);
  }, []);

  const createArticleContent = async (
    title,
    category_id,
    text,
    shortenDesc,
    bigImgUrl,
    bigImgAlt,
    smallImgUrl,
    smallImgAlt,
    tags
  ) => {
    if (
      title?.value !== '' &&
      category_id?.value !== '' &&
      text?.value !== '' &&
      shortenDesc?.value !== '' &&
      bigImgAlt?.value !== '' &&
      smallImgAlt?.value
    ) {
      if (id) {
        await axios.put(
          `${API_URL}/articles/${id}`,
          {
            title: title ? title?.value : '',
            category_id: category_id ? category_id?.value : '',
            text: text ? text?.value : '',
            shortenDesc: shortenDesc ? shortenDesc?.value : '',
            bigImgUrl: bigImgUrl ? bigImgUrl?.value : '',
            bigImgAlt: bigImgAlt ? bigImgAlt?.value : '',
            smallImgUrl: smallImgUrl ? smallImgUrl?.value : '',
            smallImgAlt: smallImgAlt ? smallImgAlt?.value : '',
            tags: ''
          },
          title.value
        );
      } else {
        await axios.post(
          `${API_URL}/articles`,
          {
            title: title ? title?.value : '',
            category_id: category_id ? category_id?.value : '',
            text: text ? text?.value : '',
            shortenDesc: shortenDesc ? shortenDesc?.value : '',
            bigImgUrl: bigImgUrl ? bigImgUrl?.value : '',
            bigImgAlt: bigImgAlt ? bigImgAlt?.value : '',
            smallImgUrl: smallImgUrl ? smallImgUrl?.value : '',
            smallImgAlt: smallImgAlt ? smallImgAlt?.value : '',
            tags: ''
          },
          title.value
        );
      }
      window.location.href = 'http://localhost:3000/admin/aktualnosci';
    } else {
      setIsAnyFieldEmpty(true);
    }
  };

  return (
    <>
      {louder && <Loader />}
      {!louder && (
        <main>
          <div className='new-article-container'>
            <h2 className='header-container header-container-margin'>
              <p>Nowy Artykuł</p>
              <Link to='/admin/aktualnosci'>
                <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
              </Link>
            </h2>
            <Input
              label={'Tytuł:'}
              className={''}
              value={article?.title || ''}
              id='title'
            />
            <InputFile label={'duze zdjęcie:'} className={''} id='bigImgUrl' />

            <Input
              label={'alt do duzego zdjęcia:'}
              className={''}
              value={article?.bigImgAlt || ''}
              id='bigImgAlt'
            />
            <InputFile
              label={'małe zdjęcie:'}
              className={''}
              id='smallImgUrl'
            />
            <Input
              label={'alt do małego zdjęcia:'}
              className={''}
              value={article.smallImgUrl || ''}
              id='smallImgAlt'
            />

            <form className='input-container'>
              <label htmlFor='sort'>wybierz kategorie artykulu: </label>
              <select
                name='sorting'
                className='select'
                id='categoryId'
                defaultValue={article.category_id}
              >
                {categories.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </form>

            <div className='tags-container'>
              <h3>Tagi</h3>
              <input
                ref={inputRef}
                type='text'
                placeholder='Dodaj tag'
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setTags([
                      ...tags,
                      {
                        id: tags.length > 0 ? tags[tags.length - 1].id + 1 : 0,
                        name: event.target.value
                      }
                    ]);
                    inputRef.current.value = '';
                  }
                }}
              />
              <div className='tags'>
                {tags.map((el) => (
                  <Tag
                    key={el.id}
                    name={el.name}
                    id={el.id}
                    tags={tags}
                    ReloadVar={ReloadVar}
                    setReloadVar={setReloadVar}
                  />
                ))}
              </div>
            </div>

            <InputTextArea
              label={'treść artykułu:'}
              value={article?.text || ''}
              id='text'
            />

            {isAnyFieldEmpty && (
              <div className='empty-field-warning'>
                Wszystkie pola muszą być uzupełnione!
              </div>
            )}

            <div className='buttons'>
              <div className='green-btns'>
                <Button
                  text={'ZAPISZ ZMIANY'}
                  onclick={() => {
                    const title = document.getElementById('title');
                    const categoryId = document.getElementById('categoryId');
                    const text = document.getElementById('text');
                    const shortenDesc = document.getElementById('shortenDesc');
                    const bigImgUrl = document.getElementById('bigImgUrl');
                    const bigImgAlt = document.getElementById('bigImgAlt');
                    const smallImgUrl = document.getElementById('smallImgUrl');
                    const smallImgAlt = document.getElementById('smallImgAlt');
                    console.log(id);
                    createArticleContent(
                      title,
                      categoryId,
                      text,
                      shortenDesc,
                      bigImgUrl,
                      bigImgAlt,
                      smallImgUrl,
                      smallImgAlt,
                      tags
                    );
                  }}
                />
                <Link to='/admin/aktualnosci'>
                  <Button text={'POWRÓT (bez zapisu)'} />
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default NewArticle;
