import React from 'react';
import './InputTextArea.scss';

const InputTextArea = ({ label, className, value, ref, id }) => {
  return (
    <div className='section-info'>
      <p className='info'>{label}</p>
      <textarea type='text' defaultValue={value} ref={ref} id={id} />
    </div>
  );
};

export default InputTextArea;
