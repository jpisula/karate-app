import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputTextArea from '../InputTextArea/InputTextArea';
import Tag from '../NewArticle/Tag';
import './NewEvent.scss';

const NewEvent = () => {
  const [tags, setTags] = useState([]);
  const [ReloadVar, setReloadVar] = useState(false);
  const inputRef = useRef();
  return (
    <main>
      <div className='new-article-container'>
        <h2 className='header-container header-container-margin'>
          <p>Nowe wydarzenie</p>
          <Link to='/admin/kalendarz'>
            <Button text={'POWRÓT (bez zapisu)'} className='back-btn' />
          </Link>
        </h2>
        <Input label={'Tytuł:'} className={''} />
        <Input label={'Adres:'} className={''} />
        <Input label={'Data rozpoczęcia:'} className={''} />
        <Input label={'Data zakończenia:'} className={''} />
        <Input label={'Opis wydarzenia:'} className={''} />

        <form className='input-container'>
          <label htmlFor='sort'>wybierz kategorie wydarzenia: </label>
          <select name='sorting' className='select'>
            <option value='lol'>lol</option>
            <option value='kol'>kol</option>
            <option value='koll'>lol</option>
          </select>
        </form>

        <InputFile label={'Zdjęcie:'} className={''} />
        <Input label={'alt do zdjęcia:'} className={''} />

        <div className='buttons'>
          <div className='green-btns'>
            <Button text={'ZAPISZ ZMIANY'} />
            <Link to='/admin/kalendarz'>
              <Button text={'POWRÓT (bez zapisu)'} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewEvent;
