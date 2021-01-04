import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home } from './pages/Home';
import { ArticlePage } from './pages/ArticlePage';
import { Login } from './pages/Login';
import { FourOuFour } from './pages/_404';
import { Header } from './components/header/Header';
import { getPost } from './store/postsStore/actions';
import { changeUserAction } from './store/userStore/actions';

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const setUser = () => {
    if (localStorage.users) {
      const loginDetailsInput = JSON.parse(localStorage.users);
      dispatch(changeUserAction(loginDetailsInput));
    }
  };

  useEffect(() => {
    setUser();
    getPost(dispatch);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
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
    </>
  );
};
export default App;
