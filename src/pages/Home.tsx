import React, { FC, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const history = useHistory();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });

  const filterdArticles = articles.filter((article) => {
    if (searchValue) {
      return article.title.includes(searchValue!);
    }
    return article;
  });

  const readMoreButtonHandler = (id: number) => {
    history.push(`/articles/${id}`);
  };
  return (
    <>
      <div className={styles.searchWrapper}>
        <input
          type="search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {articles && (
        <div className={styles.home}>
          {filterdArticles.map(({ body, title, id }, i) => {
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
