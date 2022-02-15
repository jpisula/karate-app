import React from 'react';
import './Main.scss';
import { VscNewFile } from 'react-icons/vsc';
import Article from './Article/Article';

const Main = () => {
  return (
    <main>
      <div className='container'>
        <h1>Aktualności</h1>

        <form className='inputs-container'>
          <div className='input-container'>
            <label htmlFor='tag'>wyszukaj po tagu: </label>
            <input type='text' name='tag' placeholder='podaj tag' />
          </div>

          <div className='input-container'>
            <label htmlFor='title'>wyszukaj po tytule: </label>
            <input type='text' name='title' placeholder='podaj tytuł' />
          </div>

          <div className='input-container'>
            <label htmlFor='sort'>sortuj po: </label>
            <input type='text' name='tag' />
          </div>
        </form>

        <section className='articles'>
          <div className='headers'>
            <h3>tytuł</h3>
            <h3>zdjęcie</h3>
            <h3>dodano</h3>
            <h3>tagi</h3>
            <div className='new-article'>
              <VscNewFile />
              <p>Nowy Artykuł</p>
            </div>
          </div>
          <div className='belt'></div>
          <Article />
        </section>
      </div>
    </main>
  );
};

export default Main;
