import React, { FC } from 'react';
import { Navigation } from '../nav/Navigation';
import { Logo } from '../logo/Logo';
import { Users } from '../users/Users';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div>
          <Logo />
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <Users />
        </div>
      </div>
    </header>
  );
};
