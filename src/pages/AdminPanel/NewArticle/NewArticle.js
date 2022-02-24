import React, { useRef, useState } from 'react';
import './NewArticle.scss';
import Input from '../Input/Input.js';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Tag from './Tag';

const NewArticle = () => {
  const [tags, setTags] = useState([]);
  const [lodziomiodziochujamuja, setlodziomiodziochujamuja] = useState(false);
  const inputRef = useRef();
  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowy Artykuł</p>
          <Link to='/admin/aktualnosci'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input label={'Tytuł:'} className={''} />
        <InputFile label={'duze zdjęcie:'} className={''} />
        <Input label={'alt do duzego zdjęcia:'} className={''} />
        <InputFile label={'małe zdjęcie:'} className={''} />
        <Input label={'alt do małego zdjęcia:'} className={''} />

        <form className='input-container'>
          <label htmlFor='sort'>wybierz kategorie artykulu: </label>
          <select name='sorting' className='select'>
            <option value='lol'>lol</option>
            <option value='kol'>kol</option>
            <option value='chujol'>lol</option>
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
                name={el.name}
                id={el.id}
                tags={tags}
                lodziomiodziochujamuja={lodziomiodziochujamuja}
                setlodziomiodziochujamuja={setlodziomiodziochujamuja}
              />
            ))}
          </div>
        </div>

        <InputTextArea label={'treść artykułu:'} />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/aktualnosci'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewArticle;
