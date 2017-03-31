import React from 'react';
import { Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App, {Todo} from './App';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/todo" component={Todo} />
  </Router>
), document.getElementById('root'));
