import React from 'react';
import App from '../../App';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

describe('Tests da page Login', () => {
  test('verifica `/` é a rota da página', () => {
    const { history } = renderWithRouter(<App />);
    const title = screen.getByText(/trybe/i);
    expect(title).toBeInTheDocument();
  });
});