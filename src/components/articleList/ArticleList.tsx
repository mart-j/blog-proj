import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './ArticleList.module.scss';
import searchIcon from '../../assets/search.svg';
import { Button } from '../button/Button';

export const ArticleList = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const history = useHistory();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });

  const filterdArticles = articles.filter((article) => {
    if (searchValue) {
      return article.title
        .toLowerCase()
        .includes(searchValue!.toLowerCase());
    }
    return article;
  });

  const readMoreButtonHandler = (id: number) => {
    history.push(`/articles/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.articleListWrapper}>
      <h1 className={styles.heading}>Latest stories</h1>
      <div className={styles.searchWrapper}>
        <input
          placeholder="Search..."
          className={styles.searchField}
          type="search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className={styles.searchIconWrapper}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search icon"
          />
        </div>
      </div>
      {articles && (
        <div className={styles.home}>
          {filterdArticles.map(({ body, title, id }, i) => {
            return (
              <div className={styles.articleWrapper} key={`${i}`}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.article}>{body}</p>
                <div className={styles.buttonWrapper}>
                  <Button
                    label="Read more"
                    clickHandler={() => readMoreButtonHandler(id)}
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      {/* <button onClick={() => getPost(dispatch)}>Button</button> */}
    </div>
  );
};
