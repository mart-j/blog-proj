import React from 'react';
import { Article } from '../components/article/Article';
import { Comments } from '../components/comments/Comments';
import { ReadNextList } from '../components/readNextList/ReadNextList';

export const ArticlePage = () => {
  return (
    <>
      <Article />
      <ReadNextList />
      <Comments />
    </>
  );
};
