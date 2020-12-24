import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeUserAction } from '../store/userStore/actions';

export const Login: FC = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => {
    return state.userStore.user;
  });
  const userDb = useSelector((state: RootState) => {
    return state.userStore.userDb;
  });

  const dispatchHandler = () => {
    if (JSON.stringify(userDb).includes(JSON.stringify(input))) {
      dispatch(changeUserAction(input!));
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatchHandler();
          setInput({ email: '', password: '' });
        }}
      >
        <label htmlFor="fname">e-mail: </label>
        <input
          onChange={(e) => {
            setInput({ ...input!, email: e.target.value });
          }}
          type="email"
          value={input.email}
          required
        />
        <br />
        <br />
        <label htmlFor="lname">Password: </label>
        <input
          onChange={(e) => {
            setInput({ ...input!, password: e.target.value });
          }}
          type="password"
          value={input.password}
          required
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
