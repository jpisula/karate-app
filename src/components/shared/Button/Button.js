import './Button.scss';

function Button({ text, onClick, animation }) {
  return (
    <div onClick={onClick} data-aos={animation} className='button-container'>
      <button>{text}</button>
    </div>
  );
}

export default Button;
