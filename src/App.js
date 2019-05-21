import React, { Component } from 'react';
import GraphViewContainer from './Components/GraphViewContainer'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphViewContainer></GraphViewContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
