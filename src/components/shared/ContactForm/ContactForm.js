import Button from '../Button/Button';
import './ContactForm.scss';

const onBtnClick = (e) => {
  e.preventDefault();
};

function ContactForm({ animation, btnAnimation }) {
  return (
    <form className='contact-form'>
      <Input
        classes={'contact-input-normal'}
        placeholder={'Twoje imię...'}
        label={'Twoje imię'}
        animation={animation}
      />
      <Input
        classes={'contact-input-normal'}
        placeholder={'E-mail...'}
        label={'E-mail'}
        animation={animation}
      />
      <Input
        classes={'contact-input-normal'}
        placeholder={'Numer telefonu...'}
        label={'Numer telefonu'}
        animation={animation}
      />
      <label data-aos={animation}>
        <p>Wiadomość</p>
        <textarea
          className={'contact-input-big'}
          placeholder={'Wiadomość...'}
        />
      </label>

      <Button
        text='Wyślij formularz'
        onClick={onBtnClick}
        animation={btnAnimation}
      />
    </form>
  );
}

const Input = ({ classes, placeholder, label, animation }) => {
  return (
    <label data-aos={animation}>
      <p>{label}</p>
      <input type='text' className={classes} placeholder={placeholder} />
    </label>
  );
};

export default ContactForm;
