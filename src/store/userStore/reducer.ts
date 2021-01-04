import { CHANGE_USER, ChangeUserAction, InitialUserStore } from './types';

export const initialUserStore: InitialUserStore = {
  user: {
    email: 'guest',
    password: '',
  },
  userDb: [
    {
      email: 'admin@admin.com',
      password: 'admin',
    },
    {
      email: 'user@user.com',
      password: 'user',
    },
  ],
};

export const userReducer = (
  state = initialUserStore,
  action: ChangeUserAction,
) => {
  switch (action.type) {
    case CHANGE_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
