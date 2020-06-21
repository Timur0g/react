import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import css from './App.module.css';

import Header from './components/HEADER/Header';
import Navigation from './components/NAVIGATION/Navigation';
import Messages from './components/MESSAGES/Messages';
import Profile from './components/PROFILE/Profile';

const App = (props) => {
  console.log(props)
  return (
    <div className={css.app}>
      <BrowserRouter>
        <Header />
        <Navigation />
test

        <Route path="/profile" render={() => <Profile posts={props.props.posts}/>} />
        <Route path="/messages" render={() => <Messages messages={props.props.messages}/>} />

      </BrowserRouter>

    </div>
  );
}

export default App;
