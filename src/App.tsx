import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './pages/Home';
import { Articles } from './pages/Article';
import { Login } from './components/loginForm/Login';
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
