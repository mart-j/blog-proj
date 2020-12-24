import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Users: FC = () => {
  const currentUser = useSelector((state: RootState) => {
    return state.userStore.user.email;
  });

  return <h5>{currentUser}</h5>;
};
