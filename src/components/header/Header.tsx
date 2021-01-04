import React, { FC } from 'react';
import { Navigation } from '../nav/Navigation';
import { Logo } from '../logo/Logo';
import { Users } from '../users/Users';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>
        <div className={styles.usersWrapper}>
          <Users />
        </div>
      </header>
    </div>
  );
};
