export const CHANGE_USER = 'CHANGE_USER';

export type InitialUserStore = {
  user: User;
  userDb: User[];
};

export interface AllActions extends InitialUserStore {
  type: typeof CHANGE_USER;
}

export type User = {
  email: string;
  password: string;
};
