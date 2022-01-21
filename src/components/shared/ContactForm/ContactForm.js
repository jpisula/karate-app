import Button from '../Button/Button';
import './ContactForm.scss';

const onBtnClick = (e) => {
  e.preventDefault();
  console.log(e);
};

function ContactForm() {
  return (
    <form className='contact-form'>
      <Input
        classes={'contact-input-normal'}
        placeholder={'Twoje imię...'}
        label={'Twoje imię'}
      />
      <Input
        classes={'contact-input-normal'}
        placeholder={'E-mail...'}
        label={'E-mail'}
      />
      <Input
        classes={'contact-input-normal'}
        placeholder={'Numer telefonu...'}
        label={'Numer telefonu'}
      />
      <label>
        <p>Wiadomość</p>
        <textarea
          className={'contact-input-big'}
          placeholder={'Wiadomość...'}
        />
      </label>

      <Button text='Wyślij formularz' onClick={onBtnClick} />
    </form>
  );
}

const Input = ({ classes, placeholder, label }) => {
  return (
    <label>
      <p>{label}</p>
      <input type='text' className={classes} placeholder={placeholder} />
    </label>
  );
};

export default ContactForm;
