import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const history = useHistory();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });

  const readMoreButtonHandler = (id: number) => {
    history.push(`/articles/${id}`);
  };
  return (
    <>
      {articles.length > 0 && (
        <div className={styles.home}>
          {articles.map(({ body, title, id }, i) => {
            return (
              <Fragment key={`${i}`}>
                <h3>Title: {title}</h3>
                <p>{body}</p>
                <button onClick={() => readMoreButtonHandler(id)}>
                  ReadMore
                </button>
                <hr />
              </Fragment>
            );
          })}
        </div>
      )}
      {/* <button onClick={() => getPost(dispatch)}>Button</button> */}
    </>
  );
};
