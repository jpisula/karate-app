import './ContactForm.scss';

function ContactForm() {
  return (
    <form className='contact-form-container container'>
      <p className='contact-form-title'>Skontaktuj sie z nami!</p>
      <input
        type='text'
        className='contact-form-name'
        placeholder='imię'
      ></input>
      <input
        type='text'
        className='contact-form-phone-nr'
        placeholder='numer telefonu'
      ></input>
      <input
        type='text'
        className='contact-form-email'
        placeholder='e-mail'
      ></input>
      <input
        type='text'
        className='contact-form-question'
        placeholder='pytanie'
      ></input>
      <div className='button-container'>
        <button type='submit' className='contact-form-submit-button'>
          Wyslij
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
