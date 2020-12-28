import React, { FC, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import {
  getComment,
  updateCommentsAction,
} from '../../store/commentsStore/actions';

import { updatePostAction } from '../../store/postsStore/actions';
import { Button } from '../button/Button';
import { ReadNextList } from '../readNextList/ReadNextList';
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

  const filteredComments = comments.filter((comment) => {
    return comment.postId === Number(id);
  });

   const editTitleHandler = () => {
    setEditTitleInput(post!.title);
    const newPosts = [...articles];
    const editIndex = newPosts.indexOf(post!);
    newPosts[editIndex].title = editTitleInput!;
    dispatch(updatePostAction(newPosts));
  };

  const editArticleHandler = () => {
    setEditArticleInput(post!.body);
    const newPosts = [...articles];
    const editIndex = newPosts.indexOf(post!);
    newPosts[editIndex].body = editArticleInput!;
    dispatch(updatePostAction(newPosts));
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
              onChange={(e) => {
                setEditTitleInput(e.target.value);
              }}
              value={editTitleInput}
            />
          )}

          {user === 'admin@admin.com' && (
            <button
              onClick={() => {
                editTitleHandler();
                setIsTitleEditActive(!isTitleEditActive);
              }}
            >
              {isTitleEditActive ? 'Save' : 'Edit'}
            </button>
          )}
        </div>
        <div>
          {!isArticleEditActive ? (
            <p className={styles.paragraph}>{post?.body}</p>
          ) : (
            <textarea
              onChange={(e) => {
                setEditArticleInput(e.target.value);
              }}
              value={editArticleInput}
            />
          )}
          {user === 'admin@admin.com' && (
            <button
              onClick={() => {
                editArticleHandler();
                setIsArticleEditActive(!isArticleEditActive);
              }}
            >
              {isArticleEditActive ? 'Save' : 'Edit'}
            </button>
          )}
        </div>
        <Button label="Back to home" clickHandler={backButtonHandler} />
      </div>
    </>
  );
};
