import React from 'react';
import './Input.scss';

const Input = ({ label, className }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <input type='text' className={className} />
    </div>
  );
};

export default Input;
