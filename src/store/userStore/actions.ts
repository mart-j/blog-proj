import { CHANGE_USER, User } from './types';

export const changeUserAction = (user: User) => {
  return {
    type: CHANGE_USER,
    user,
  };
};
