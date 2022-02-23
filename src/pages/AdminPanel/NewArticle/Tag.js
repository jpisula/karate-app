import React from 'react';
import './Tag.scss';
import { IoMdClose } from 'react-icons/io';

const Tag = ({
  name,
  id,
  tags,
  lodziomiodziochujamuja,
  setlodziomiodziochujamuja
}) => {
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
            setlodziomiodziochujamuja(!lodziomiodziochujamuja);
          }}
        >
          <IoMdClose />
        </div>
      </div>
    </>
  );
};

export default Tag;
