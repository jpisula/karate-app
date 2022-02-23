import React from 'react';
import './InputFile.scss';

const InputFile = ({ label, className }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <label htmlFor='file-input' className='file-input-container'>
        <input type='file' name='file-input' />
      </label>
    </div>
  );
};

export default InputFile;
