import React, { FC } from 'react';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoSquare}>
        <div className={styles.logoText}>devBlog</div>
      </div>
      <div className={styles.logoSquare}></div>
    </div>
  );
};
