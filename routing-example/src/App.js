import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

export class NavigationApp extends Component {
  constructor(props) {
    super(props);
    this.state={items: this.props.route.items};
  }

  render() {
    return (
      <div className="App">
        <ul>
        {this.state.items.map((item, index) =>
          <li key={index}><NavItem name={item}/></li>
         )}
        </ul>
      </div>
    );
  }
}

class NavItem extends Component {
  render() {
    return (
      <Link to={"/" + this.props.name}>{this.props.name}</Link>
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
    <Route path="/" component={NavigationApp} items={['home', 'contact', 'about']} />
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </Router>
);