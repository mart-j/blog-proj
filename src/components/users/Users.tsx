import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialUserStore } from '../../store/userStore/reducer';
import { RootState } from '../../store';
import { changeUserAction } from '../../store/userStore/actions';
import styles from './Users.module.scss';
import userIcon from '../../assets/user.svg';
import { Button } from '../button/Button';

export const Users: FC = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => {
    return state.users.user.email;
  });
  const singOutHandler = () => {
    dispatch(changeUserAction(initialUserStore.user));
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.currentUserWrapper}>
        <img className={styles.userIcon} src={userIcon} alt="user icon" />
        <div className={styles.currentUser}>
          {currentUser.indexOf('@') !== -1
            ? currentUser.substring(0, currentUser.indexOf('@'))
            : currentUser}
        </div>
      </div>
      {currentUser !== 'guest' && (
        <>
          <Button
            textColor="white"
            label="Sign out"
            clickHandler={singOutHandler}
          />
        </>
      )}
    </div>
  );
};
