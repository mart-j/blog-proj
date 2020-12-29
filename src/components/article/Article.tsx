import React, { FC, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { getComment } from '../../store/commentsStore/actions';
import { updatePostAction } from '../../store/postsStore/actions';
import { Button } from '../button/Button';
import styles from './Article.module.scss';

export const Article: FC = () => {
  const [isTitleEditActive, setIsTitleEditActive] = useState(false);
  const [editTitleInput, setEditTitleInput] = useState<string>();
  const [isArticleEditActive, setIsArticleEditActive] = useState(false);
  const [editArticleInput, setEditArticleInput] = useState<string>();

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

  const history = useHistory();

  const post = articles.find((element) => element.id === Number(id));

  const backButtonHandler = () => {
    history.push('/');
  };

  useEffect(() => {
    const dropTo404 = articles.some((article) => article.id === Number(id));
    !dropTo404 && history.push('../404');
  }, []);

  const editTitleHandler = () => {
    setEditTitleInput(post!.title);
    const newPosts = [...articles];
    const editIndex = newPosts.indexOf(post!);
    newPosts[editIndex].title = editTitleInput!;
    dispatch(updatePostAction(newPosts));
    setIsTitleEditActive(!isTitleEditActive);
  };

  const editArticleHandler = () => {
    setEditArticleInput(post!.body);
    const newPosts = [...articles];
    const editIndex = newPosts.indexOf(post!);
    newPosts[editIndex].body = editArticleInput!;
    dispatch(updatePostAction(newPosts));
    setIsArticleEditActive(!isArticleEditActive);
  };

  useEffect(() => {
    getComment(dispatch, comments);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.articleWrapper}>
        <div>
          {!isTitleEditActive ? (
            <h4 className={styles.articleTitle}>{post?.title}</h4>
          ) : (
            <textarea
              className={styles.textArea}
              onChange={(e) => {
                setEditTitleInput(e.target.value);
              }}
              value={editTitleInput}
            />
          )}

          {user === 'admin@admin.com' && (
            <div className={styles.editButtonWrapper}>
              <Button
                stripeColor="red"
                label={isTitleEditActive ? 'Save' : 'Edit'}
                clickHandler={editTitleHandler}
              />
            </div>
          )}
        </div>
        <div>
          {!isArticleEditActive ? (
            <p className={styles.paragraph}>{post?.body}</p>
          ) : (
            <textarea
              className={styles.paragraphTextArea}
              onChange={(e) => {
                setEditArticleInput(e.target.value);
              }}
              value={editArticleInput}
            />
          )}
          {user === 'admin@admin.com' && (
            <div className={styles.editButtonWrapper}>
              <Button
                stripeColor="red"
                label={isArticleEditActive ? 'Save' : 'Edit'}
                clickHandler={editArticleHandler}
              />
            </div>
          )}
        </div>
        <div className={styles.backButtonWrapper}>
          <Button label="Back to home" clickHandler={backButtonHandler} />
        </div>
      </div>
    </>
  );
};
