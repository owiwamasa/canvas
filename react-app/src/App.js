import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/ProfilePage';
import { authenticate } from './store/session';
import ArtistPage from './components/ArtistPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/artist-pages/:artistPageId' exact={true} >
          <ArtistPage/>
        </Route>
        <Route path='/search-results/:id' exact={true}>
          <SearchResults />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
