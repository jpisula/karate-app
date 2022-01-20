import './Button.scss';

function Button({ text, onClick }) {
  return (
    <div className='button-container'>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
