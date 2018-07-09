import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          {/* <Articles /> */}
        </div>
      </div>
    );
  }
}

export default App;
