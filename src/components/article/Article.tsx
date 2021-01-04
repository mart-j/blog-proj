import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { getComment } from '../../store/commentsStore/actions';
import { updatePostAction } from '../../store/postsStore/actions';
import { Button } from '../button/Button';
import styles from './Article.module.scss';

export const Article: FC = () => {
  const [isEditActive, setIsEditActive] = useState(false);

  const [editInput, setEditInput] = useState({
    title: '',
    paragraph: '',
  });

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const { comments, posts, user } = useSelector((state: RootState) => {
    return {
      posts: state.posts.posts,
      comments: state.comments.comments,
      user: state.users.user.email,
    };
  });

  const history = useHistory();

  const post = posts.find((element) => element.id === Number(id));

  const backButtonHandler = () => {
    history.push('/');
  };

  const editHandler = () => {
    if (post) {
      setEditInput({ title: post.title, paragraph: post.body });
      dispatch(updatePostAction(editInput, Number(id)));
      setIsEditActive(!isEditActive);
    }
  };

  useEffect(() => {
    getComment(dispatch, comments);
  }, []);

  return (
    <div className={styles.articleWrapper}>
      <div>
        {!isEditActive && post ? (
          <h4 className={styles.articleTitle}>{post.title}</h4>
        ) : (
          <textarea
            className={styles.textArea}
            onChange={(e) => {
              setEditInput({ ...editInput, title: e.target.value });
            }}
            value={editInput!.title}
          />
        )}
      </div>
      <div>
        {!isEditActive && post ? (
          <p className={styles.paragraph}>{post.body}</p>
        ) : (
          <textarea
            className={styles.paragraphTextArea}
            onChange={(e) => {
              setEditInput({ ...editInput, paragraph: e.target.value });
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
  );
};
