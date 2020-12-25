import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialUserStore } from '../../store/userStore/reducer';
import { RootState } from '../../store';
import { changeUserAction } from '../../store/userStore/actions';

export const Users: FC = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => {
    return state.userStore.user.email;
  });
  const singOutHandler = () => {
    dispatch(changeUserAction(initialUserStore.user));
  };

  return (
    <>
      <h4>{currentUser}</h4>
      <h5>
        {currentUser !== 'guest' && (
          <button onClick={singOutHandler}>Sign out</button>
        )}
      </h5>
    </>
  );
};
