import React from 'react';
import './InputTextArea.scss';

const InputTextArea = ({ label, className }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <textarea type='text' />
    </div>
  );
};

export default InputTextArea;
