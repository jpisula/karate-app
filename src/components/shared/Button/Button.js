import './Button.scss';

function Button({ text, onClick, animation }) {
  return (
    <div onClick={onClick} data-aos='zoom-in' className='button-container'>
      <button>{text}</button>
    </div>
  );
}

export default Button;
