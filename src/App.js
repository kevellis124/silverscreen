import React, { Component } from 'react';
import logo from './logo.svg';
import GraphViewContainer from './Components/GraphViewContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphViewContainer></GraphViewContainer>
      </div>
    );
  }
}

export default App;
