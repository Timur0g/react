import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import css from './App.module.css';

import Header from './components/HEADER/Header';
import Navigation from './components/NAVIGATION/Navigation';
import Messages from './components/MESSAGES/Messages';
import Profile from './components/PROFILE/Profile';

const App = (props) => {
  return (
    <div className={css.app}>
      <BrowserRouter>
        <Header />
        <Navigation />
        
        <Route path="/profile" render={() => <Profile props={props.props}/>} />
        <Route path="/messages" render={() => <Messages messages={props.props.messages}/>} />

      </BrowserRouter>

    </div>
  );
}

export default App;
