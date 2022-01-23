import React, { useContext } from 'react';
import userContext from '../context/userContext';

export default function Header() {
  const { user: { email } } = useContext(userContext);
  return (
    <header>
      <h1>Header</h1>
      <p data-testid="email-field">{email}</p>
      <span data-testid="total-field">{`total: ${0}`}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}
