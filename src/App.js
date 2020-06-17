import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import c from './App.module.css';

import Header from './components/HEADER/Header';
import Navigation from './components/NAVIGATION/Navigation';
import Messages from './components/MESSAGES/Messages';
import Profile from './components/PROFILE/Profile';

const App = (props) => {
  return (
    <div className={c.app}>
      <BrowserRouter>
        <Header />
        <Navigation />

        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Messages} />

      </BrowserRouter>

    </div>
  );
}

export default App;
