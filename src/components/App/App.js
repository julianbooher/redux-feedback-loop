import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Feel from '../Feel/Feel'
import Understand from '../Understand/Understand'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'


// Redux stuff
import { HashRouter as Router, Route } from 'react-router-dom'; 
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path="/" component={Feel}/>
          <Route path="/understand" component={Understand}/>
          <Route path="/support" component={Support}/>
          <Route path="/comments" component={Comments}/>
          <Route path="/review" component={Review}/>
          <Route path="/success" component={Success}/>
        </Router>
      </div>
    );
  }
}


const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(App);