import { GET_COMMENTS, AllActions, Comment } from './types';

export const InitialCommentsStore: { comments: Comment[] } = {
  comments: [],
};

export const commentsReducer = (
  state = InitialCommentsStore,
  action: AllActions,
) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return { ...state, comments: action.comments };
    }
    default:
      return state;
  }
};
