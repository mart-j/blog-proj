import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { updateCommentsAction } from '../../store/commentsStore/actions';
import { Comment } from '../../store/commentsStore/types';
import { Button } from '../button/Button';
import styles from './Comments.module.scss';

export const Comments = () => {
  const [commentInput, setCommentInput] = useState<Comment>();
  const textArea = useRef<HTMLTextAreaElement>(null);

  const comments = useSelector((state: RootState) => {
    return state.commentsStore.comments;
  });

  const user = useSelector((state: RootState) => {
    return state.userStore.user.email;
  });

  const { id } = useParams<{ id: string }>();

  const filteredComments = comments.filter((comment) => {
    return comment.postId === Number(id);
  });

  const dispatch = useDispatch();

  const removeCommentHandler = (uId: number) => {
    const newComments = [...comments];
    const currComm = newComments.find((comment) => {
      return comment.id === uId;
    });
    const removeIndex = comments.indexOf(currComm!);
    newComments.splice(removeIndex, 1);
    dispatch(updateCommentsAction(newComments));
  };

  const submitFormHandler = () => {
    const newComments = [...comments, commentInput!];
    dispatch(updateCommentsAction(newComments));
  };

  return (
    <div className={styles.commentsWrapper}>
      {filteredComments.map((comment, i) => {
        return (
          <div key={`${i}`} className={styles.comment}>
            <div className={styles.email}>{comment.email}</div>
            <div className={styles.commTitle}>Comment:</div>
            <div className={styles.commentBody}>{comment.body}</div>
            {user === 'admin@admin.com' && (
              <Button
                label="Delete"
                clickHandler={() => removeCommentHandler(comment.id!)}
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
              submitFormHandler();
              setCommentInput({ ...commentInput!, body: '' });
              textArea.current!.value = '';
            }}
            className={styles.form}
          >
            <textarea
              ref={textArea}
              placeholder="Your comment goes here..."
              name="commentArea"
              id="commentArea"
              cols={100}
              rows={5}
              className={styles.commentArea}
              onChange={(e) => {
                setCommentInput({
                  ...commentInput!,
                  body: e.target.value,
                  email: user,
                  postId: Number(id),
                });
              }}
            ></textarea>
            <div className={styles.buttonWrapper}>
              <Button label="Add" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
