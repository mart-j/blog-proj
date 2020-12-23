import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <nav>
      <NavLink exact activeClassName={styles.active} to="/">
        Home
      </NavLink>

      <NavLink activeClassName={styles.active} to="/articles">
        Articles
      </NavLink>

      <NavLink activeClassName={styles.active} to="/login">
        Login
      </NavLink>
    </nav>
  );
};
