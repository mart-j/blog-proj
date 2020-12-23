import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/postsStore/actions';
import { RootState } from '../store';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => {
    return state.postsStore.posts.name;
  });
  const clickhandler = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      {name[0] && <div>{JSON.stringify(name)}</div>}
      <button onClick={clickhandler}>Button</button>
    </div>
  );
};
