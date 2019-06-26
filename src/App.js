import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GraphViewContainer from './Components/GraphViewContainer';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header></Header>
              <Route path="/" exact component={GraphViewContainer} />
              <Route path="/about/" component={About} />
            <Footer></Footer>
          </div>
        </Router>
    );
  }
}

export default App;
