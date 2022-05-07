import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from './store'
import App from './App'
import * as util from './util'
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <Provider>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
