import { GET_POSTS, AllActions, Post, UPDATE_POST } from './types';

export const initialStore: { posts: Post[] } = {
  posts: [],
};

export const postsReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case UPDATE_POST: {
      const newPosts = [...state.posts];
      const post = newPosts.find((element) => element.id === action.id);
      const editIndex = newPosts.indexOf(post!);
      newPosts[editIndex].title = action.editInput.title;
      newPosts[editIndex].body = action.editInput.paragraph;
      return { ...state, posts: newPosts };
    }
    default:
      return state;
  }
};
