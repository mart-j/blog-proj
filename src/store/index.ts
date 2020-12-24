import { combineReducers } from 'redux';
import { postsStore } from './postsStore/store';
import { commentsStore } from './commentsStore/store';
import { userStore } from './userStore/store';

const rootReducer = combineReducers({ postsStore, commentsStore, userStore });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
