import { createStore } from 'redux';
import reducers from './reducers';
import initialState from './initialState';

let store = createStore(reducers, initialState)

export default store;
