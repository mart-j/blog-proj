export const CHANGE_USER = 'CHANGE_USER';

export type InitialUserStore = {
  user: User;
  userDb: User[];
};

export type ChangeUserAction = {
  type: typeof CHANGE_USER;
  user: User;
};

export type User = {
  email: string;
  password: string;
};
