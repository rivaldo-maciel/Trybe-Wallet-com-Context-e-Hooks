import React from 'react';
import App from '../../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

describe('Tests da page Login', () => {
  test('verifica `/` é a rota da página', () => {
    const { history }  = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Verifica se os campos de e-mail e senha estão renderizados', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
  test('Verifica se existe um botão com o texto `Entrar`', () => {
    renderWithRouter(<App />);
    const btnEnter = screen.getByRole('button', {name: 'Entrar'});
    expect(btnEnter).toBeInTheDocument();
  });
  test('Testa se o botão `Entrar` está desabilitado quando o formato de e-mail ou password estiverem errados', () => {
    renderWithRouter(<App />);
    const invalidEmail_1 = 'test@@test.com';
    const invalidEmail_2 = 'test@@testcom';
    const invalidEmail_3 = 'test@test.';
    const invalidEmail_4 = '.test@test.com';

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnEnter = screen.getByRole('button', {name: 'Entrar'});

    userEvent.type(inputEmail, invalidEmail_1);
    expect(btnEnter.disabled).toBeTruthy();
    userEvent.type(inputEmail, invalidEmail_2);
    expect(btnEnter.disabled).toBeTruthy();
    userEvent.type(inputEmail, invalidEmail_3);
    expect(btnEnter.disabled).toBeTruthy();
    userEvent.type(inputEmail, invalidEmail_4);
    expect(btnEnter.disabled).toBeTruthy();
    userEvent.type(inputPassword, '12345');
    expect(btnEnter.disabled).toBeTruthy();
  });
  test('Verifica se ao clicar no botão `Entrar`, a página é redirecionada para a rota /carteira', () => {
    const { history }  = renderWithRouter(<App />);
    const btnEnter = screen.getByRole('button', {name: 'Entrar'});
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(btnEnter);
    expect(history.location.pathname).toBe('/carteira');
  });
});
