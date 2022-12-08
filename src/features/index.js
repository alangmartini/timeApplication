import { composeWithDevTools } from '@redux-devtools/extension/';
import { combineReducers, createStore } from 'redux';
import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
  counterSlice: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
