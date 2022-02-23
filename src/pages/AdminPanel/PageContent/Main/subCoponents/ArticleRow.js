import React from 'react';
import './ArticleRow.scss';
import { BiEdit } from 'react-icons/bi';
import { CgFileRemove } from 'react-icons/cg';

const ArticleRow = ({ article }) => {
  const {
    name,
    text,
    bigImgUrl,
    smallImgUrl,
    tags,
    shortenDesc,
    category,
    createDate
  } = article;
  return (
    <div className='article'>
      <div className='title'>{name}</div>
      <div className='img'>{bigImgUrl}</div>
      <div className='date'>{createDate}</div>
      <div className='tags'>
        {tags.map((el) => (
          <p>{el}</p>
        ))}
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

export default ArticleRow;
