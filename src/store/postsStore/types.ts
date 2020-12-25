export const GET_POSTS = 'GET_POSTS';
export const UPDATE_POST = 'UPDATE_POST';

export type InitialStore = {
  posts: Post[];
};

export interface AllActions extends InitialStore {
  type: typeof GET_POSTS | typeof UPDATE_POST;
}

export type Post = { userId: number; id: number; title: string; body: string };
