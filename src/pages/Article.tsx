import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store';
import {
  getComment,
  updateCommentsAction,
} from '../store/commentsStore/actions';
import { Comment } from '../store/commentsStore/types';
import styles from './Article.module.scss';

export const Articles: FC = () => {
  const [commentInput, setCommentInput] = useState<Comment>();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const articles = useSelector((state: RootState) => {
    return state.postsStore.posts;
  });
  const comments = useSelector((state: RootState) => {
    return state.commentsStore.comments;
  });

  const user = useSelector((state: RootState) => {
    return state.userStore.user.email;
  });

  const test = () => {
    const newComments = [...comments, commentInput!];
    dispatch(updateCommentsAction(newComments));
  };

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
      <button onClick={test}>test</button>
      {user === 'guest' && (
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div>
              <input
                type="email"
                className={styles.email}
                placeholder="e-mail@mail.com"
                onChange={(e) => {
                  setCommentInput({
                    ...commentInput!,
                    email: e.target.value,
                    postId: Number(id),
                  });
                }}
              />
            </div>
            <textarea
              placeholder="Your comment goes here..."
              name="commentArea"
              id="commentArea"
              cols={50}
              rows={5}
              className={styles.commentArea}
              onChange={(e) => {
                setCommentInput({
                  ...commentInput!,
                  body: e.target.value,
                });
              }}
            ></textarea>
          </form>
        </div>
      )}
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
