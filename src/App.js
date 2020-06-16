import React from 'react';
import c from './App.module.css';

import Header from './components/HEADER/Header';
import Navigation from './components/NAVIGATION/Navigation';
import Profile from './components/PROFILE/Profile';

// const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;

const App = (props) => {
  return (
    <div className={c.app}>
      <Header />
      <Navigation />

      <Profile text="My first props"/>
      
    </div>
  );
}

export default App;
