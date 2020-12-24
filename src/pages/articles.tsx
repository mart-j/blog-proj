import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { getComment } from '../store/commentsStore/actions';

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
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
      <button onClick={backButtonHandler}>BackToHome</button>
      {suggestedArticles.map((item, i) => {
        return (
          <div key={`${i}`}>
            <div>{item.title}</div>
            <button onClick={() => readMoreButtonHandler(item.id)}>
              Read More
            </button>
          </div>
        );
      })}
      <hr />
      <div>
        {filteredComments.map((comment, i) => {
          return (
            <div key={`${i}`}>
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
