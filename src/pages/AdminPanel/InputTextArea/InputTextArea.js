import React from 'react';
import './InputTextArea.scss';

const InputTextArea = ({ label, className, value }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <textarea type='text' defaultValue={value} />
    </div>
  );
};

export default InputTextArea;
