import React, { FC, useState } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeUserAction } from '../../store/userStore/actions';
import styles from './LoginForm.module.scss';
import { Button } from '../button/Button';

export const LoginForm: FC = () => {
  const [loginDetailsInput, setLoginDetailsInput] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { user, userDb } = useSelector((state: RootState) => {
    return { user: state.users.user, userDb: state.users.userDb };
  });

  const history = useHistory();

  const loginHandler = () => {
    if (_.some(userDb, loginDetailsInput)) {
      dispatch(changeUserAction(loginDetailsInput));
      localStorage.setItem('users', JSON.stringify(loginDetailsInput));
      history.push('/');
    }
  };

  return (
    <div className={styles.formWrapper}>
      {user.email === 'guest' ? (
        <form
          className={styles.loginForm}
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
            setLoginDetailsInput({ email: '', password: '' });
          }}
        >
          <span className={styles.heading}>Please sign in</span>
          <label className={styles.label}>email:</label>
          <input
            className={styles.input}
            onChange={(e) => {
              setLoginDetailsInput({
                ...loginDetailsInput,
                email: e.target.value,
              });
            }}
            type="email"
            value={loginDetailsInput.email}
            required
          />
          <br />
          <br />
          <label className={styles.label}>password:</label>
          <input
            className={styles.input}
            onChange={(e) => {
              setLoginDetailsInput({
                ...loginDetailsInput,
                password: e.target.value,
              });
            }}
            type="password"
            value={loginDetailsInput.password}
            required
          />
          <br />
          <br />
          <Button label="Submit" type="submit" />
        </form>
      ) : (
        <h3>You are already logged in!</h3>
      )}
    </div>
  );
};
