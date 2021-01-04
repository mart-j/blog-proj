import axios from 'axios';
import { Dispatch } from 'redux';
import { GET_COMMENTS, Comment, UPDATE_COMMENTS, DELETE_COMMENT } from './types';

const getCommentsAction = (comments: Comment[]) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

export const updateCommentsAction = (comment: Comment) => {
  return {
    type: UPDATE_COMMENTS,
    comment,
  };
};

export const deleteCommentAction = (id: string | number) => {
  return {
    type: DELETE_COMMENT,
    id,
  };
};

export const getComment = (dispatch: Dispatch, comments: Comment[]) => {
  if (!comments.length) {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(({ data }) => {
        dispatch(getCommentsAction(data));
      });
  }
};
