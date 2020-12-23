import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/postsStore/actions';
import { RootState } from '../store';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });

  const clickhandler = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      {articles.length > 0 && (
        <div>
          {articles.map(({ name }, i) => {
            return <div key={`${i}`}>{name}</div>;
          })}
        </div>
      )}
      <button onClick={clickhandler}>Button</button>
    </div>
  );
};
