import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';
import {
  deleteCommentAction,
  updateCommentsAction,
} from '../../store/commentsStore/actions';
import { Button } from '../button/Button';
import styles from './Comments.module.scss';

export const Comments: FC = () => {
  const [commentInput, setCommentInput] = useState('');

  const { comments, user } = useSelector((state: RootState) => {
    return {
      comments: state.comments.comments,
      user: state.users.user.email,
    };
  });

  const { id } = useParams<{ id: string }>();

  const filteredComments = comments.filter((comment) => {
    return comment.postId === Number(id);
  });

  const dispatch = useDispatch();

  const removeCommentHandler = (uId: number | string) => {
    dispatch(deleteCommentAction(uId));
  };

  const submitCommentHandler = () => {
    const newComment = {
      body: commentInput,
      email: user,
      postId: Number(id),
      id: uuidv4(),
    };
    dispatch(updateCommentsAction(newComment));
  };

  return (
    <div className={styles.commentsWrapper}>
      {filteredComments.map(({ body, email, id: postId }, i) => {
        return (
          <div key={`${i}`} className={styles.comment}>
            <div className={styles.email}>{email}</div>
            <div className={styles.commTitle}>Comment:</div>
            <div className={styles.commentBody}>{body}</div>
            {user === 'admin@admin.com' && (
              <Button
                label="Delete"
                clickHandler={() => removeCommentHandler(postId)}
              />
            )}
          </div>
        );
      })}
      {user !== 'guest' && (
        <div className={styles.formWrapper}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitCommentHandler();
              setCommentInput('');
            }}
            className={styles.form}
          >
            <textarea
              value={commentInput}
              placeholder="Your comment goes here..."
              name="commentArea"
              id="commentArea"
              cols={100}
              rows={5}
              className={styles.commentArea}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
            ></textarea>
            <div className={styles.buttonWrapper}>
              <Button label="Add" type="submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
