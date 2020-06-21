import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//  if (window.location.href === "http://localhost:3000/") {
//     window.location.href = "http://localhost:3000/profile"
//  }  

const props = {
  messages: 'Yoyoyoy',
  posts: ['post1', 'post2','post1']
}

ReactDOM.render(
  <React.StrictMode>
    <App props={props}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
