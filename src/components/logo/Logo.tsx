import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  const history = useHistory();

  const backToHomeHandler = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      <div onClick={backToHomeHandler} className={styles.logoWrapper}>
        <div className={styles.logoSquare}>
          <div className={styles.logoText}>devBlog</div>
        </div>
        <div className={styles.logoSquare}></div>
      </div>
    </div>
  );
};
