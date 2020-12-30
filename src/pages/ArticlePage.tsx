import React, { FC } from 'react';
import { Article } from '../components/article/Article';
import { Comments } from '../components/comments/Comments';
import { ReadNextList } from '../components/readNextList/ReadNextList';

export const ArticlePage: FC = () => {
  return (
    <>
      <Article />
      <ReadNextList />
      <Comments />
    </>
  );
};
