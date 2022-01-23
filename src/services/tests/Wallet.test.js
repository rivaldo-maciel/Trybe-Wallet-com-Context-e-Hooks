import React from 'react';
import App from '../../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

describe('Testes da page Wallet', () => {
  test('Verifica se existe um elemento que exiba o e-mail da pessoa usuária que fez o loguin', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/carteira');

    const emailField = screen.getByTestId('email-field');
    expect(emailField).toBeDefined();
  });
  test('Testa se existe um elemento que exiba a despesa total gera pela lista de gastos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/carteira');

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toBeDefined();
  })
  test('Verifica se existe um elemento que mostre qual câmbio está sendo utilizado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/carteira');

    const exchangeField = screen.getByTestId('header-currency-field');
    expect(exchangeField).toBeDefined();
  });
});