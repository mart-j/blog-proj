import { createStore } from 'redux';
import { reducer } from './reducer';

// @ts-ignore
export const store = createStore(reducer);
