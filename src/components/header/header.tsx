import React, { FC } from 'react';
import { Navigation } from '../nav/Navigation';
import { Logo } from '../logo/Logo';
import { Users } from '../users/Users';
import { Search } from '../search/Search';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header>
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
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
};
