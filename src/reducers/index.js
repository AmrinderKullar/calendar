import { combineReducers, createStore } from 'redux';
import appointment from './appointment';

const reducer = combineReducers({ appointment });
const store = createStore(reducer);

export default store;
