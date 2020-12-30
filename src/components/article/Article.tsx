import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { getComment } from '../../store/commentsStore/actions';
import { updatePostAction } from '../../store/postsStore/actions';
import { Button } from '../button/Button';
import styles from './Article.module.scss';

type ArticleInput = {
  title: string;
  paragraph: string;
};

export const Article: FC = () => {
  const [isEditActive, setIsEditActive] = useState(false);
  const [editInput, setEditInput] = useState<ArticleInput>();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const rootStore = useSelector((state: RootState) => {
    return {
      posts: state.posts.posts,
      comments: state.comments.comments,
      user: state.users.user.email,
    };
  });

  const { comments } = rootStore;
  const { posts } = rootStore;
  const { user } = rootStore;

  const history = useHistory();

  const post = posts.find((element) => element.id === Number(id));

  const backButtonHandler = () => {
    history.push('/');
  };

  useEffect(() => {
    const dropTo404 = posts.some((article) => article.id === Number(id));
    !dropTo404 && history.push('../404');
  }, []);

  // const editTitleHandler = () => {
  //   setEditTitleInput(post!.title);
  //   const newPosts = [...posts];
  //   const editIndex = newPosts.indexOf(post!);
  //   newPosts[editIndex].title = editTitleInput!;
  //   dispatch(updatePostAction(newPosts));
  //   setIsTitleEditActive(!isTitleEditActive);
  // };

  // const editArticleHandler = () => {
  //   setEditArticleInput(post!.body);
  //   const newPosts = [...posts];
  //   const editIndex = newPosts.indexOf(post!);
  //   newPosts[editIndex].body = editArticleInput!;
  //   dispatch(updatePostAction(newPosts));
  //   setIsArticleEditActive(!isArticleEditActive);
  // };

  const editHandler = () => {
    if (post) {
      const newPosts = [...posts];
      setEditInput({ title: post!.title, paragraph: post!.body });
      const editIndex = newPosts.indexOf(post!);
      console.log(editInput?.title);
      newPosts[editIndex].title = editInput!.title!;
      newPosts[editIndex].body = editInput!.paragraph;
      dispatch(updatePostAction(newPosts));
      setIsEditActive(!isEditActive);
    }
  };

  useEffect(() => {
    getComment(dispatch, comments);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.articleWrapper}>
        <div>
          {!isEditActive ? (
            <h4 className={styles.articleTitle}>{post?.title}</h4>
          ) : (
            <textarea
              className={styles.textArea}
              onChange={(e) => {
                setEditInput({ ...editInput!, title: e.target.value });
              }}
              value={editInput!.title}
            />
          )}
        </div>
        <div>
          {!isEditActive ? (
            <p className={styles.paragraph}>{post?.body}</p>
          ) : (
            <textarea
              className={styles.paragraphTextArea}
              onChange={(e) => {
                setEditInput({ ...editInput!, paragraph: e.target.value });
              }}
              value={editInput!.paragraph}
            />
          )}
          {user === 'admin@admin.com' && (
            <div className={styles.editButtonWrapper}>
              <Button
                stripeColor="red"
                label={isEditActive ? 'Save' : 'Edit'}
                clickHandler={editHandler}
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
