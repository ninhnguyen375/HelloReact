import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <img src={logo} height="300px" alt="something"/>
        {/* <Button>Click To Say Hello</Button> */}
      </div>
    );
  }
}

export default App;
