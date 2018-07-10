import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from './components/Article'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          
          <Search />
          <Results />
          <SavedArticles />
        </div>
      </div>
    );
  }
}

export default App;
