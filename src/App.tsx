import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Articles } from './pages/articles';
import { Login } from './pages/signIn';
import { FourOuFour } from './pages/404';
import { Header } from './components/header/header';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="*">
          <FourOuFour />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
