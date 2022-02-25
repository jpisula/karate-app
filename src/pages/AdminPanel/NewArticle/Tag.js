import React from 'react';
import './Tag.scss';
import { IoMdClose } from 'react-icons/io';

const Tag = ({ name, id, tags, ReloadVarchujamuja, setReloadVarchujamuja }) => {
  return (
    <>
      <div className='tag'>
        <p>{name}</p>
        <div
          className='cross-container'
          onClick={() => {
            tags.splice(
              tags.findIndex((el) => el.id === id),
              1
            );
            setReloadVarchujamuja(!ReloadVarchujamuja);
          }}
        >
          <IoMdClose />
        </div>
      </div>
    </>
  );
};

export default Tag;
