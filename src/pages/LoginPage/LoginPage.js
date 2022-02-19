import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className='landing-page'>
      <div className='login-container'>
        <h1>Zaloguj się, aby kontynuować</h1>
        <form className='login'>
          <div className='container'>
            <div className='login-input-container'>
              <label htmlFor='login'>Email</label>
              <input type='text' name='login' placeholder='Podaj swój email' />
            </div>

            <div className='login-input-container'>
              <label htmlFor='password'>Hasło</label>
              <input
                type='text'
                name='password'
                placeholder='Podaj swoje hasło'
              />
            </div>

            <form className='password-reminder'>
              <p>zapomniłeś hasła?</p>

              <div className='remember-me-container'>
                <input type='checkbox' name='remember-me' />
                <label htmlFor='remember-me'>
                  Zapamiętaj mnie następnym razem
                </label>
              </div>
            </form>

            <button type='submit'>Zaloguj się</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
