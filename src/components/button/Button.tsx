import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  label: string;
  clickHandler?: () => void;
  stripeColor?: string;
  textColor?: string;
}

export const Button: FC<Props> = ({
  textColor,
  clickHandler,
  label,
  stripeColor,
}) => {
  return (
    <button
      style={{ borderColor: stripeColor, color: textColor }}
      type="submit"
      onClick={clickHandler}
      className={styles.button}
    >
      {label}
    </button>
  );
};
