import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { Button } from '../button/Button';
import styles from './ReadNextList.module.scss';

export const ReadNextList = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });
  const suggestedArticles = articles.filter(
    (post) => post.id > Number(id) && post.id <= Number(id) + 3,
  );

  const readMoreButtonHandler = (articleId: number) => {
    history.push(`/articles/${articleId}`);
  };

  const cutTitleLength = (number: number, text: string) => {
    return `${text.substring(0, number)}...`;
  };

  return (
    <>
      <h3 className={styles.heading}>Read next articles</h3>
      <div className={styles.articlesWrapper}>
        {suggestedArticles.map((article, i) => {
          return (
            <div className={styles.articleWrapper} key={`${i}`}>
              <div>
                <div className={styles.title}>
                  {cutTitleLength(30, article.title)}
                </div>
                <p className={styles.paragraph}>{article.body}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  label="Read more"
                  clickHandler={() => readMoreButtonHandler(article.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
