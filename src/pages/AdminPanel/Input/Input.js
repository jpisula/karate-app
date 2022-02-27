import React from 'react';
import './Input.scss';

const Input = ({ label, className, value }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <input type='text' className={className} defaultValue={value} />
    </div>
  );
};

export default Input;
