import React, { FC } from 'react';
import { Article } from '../components/article/Article';
import { Comments } from '../components/comments/Comments';
import { RelatedArticles } from '../components/readNextList/RelatedArticles';

export const ArticlePage: FC = () => {
  return (
    <>
      <Article />
      <RelatedArticles />
      <Comments />
    </>
  );
};
