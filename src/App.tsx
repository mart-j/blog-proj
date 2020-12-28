import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './pages/Home';
import { ArticlePage } from './pages/ArticlePage';
import { Login } from './pages/Login';
import { FourOuFour } from './pages/_404';
import { Header } from './components/header/Header';
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
          <ArticlePage />
        </Route>
        <Route path="*">
          <FourOuFour />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
