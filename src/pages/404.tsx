import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const FourOuFour: FC = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname} Error 404!</code>
      </h3>
    </div>
  );
};
