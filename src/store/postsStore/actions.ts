import { GET_POSTS } from './types';

export const getPosts = () => {
  return {
    type: GET_POSTS,
    posts: [{ name: 'Jazeps' }],
  };
};
