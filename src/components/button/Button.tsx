import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  label: string;
  clickHandler?: () => void;
  redBorder?: string;
}

export const Button: FC<Props> = ({ clickHandler, label, redBorder }) => {
  return (
    <button
      style={{ borderColor: redBorder }}
      type="submit"
      onClick={clickHandler}
      className={styles.button}
    >
      {label}
    </button>
  );
};
