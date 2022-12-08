import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';

export const mockReducer = () => {};

const renderWithReduxAndRouter = (
  component,
  reducer = { mockReducer },
  {
    initialState = {},
    store = createStore(reducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        { component }
      </Provider>
    </Router>,
  ),
  store,
  history,
});

export default renderWithReduxAndRouter;
