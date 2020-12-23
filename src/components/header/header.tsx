import React, { FC } from 'react';
import { Navigation } from '../nav/navigation';
import { Logo } from '../logo/logo';
import { Users } from '../users/users';

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-2">
            <Logo />
          </div>
          <div className="col-xs-5">
            <Navigation />
          </div>
          <div className="col-xs-2">
            <Users />
          </div>
        </div>
      </div>
    </header>
  );
};
