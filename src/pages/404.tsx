import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const FourOuFour: FC = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h2>Error 404!</h2>
    </div>
  );
};
