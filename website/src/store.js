import { createStore } from 'redux';
import projectFilterReducer from './project-filter-reducer';

const store = createStore(projectFilterReducer);
export default store;