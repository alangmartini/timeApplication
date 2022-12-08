import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from 'redux';
import renderWithReduxAndRouter from './renders/renderWithReduxAndRouter';
import App from '../App';
import counterReducer, { INITIAL_STATE } from '../features/counter/reducer';

describe('Tests counter application', () => {
  let history;
  let store;

  beforeEach(() => {
    const initialEntries = ['/counter'];
    const initialState = INITIAL_STATE;
    const info = renderWithReduxAndRouter(
      <App />,
      combineReducers({ counterReducer }),
      { initialEntries, initialState },
    );
    history = info.history;
    store = info.store;
  });

  test('If current route is /counter', () => {
    const currentURL = history.location.pathname;
    expect(currentURL).toBe('/counter');
  });
  test('If there is a h1 with display', () => {
    const display = screen.getByRole('heading', { name: '0' });
    expect(display).toBeInTheDocument();
  });
  test('If there is two buttons on screen, increment and decrement', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons.some(({ innerText }) => innerText.includes('increment'))).toBeTruthy();
    expect(buttons.some(({ innerText }) => innerText.includes('decrement'))).toBeTruthy();
  });
  test('If the display initial value is 0', () => {
    const display = screen.getByRole('heading', { name: '0' });

    const currentStore = store.getState();
    const counterState = currentStore.counterSlice.counter;

    expect(display).toHaveTextContent('0');
    expect(counterState).toBe(0);
  });
  test('If when the increment button is clicked, the display is updated', () => {
    const buttons = screen.getAllByRole('button');
    const incrementButton = buttons
      .find(({ innerText }) => innerText.includes('increment'));

    const display = screen.getByRole('heading', { name: '0' });
    const currentStore = store.getState();
    const counterState = currentStore.counterSlice.counter;

    expect(counterState).toBe(0);
    expect(display).toHaveTextContent('0');

    userEvent.click(incrementButton);
    expect(counterState).toBe(1);
    expect(display).toHaveTextContent('1');

    const NUMBER_OF_CLICKS = 98;
    Array.from(Array(NUMBER_OF_CLICKS).keys())
      .forEach(() => userEvent.click(incrementButton)); // clicks 98 times

    const TESTING_2_DIGITS = 99;
    expect(counterState).toBe(TESTING_2_DIGITS);
    expect(display).toHaveTextContent('99');

    const TESTING_3_DIGITS = 100;
    expect(counterState).toBe(TESTING_3_DIGITS);
    expect(display).toHaveTextContent('100');
  });
  test('If when the decrmeent buttons is clicked, the dsplay is updated', () => {
    const buttons = screen.getAllByRole('button');
    const decrementButton = buttons
      .find(({ innerText }) => innerText.includes('decrement'));
    const display = screen.getByRole('heading', { name: '0' });
    const currentStore = store.getState();
    const counterState = currentStore.counterSlice.counter;

    expect(counterState).toBe(0);
    expect(display).toHaveTextContent('0');

    expect(counterState).toBe(0);
    expect(display).toHaveTextContent('0');

    userEvent.click(decrementButton);
    const NEGATIVE_NUMBER = -1;
    expect(counterState).toBe(NEGATIVE_NUMBER);
    expect(display).toHaveTextContent('-1');
  });
});
