export const GET_POSTS = 'GET_POSTS';

export type Post = {
  {name: string}
};

export type InitialStore = {
  posts: Post[];
};

export interface PostsRootState extends InitialStore {}

export interface AllActions extends PostsRootState {
  type: typeof GET_POSTS;
}
