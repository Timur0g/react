// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import props from './redux/state';
import render_react_dom from './redux/render';
 

// const render_react_dom = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App props={props} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

render_react_dom()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
