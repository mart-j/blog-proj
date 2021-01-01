import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../components/header/Header.module.scss';

export const FourOuFour: FC = () => {
  const location = useLocation();

  return (
    <div>
      <h2 className={styles.errorMessage}>
        No match for <code>{location.pathname}</code>
      </h2>
      <h1 className={styles.errorMessage}>Error 404!</h1>
    </div>
  );
};
