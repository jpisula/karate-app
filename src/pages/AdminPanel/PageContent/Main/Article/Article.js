import React from 'react';
import './Article.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';

const Article = () => {
  return (
    <div className='article'>
      <div className='title'>
        UWAGA AKTUALIZACJA - Zimowa Sesja Egzaminacyjna 2021
      </div>
      <div className='img'>LINK</div>
      <div className='date'>18.01.2022</div>
      <div className='tags'>
        <p>treningi</p>
        <p>harmonogram</p>
      </div>
      <div className='edit-or-remove'>
        <div>
          <p>edytuj</p>
          <BiEdit />
        </div>
        <div>
          <p>usuń</p>
          <CgFileRemove />
        </div>
      </div>
    </div>
  );
};

export default Article;
