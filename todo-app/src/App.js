import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state={list:[],
                item:''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({item: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    console.log('in the handleClick');

    var newItem = {
      item: this.state.item,
      id: Date.now()
    };

    this.setState(prevState => ({
      list: (prevState.list.concat(newItem)), 
      item: ''
    }))    
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-header">
          <h2>This is a Todo App</h2>
        </div>
        <p className="todo-input-feilds">
          <input onChange={this.handleChange} value={this.state.item} />
          <button onClick={this.handleClick}>
            Add
          </button>
        </p>
        <TodoList items={this.state.list} />

      </div>
    );
  }
}

// export class TodoList extends React.Component{
//   render(){
//     return(
//       <ul>
//         {this.props.items.map(item=> 
//           (<li>item</li>)
//         )}
//       </ul>
//     );
//   }
// }

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    );
  }
}


export default App;
