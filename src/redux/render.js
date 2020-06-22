import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App.js';
import props from '../redux/state.js';


const render_react_dom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App props={props} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default render_react_dom;
