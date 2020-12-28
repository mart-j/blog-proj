import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  label: string;
  clickHandler?: () => void;
}

export const Button: FC<Props> = ({ clickHandler, label }) => {
  return (
    <button type="submit" onClick={clickHandler} className={styles.button}>
      {label}
    </button>
  );
};
