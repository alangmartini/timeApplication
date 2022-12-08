import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithReduxAndRouter,
{ mockReducer } from './renders/renderWithReduxAndRouter';

describe('Tests if app has appropriate initial setup', () => {
  test('If initial page is "/" and has appropriate title', () => {
    const { history } = renderWithReduxAndRouter(
      <App />,
      mockReducer,
      { initialEntries: ['/'] },
    );
    expect(history.location.pathname).toBe('/');

    const title = screen.getByRole('heading', { name: /Página Inicial/ });
    expect(title).toBeInTheDocument();
  });
  test('Com initialEntry', async () => {
    const initialEntries = ['/counter'];
    const { history } = renderWithReduxAndRouter(
      <App />,
      mockReducer,
      { initialEntries },
    );

    const currentURL = history.location.pathname;
    expect(currentURL).toBe('/counter');

    const title = screen.getByText(/Contador/);
    expect(title).toBeInTheDocument();
  });
  test('If page "cronometer" has appropriate title', async () => {
    const initialEntries = ['/cronometer'];
    const { history } = renderWithReduxAndRouter(
      <App />,
      mockReducer,
      { initialEntries },
    );

    expect(history.location.pathname).toBe('/cronometer');

    const title = screen.getByRole('heading', { name: /Cronometro/ });
    expect(title).toBeInTheDocument();
  });

  test('if page "temporizador" has appropriate title', async () => {
    const initialEntries = ['/temporizador'];
    const { history } = renderWithReduxAndRouter(
      <App />,
      mockReducer,
      { initialEntries },
    );

    expect(history.location.pathname).toBe('/temporizador');

    const title = screen.getByRole('heading', { name: /Temporizador/ });
    expect(title).toBeInTheDocument();
  });
});
