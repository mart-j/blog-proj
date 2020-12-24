import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeUserAction } from '../store/userStore/actions';
import { User } from '../store/userStore/types';

export const Login: FC = () => {
  const [input, setInput] = useState<User>();

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => {
    return state.userStore.user;
  });

  const dispatchHandler = () => {
    dispatch(changeUserAction(input!));
  };

  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <form action="">
        <label htmlFor="fname">e-mail: </label>
        <input
          onChange={(e) => {
            setInput({ ...input!, email: e.target.value });
          }}
          type="email"
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
          required
        />
        <br />
        <br />
        <input onSubmit={dispatchHandler} type="submit" 
        />
      </form>
    </>
  );
};
