import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './pages/home';
import { Articles } from './pages/articles';
import { Login } from './pages/login';
import { FourOuFour } from './pages/404';
import { Header } from './components/header/header';
import { getPost } from './store/postsStore/actions';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPost(dispatch);
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/articles/:id">
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
