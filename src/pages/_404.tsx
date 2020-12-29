import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const FourOuFour: FC = () => {
  const location = useLocation();

  return (
    <div>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
      <h1>Error 404!</h1>
    </div>
  );
};
