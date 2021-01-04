import axios from 'axios';
import { Dispatch } from 'redux';
import { EditInput, GET_POSTS, Post, UPDATE_POST } from './types';

const getPostsAction = (posts: Post[]) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

export const updatePostAction = (editInput: EditInput, id:number) => {
  return {
    type: UPDATE_POST,
    editInput,
    id,
  };
};

export const getPost = (dispatch: Dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
    dispatch(getPostsAction(data));
  });
};
