import React, { useState } from 'react';
import './Main.scss';
import { VscNewFile } from 'react-icons/vsc';
import Article from './Article/Article';
import LeftArrow from './ArrowsIcons/LeftArrow';
import RightArrow from './ArrowsIcons/RightArrow';
import { Link } from 'react-router-dom';
import ArticleRow from './subCoponents/ArticleRow';

const Main = () => {
  const [lodziomiodziochujamuja, setLodziomiodziochujamuja] = useState(false);
  const articlesData = {
    articles: [
      {
        id: 0,
        createDate: '21/32/2022',
        name: 'zawody',
        text: 'ajkdgadgaskdfgadas',
        bigImgUrl: 'asjdsad',
        smallImgUrl: 'ajsdhaj',
        tags: ['adsa', 'chuj', 'chuj2'],
        category: 'tournament',
        shortenDesc: 'klsd'
      },
      {
        id: 1,
        createDate: '21/32/2022',
        name: 'zawody',
        text: 'ajkdgadgaskdfgadas',
        bigImgUrl: 'asjdsad',
        smallImgUrl: 'ajsdhaj',
        tags: ['adsa', 'chuj', 'chuj2'],
        category: 'tournament',
        shortenDesc: 'klsd'
      },
      {
        id: 2,
        createDate: '21/32/2022',
        name: 'zawody',
        text: 'ajkdgadgaskdfgadas',
        bigImgUrl: 'asjdsad',
        smallImgUrl: 'ajsdhaj',
        tags: ['adsa', 'chuj', 'chuj2'],
        category: 'tournament',
        shortenDesc: 'klsd'
      },
      {
        id: 3,
        createDate: '21/32/2022',
        name: 'zawody',
        text: 'ajkdgadgaskdfgadas',
        bigImgUrl: 'asjdsad',
        smallImgUrl: 'ajsdhaj',
        tags: ['adsa', 'chuj', 'chuj2'],
        category: 'tournament',
        shortenDesc: 'klsd'
      }
    ]
  };
  return (
    <main>
      <div className='news-container'>
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
            <select name='sorting' className='select'>
              <option value='lol'>lol</option>
              <option value='kol'>kol</option>
              <option value='chujol'>chujol</option>
            </select>
          </div>
        </form>

        <section className='articles'>
          <div className='headers'>
            <h3>tytuł</h3>
            <h3>zdjęcie</h3>
            <h3>dodano</h3>
            <h3>tagi</h3>
            <Link to='/admin/aktualnosci/nowy' className='new-article'>
              <VscNewFile />
              <p>Nowy Artykuł</p>
            </Link>
          </div>
          <div className='belt'></div>
          <div className='main-articles-container'>
            {articlesData.articles.map((el) => (
              <ArticleRow article={el} />
            ))}
          </div>

          <div className='pagination-container'>
            <div className='pagination-content'>
              <LeftArrow className='pagination-arrow' />
              <div className='pagination'>
                <div className='pagination-tile pagination-active'>1</div>
                <div className='pagination-tile'>2</div>
                <div className='pagination-tile'>3</div>
                <div className='pagination-tile'>4</div>
                <div className='pagination-tile'>5</div>
                <div className='pagination-tile'>...</div>
                <div className='pagination-tile'>10</div>
              </div>
              <RightArrow className='pagination-arrow' />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
