import axios from 'axios';
import { Dispatch } from 'redux';
import { GET_COMMENTS, Comment, UPDATE_COMMENTS } from './types';

const getCommentsAction = (comments: Comment[]) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

export const updateCommentsAction = (comments: Comment[]) => {
  return {
    type: UPDATE_COMMENTS,
    comments,
  };
};

export const getComment = (dispatch: Dispatch, comments: Comment[]) => {
  if (!comments.length) {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(({ data }) => {
        console.log('iesuucu datus!');
        dispatch(getCommentsAction(data));
      });
  }
};
