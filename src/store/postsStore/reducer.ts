import { GET_POSTS, AllActions, Post } from './types';

export const initialStore: { posts: Post[] } = {
  posts: [],
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.posts };
    }
    default:
      return state;
  }
};
