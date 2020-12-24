export const GET_COMMENTS = 'GET_COMMENTS';

export type InitialCommentsStore = {
  comments: Comment[];
};

export interface AllActions extends InitialCommentsStore {
  type: typeof GET_COMMENTS;
}

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
