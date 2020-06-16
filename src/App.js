import React from 'react';
import './App.css';

import Header from './components/HEADER/Header';
import Navigation from './components/NAVIGATION/Navigation';
import Profile from './components/PROFILE/Profile';

// const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />

      <Profile />
    </div>
  );
}

export default App;
