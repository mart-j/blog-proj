import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const Home: FC = () => {
  const history = useHistory();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });

  const readMoreButtonHandler = (id: number) => {
    history.push(`/articles/${id}`);
  };
  return (
    <div>
      {articles.length > 0 && (
        <div>
          {articles.map(({ body, title, id }, i) => {
            return (
              <Fragment key={`${i}`}>
                <h3>{title}</h3>
                <div>{body}</div>
                <button onClick={() => readMoreButtonHandler(id)}>
                  ReadMore
                </button>
              </Fragment>
            );
          })}
        </div>
      )}
      {/* <button onClick={() => getPost(dispatch)}>Button</button> */}
    </div>
  );
};
