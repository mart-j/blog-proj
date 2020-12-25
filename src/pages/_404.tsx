import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './_404.module.scss';

export const FourOuFour: FC = () => {
  const location = useLocation();

  return (
    <div className={styles.errorpage}>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
      <h1>Error 404!</h1>
    </div>
  );
};
