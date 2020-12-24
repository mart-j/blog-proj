export const GET_POSTS = 'GET_POSTS';

export type InitialStore = {
  posts: Post[];
};

export interface AllActions extends InitialStore {
  type: typeof GET_POSTS;
}

export type Post = { userId: number; id: number; title: string; body: string };
