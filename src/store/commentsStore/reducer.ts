import {
  DELETE_COMMENT,
  GET_COMMENTS,
  AllActions,
  Comment,
  UPDATE_COMMENTS,
} from './types';

export const InitialCommentsStore: { comments: Comment[] } = {
  comments: [],
};

export const commentsReducer = (
  state = InitialCommentsStore,
  action: AllActions,
): typeof InitialCommentsStore => {
  switch (action.type) {
    case GET_COMMENTS: {
      return { ...state, comments: action.comments };
    }
    case UPDATE_COMMENTS: {
      const newComments = [...state.comments];
      newComments.unshift(action.comment);
      return { comments: newComments };
    }
    case DELETE_COMMENT: {
      const newComments = [...state.comments];
      const currComm = newComments.find((comment) => {
        return comment.id === action.id;
      });
      const removeIndex = newComments.indexOf(currComm!);
      newComments.splice(removeIndex, 1);
      return { comments: newComments };
    }
    default:
      return state;
  }
};
