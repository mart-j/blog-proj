export const GET_COMMENTS = 'GET_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export type InitialCommentsStore = {
  comments: Comment[];
};

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENTS;
  comment: Comment;
};

export type GetCommentsAction = {
  type: typeof GET_COMMENTS;
  comments: Comment[];
};

export type DeleteCommentAction = {
  type: typeof DELETE_COMMENT;
  id: number | string;
};

export type AllActions =
  | GetCommentsAction
  | UpdateCommentAction
  | DeleteCommentAction;

export type Comment = {
  postId: number;
  id: number | string;
  name?: string;
  email: string;
  body: string;
};
