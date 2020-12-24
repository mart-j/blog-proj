import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Users: FC = () => {
  const currentUser = useSelector((state: RootState) => {
    return state.userStore.user.email;
  });

  return (
    <>
      <h3>{currentUser}</h3>
      <h5>{currentUser !== 'guest' && <button>sign out</button>}</h5>
    </>
  );
};
