import './Button.scss';

function Button({ text, onClick }) {
  return (
    <div onClick={onClick} className='button-container'>
      <button>{text}</button>
    </div>
  );
}

export default Button;
