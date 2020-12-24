import { CHANGE_USER, AllActions, User } from './types';

export const InitialUserStore: { user: User } = {
  user: {
    email: 'guest',
    password: '',
  },
};

export const userReducer = (state = InitialUserStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
