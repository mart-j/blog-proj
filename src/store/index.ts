import { combineReducers, createStore } from 'redux';
import posts from './postsStore';
import comments from './commentsStore';
import users from './userStore';

const combinedReducers = combineReducers({
  posts,
  comments,
  users,
});

const RootStore = createStore(combinedReducers);

export default RootStore;

export type RootState = ReturnType<typeof combinedReducers>;
