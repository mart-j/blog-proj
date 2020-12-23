import { combineReducers } from 'redux';
import { postsStore } from './postsStore/store';

const rootReducer = combineReducers({ postsStore });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
