import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
//need to import review in as well
import Review from '../Review/Review.jsx';
//adding in a success page
import Success from '../Success/Success.jsx';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

      <Route exact path= "/" component= {Feeling} />
      <Route path= "/2" component = {Understanding} />
      <Route path= "/3" component = {Support} />
      <Route path= "/4" component = {Comments} />
      {/* adding in a review route page */}
      <Route path="/5" component={Review} />
      <Route path="/success" component={Success} />

      

      </div>
    </Router>
    );
  }
}

export default App;
