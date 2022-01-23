import React, { useState, useEffect, useContext } from 'react';
import userContext from '../context/userContext';

export default function Login({ history }) {

  const [userDates, setUserDates] = useState({ email: '', password: '' })
  const [isDisabled, setIsDisabled] = useState(true);

  const { setUser } = useContext(userContext);

  const handleChange = ({ target: { name, value } }) => {
    setUserDates({ ...userDates, [name]: value })
  }

  useEffect(() => {
    const { email, password } = userDates;
    verifyEmail( email, password);
  }, [userDates])
  
  const verifyEmail = (email, password) => {
    let counterArroba = 0;
    let counterPonto = 0;
    const dotIndex = email.indexOf('.');

    for (let i = 0; i < email.length; i += 1) {
      if (email[i] === '@') {
        counterArroba += 1;
      }
      if (email[i] === '.') {
        counterPonto += 1;
      }
    }

    if ( counterArroba === 1
      && counterPonto === 1
      && dotIndex < email.length - 1
      && password.length >= 6) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
  }

  const handleUserDates = () => {
    setUser(userDates);
    console.log(history);
    history.push('/carteira');
  }

  return (
    <main>
      <h1>Tela De Login</h1>
      <input
        type="text"
        placeholder='e-mail'
        data-testid="email-input"
        name="email"
        onChange={ handleChange }
      />
      <input
      type="text" placeholder='password'
      data-testid="password-input"
      name="password"
      onChange={ handleChange }
      />
      <button
        type="button"
        disabled={ isDisabled }
        onClick={(e) => {
          e.preventDefault();
          handleUserDates();
        }}
      >
        Entrar
      </button>
    </main>
);
}

