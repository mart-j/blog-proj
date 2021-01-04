export const GET_POSTS = 'GET_POSTS';
export const UPDATE_POST = 'UPDATE_POST';

export type InitialStore = {
  posts: Post[];
};

export type EditInput = {
  title: string;
  paragraph: string;
};
export type UpdatePostAction = {
  type: typeof UPDATE_POST;
  editInput: EditInput;
  id: number;
};

export type GetPostsAction = {
  type: typeof GET_POSTS;
  posts: Post[];
};

export type AllActions = UpdatePostAction | GetPostsAction;

export type Post = { userId: number; id: number; title: string; body: string };
