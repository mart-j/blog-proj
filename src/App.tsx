import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './pages/home';
import { Articles } from './pages/articles';
import { SignIn } from './pages/signIn';

const App = () => {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/sign-in">SignIn</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
