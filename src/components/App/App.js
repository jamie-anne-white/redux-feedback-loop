import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
//need to import review in as well
import Review from '../Review/Review.jsx';
//adding in a success page
import Success from '../Success/Success.jsx';
//adding in edit page 
import Edit from '../Edit/Edit.jsx';
//adding in MaterialUI App Bar
import AppBar from '@material-ui/core/AppBar';
//adding in Admin 
import Admin from '../Admin/Admin.jsx'






class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
      <AppBar className="App-header" position="static">
            <h1 className="App-title">Feedback</h1>
            <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>

            </ul>
          </AppBar>

      <Route exact path= "/" component= {Feeling} />
      <Route path= "/2" component = {Understanding} />
      <Route path= "/3" component = {Support} />
      <Route path= "/4" component = {Comments} />
      {/* adding in a review route page */}
      <Route path="/5" component={Review} />
      <Route path="/success" component={Success} />
      {/* adding in a edit route page */}
      <Route path="/edit" component={Edit} />
      {/* adding in an admin route page */}
      <Route path="/admin" component={Admin} />



      

      </div>
    </Router>
    );
  }
}

export default App;
