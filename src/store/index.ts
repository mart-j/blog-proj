import { combineReducers, createStore } from 'redux';
import { postsStore } from './postsStore/store';
import { commentsStore } from './commentsStore/store';
import { userStore } from './userStore/store';

const combinedReducers = combineReducers({
  postsStore,
  commentsStore,
  userStore,
});

const RootStore = createStore(combinedReducers);

export default RootStore;

export type RootState = ReturnType<typeof combinedReducers>;
