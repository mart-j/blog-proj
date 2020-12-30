import React, { FC } from 'react';
import { Navigation } from '../nav/Navigation';
import { Logo } from '../logo/Logo';
import { Users } from '../users/Users';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo />
        <Navigation />
        <Users />
      </header>
    </div>
  );
};
