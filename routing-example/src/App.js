import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Home extends Component {
  render(){
    return (<h1>Home Page</h1>);
  }
}

// More components
class Contact extends Component {
  render(){
    return (<h1>Contact page</h1>);
  }
}

class About extends Component {
  render(){
    return (<h1>About page</h1>);
  }
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </Router>
);