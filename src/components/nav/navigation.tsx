import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <nav>
      <NavLink className={styles.navItem} exact activeClassName={styles.active} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navItem} activeClassName={styles.active} to="/login">
        Login
      </NavLink>
    </nav>
  );
};
