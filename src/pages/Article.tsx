import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { getComment } from '../store/commentsStore/actions';
import styles from './Article.module.scss';

export const Articles: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });
  const comments = useSelector((state: RootState) => {
    return state.commentsStore.comments;
  });

  const history = useHistory();

  const post = articles.find((element) => element.id === Number(id));

  const backButtonHandler = () => {
    history.push('/');
  };

  const suggestedArticles = articles.filter(
    (it) => it.id > Number(id) && it.id <= Number(id) + 3,
  );

  const readMoreButtonHandler = (articleId: number) => {
    history.push(`/articles/${articleId}`);
  };

  const filteredComments = comments.filter((comment) => {
    return comment.postId === Number(id);
  });

  useEffect(() => {
    getComment(dispatch);
  }, []);
  return (
    <>
      <div className={styles.articlesErapper}>
        <h4 className={styles.articles_title}>Title: {post?.title}</h4>
        <p className={styles.articles_title}>{post?.body}</p>
        <button
          onClick={backButtonHandler}
          className={styles.articles_back_button}
        >
          BackToHome
        </button>
      </div>
      {suggestedArticles.map((item, i) => {
        return (
          <div className={styles.suggArticlesWrapper} key={`${i}`}>
            <div className={styles.articles_title}>Title: {item.title}</div>
            <button
              onClick={() => readMoreButtonHandler(item.id)}
              className={styles.suggested_button}
            >
              Read More
            </button>
          </div>
        );
      })}
      <hr />
      <div>
        {filteredComments.map((comment, i) => {
          return (
            <div key={`${i}`} className={styles.comments}>
              <div>{comment.email}</div>
              <br />
              <div>{comment.body}</div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
