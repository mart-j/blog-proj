import axios from 'axios';
import { Dispatch } from 'redux';
import { GET_POSTS, Post } from './types';

const getPostsAction = (posts: Post[]) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

export const getPost = (dispatch: Dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
    dispatch(getPostsAction(data));
  });
};
