import React, { FC, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store';
import {
  getComment,
  updateCommentsAction,
} from '../store/commentsStore/actions';
import { Comment } from '../store/commentsStore/types';
import { updatePostAction } from '../store/postsStore/actions';
import styles from './Article.module.scss';

export const Articles: FC = () => {
  const [commentInput, setCommentInput] = useState<Comment>();
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

  const submitFormHandler = () => {
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

  const textArea = useRef<HTMLTextAreaElement>(null);

  const removeCommentHandler = (uId: number) => {
    const newComments = [...comments];
    const currComm = newComments.find((comment) => {
      return comment.id === uId;
    });
    const removeIndex = comments.indexOf(currComm!);
    newComments.splice(removeIndex, 1);
    dispatch(updateCommentsAction(newComments));
  };

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
  }, []);
  return (
    <>
      <div className={styles.articlesWrapper}>
        <div>
          {!isTitleEditActive ? (
            <h4 className={styles.articles_title}>Title: {post?.title}</h4>
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
            <p className={styles.articles_title}>{post?.body}</p>
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
                editArticleHandler(); // ATSAAKAM SHEIT!!!!!!!!!!!!!!!!!
                setIsArticleEditActive(!isArticleEditActive);
              }}
            >
              {isArticleEditActive ? 'Save' : 'Edit'}
            </button>
          )}
        </div>
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
              cols={50}
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
            <button type="submit">Submit</button>
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
              {user === 'admin@admin.com' && (
                <button
                  onClick={() => {
                    removeCommentHandler(comment.id!);
                  }}
                >
                  DELETE
                </button>
              )}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
