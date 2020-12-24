import React, { FC } from 'react';
import { Navigation } from '../nav/navigation';
import { Logo } from '../logo/logo';
import { Users } from '../users/users';
import { Search } from '../search/search';

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <Logo />
          </div>
          <div className="col-xs-5">
            <Navigation />
          </div>
          <div className="col-xs-2">
            <Users />
          </div>
          <div className="col-xs-2">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
