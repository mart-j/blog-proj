import { CHANGE_USER, AllActions, InitialUserStore } from './types';

export const initialUserStore: InitialUserStore = {
  user: {
    email: 'admin@admin.com',
    password: 'admin',
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

export const userReducer = (state = initialUserStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
