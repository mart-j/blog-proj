import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../store/postsStore/actions';
import { RootState } from '../store';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });
  useEffect(() => {
    getPost(dispatch);
  }, []);
  return (
    <div>
      {articles.length > 0 && (
        <div>
          {articles.map(({ body }, i) => {
            return (
              <>
                <div key={`${i}`}>{body}</div>
                <br></br>
              </>
            );
          })}
        </div>
      )}
      {/* <button onClick={() => getPost(dispatch)}>Button</button> */}
    </div>
  );
};
