import React, { useState } from 'react';
import _, { stubFalse } from 'lodash';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeUserAction } from '../../store/userStore/actions';
import styles from './LoginForm.module.scss';
import { Button } from '../button/Button';

export const LoginForm = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => {
    return state.userStore.user;
  });
  const userDb = useSelector((state: RootState) => {
    return state.userStore.userDb;
  });

  const history = useHistory();

  const dispatchHandler = () => {
    if (_.some(userDb, input)) {
      dispatch(changeUserAction(input!));
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
            dispatchHandler();
            setInput({ email: '', password: '' });
          }}
        >
          <span className={styles.heading}>Please sign in</span>
          <label className={styles.label} htmlFor="fname">
            email:{' '}
          </label>
          <input
            className={styles.input}
            onChange={(e) => {
              setInput({ ...input!, email: e.target.value });
            }}
            type="email"
            value={input.email}
            required
          />
          <br />
          <br />
          <label className={styles.label} htmlFor="lname">
            password:{' '}
          </label>
          <input
            className={styles.input}
            onChange={(e) => {
              setInput({ ...input!, password: e.target.value });
            }}
            type="password"
            value={input.password}
            required
          />
          <br />
          <br />
          <Button label="Submit" />
        </form>
      ) : (
        'You are already signed in!'
      )}
    </div>
  );
};
