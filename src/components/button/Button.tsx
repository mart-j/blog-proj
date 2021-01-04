import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  type?: 'submit' | 'button';
  label: string;
  clickHandler?: () => void;
  stripeColor?: string;
  textColor?: string;
}

export const Button: FC<Props> = ({
  type = 'button',
  textColor,
  clickHandler,
  label,
  stripeColor,
}) => {
  return (
    <button
      style={{ borderColor: stripeColor, color: textColor }}
      type={type}
      onClick={clickHandler}
      className={styles.button}
    >
      {label}
    </button>
  );
};
