import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './Shopping/ShoppingList';

class App extends Component {
  Sc = new ShoppingList();
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>{this.Sc.render()}</div>
        </header>
      </div>
    );
  }
}

export default App;
