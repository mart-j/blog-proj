import { AllActions, INCREASE_COUNT } from './types';

const initialStore = {
  count: 0,
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case INCREASE_COUNT: {
      return {...state, count: action.count};
    }

    default:
      return state;
  }
};
